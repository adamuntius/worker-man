import React from 'react'
import PropTypes from 'prop-types'
import './Button.css'
import SmallLabel from './SmallLabel.js'

class Button extends React.Component {

  getStyle() {
    if (this.props.locked) {
      return (
        lockedStyle
      );
    }
    if (this.props.halfActive) {
      return (
        halfActiveStyle
      );
    }
    return buttonStyle;
  }
  render () {
    if (this.props.smallText) {
      return (
        <div className="button" style={this.getStyle()} onClick={this.props.functionToRun}>
          <div style={{margin: "auto"}}>{this.props.name}</div>
          <SmallLabel text={this.props.smallText}/>
        </div>
      )
    }
    return (
      <div className="button" style={buttonStyle} onClick={this.props.functionToRun}>
        <div style={{margin: "auto"}}>{this.props.name}</div>

      </div>
    )
  }
}
const buttonStyle = {
  border: "1px solid black",
  width: "200px",
  height: "48px",
  borderRadius: "10px",
  display: "flex",
  flexDirection: "column",
  margin: "64px auto 24px auto"
}
const lockedStyle = {
  border: "1px solid red",
  width: "200px",
  height: "48px",
  borderRadius: "10px",
  display:"flex",
  flexDirection: "column",
  margin: "64px auto 24px auto"
}
const halfActiveStyle = {
  border: "1px solid black",
  width: "200px",
  height: "48px",
  borderRadius: "10px",
  display: "flex",
  flexDirection: "column",
  margin: "64px auto 24px auto"
}
export default Button;
