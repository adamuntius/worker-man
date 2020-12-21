import React from 'react'
import PropTypes from 'prop-types'

class SmallLabel extends React.Component {
  render () {
    return (
      <div style={smallLabelStyle}>{this.props.text}</div>
    )
  }
}
const smallLabelStyle = {
  color: "#5C5F58",
  fontSize: "12px",
  margin: "auto",
  marginTop: "-3px"
}
export default SmallLabel;
