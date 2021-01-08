import React from 'react'
import PropTypes from 'prop-types'
import Stock from '../classes/Stock'

class StockLabel extends React.Component {
  formatMoney = (number) => {
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
  getCircleStyle = (sector) => {
    if (this.props.stock.sector == "Technology") {
      return {
        width: "5px",
        height: "5px",
        backgroundColor: "blue",
        borderRadius: "50%",
        marginLeft: "6px"
      }
    }
    if (this.props.stock.sector == "Financials") {
      return {
        width: "5px",
        height: "5px",
        backgroundColor: "brown",
        borderRadius: "50%",
        marginLeft: "6px"
      }
    }
    if (this.props.stock.sector == "Real Estate") {
      return {
        width: "5px",
        height: "5px",
        backgroundColor: "green",
        borderRadius: "50%",
        marginLeft: "6px"
      }
    }
    if (this.props.stock.sector == "Health Care") {
        return {
          width: "5px",
          height: "5px",
          backgroundColor: "red",
          borderRadius: "50%",
          marginLeft: "6px"
        }
    }
    if (this.props.stock.sector == "Energy") {
        return {
          width: "5px",
          height: "5px",
          backgroundColor: "black",
          borderRadius: "50%",
          marginLeft: "6px"
        }
    }
    if (this.props.stock.sector == "General") {
      return {
        width: "5px",
        height: "5px",
        backgroundColor: "purple",
        borderRadius: "50%",
        marginLeft: "6px"
      }
    }
  }
  render () {
    console.log(this.props.stock.price);
    console.log(this.formatMoney(this.props.stock.price));
    return (
      <div className="button" style={stockLabelContainer}>
        <div style={this.getCircleStyle()}></div>
        <div style={tickerStyle}>
          <span>{this.props.stock.ticker} </span>
          <span>{this.formatMoney(this.props.stock.price)}</span>
        </div>
      </div>
    )
  }
}
const stockLabelContainer = {
  display: "flex",
  fontSize: "11px",
  width: "80px",
  height: "25px",
  margin: "10px",
  border: "1px solid black",
  borderRadius: "12px",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center"
}
const tickerStyle = {
  margin: "auto"
}
export default StockLabel;
