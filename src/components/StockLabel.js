import React from 'react'
import PropTypes from 'prop-types'
import Stock from '../classes/Stock'

class StockLabel extends React.Component {
  render () {
    return (
      <div style={stockLabelContainer}>
        <div style={{position: "relative", margin: "auto"}}>{this.props.stock.ticker}</div>
      </div>
    )
  }
}
const stockLabelContainer = {
  width: "80px",
  height: "30px",
  border: "1px solid black",
  borderRadius: "12px"
}
export default StockLabel;
