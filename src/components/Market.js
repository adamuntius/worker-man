import React from 'react'
import PropTypes from 'prop-types'
import Label from './Label'
import StockLabel from './StockLabel'
import stocksArray from '../classes/Stock.js'

class Market extends React.Component {
  state = {
    stockIndexValue: 100
  }
  formatMoney(number) {
    console.log(number + "being formatted");
    number = parseFloat(number);
    number = number.toFixed(2);
    var string = number.toString();
    if (string.includes(".")) {
      var noDecString = string.slice(0, string.indexOf("."));
      var decimalString = string.slice(string.indexOf("."), string.length)
    }
    else {
      var noDecString = string;
      var decimalString = "";
    }
    var array = [];
    var counter = 0;
    for (var i = noDecString.length - 1; i >= 0; i--) {
      array.unshift(noDecString.slice(i, i + 1));
      counter ++;
      if (counter == 3) { array.unshift(",")
      counter = 0;
      }
    }
    if (array[0] == ",") {array.shift(array[0]);}
    var newString = array.join("");
    return "$" + newString + decimalString;
  }
  render () {
    return (
      <div style={marketGrid}>
        <div style={stocksPanel}>
          <Label field={"Stocks"} value={""}/>
          <div style={{display: "flex",
          margin: "10px auto",
          fontSize: "11px",
          width: "200px",
          height: "40px",
          border: "1px solid black",
          borderRadius: "12px",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center"}}>
            {`Entire Market Index: ${this.formatMoney(this.state.stockIndexValue)}`}
          </div>
          <div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr", alignItems: "center", justifyItems: "center"}}>
            {stocksArray.map((stock) => (
              <StockLabel stock={stock} />
            ))}
          </div>
        </div>
        <div style={bondsPanel}>
          <Label field={"Bonds"} value={""} />
        </div>
        <div style={realEstatePanel}>
          <Label field={"Real Estate"} value={""} />
        </div>
      </div>
    )
  }
}

const marketGrid = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
}
const stocksPanel = {
  textAlign: "center",
  height: "650px",
}
const bondsPanel = {
  textAlign: "center"
}
const realEstatePanel = {
  textAlign: "center",
  gridColumnStart: "1",
  gridColumnEnd: "3"
}
export default Market;
