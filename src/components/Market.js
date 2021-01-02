import React from 'react'
import PropTypes from 'prop-types'
import Label from './Label'
import StockLabel from './StockLabel'
import stocksArray from '../classes/Stock.js'

class Market extends React.Component {
  render () {
    return (
      <div style={marketGrid}>
        <div style={stocksPanel}>
          <Label field={"Stocks"} value={""}/>
          <StockLabel stock={stocksArray[0]} />
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
  height: "250px"
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
