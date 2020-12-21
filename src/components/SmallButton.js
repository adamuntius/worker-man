import React from 'react'
import PropTypes from 'prop-types'
import SmallLabel from './SmallLabel.js'

class SmallButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    }
  }
  inHover() {
    this.setState({hover: true})
  }
  offHover() {
    this.setState({hover: false})
  }
  getStyle() {
    return this.props.locked ? "red" : "black";
  }
  render () {
    const smallButtonStyle = {
      border: "1px solid black",
      width: "108px",
      height: "48px",
      borderRadius: "10px",
      fontSize: "12px",
      margin: "64px 24px 24px auto",
      display: "flex",
      flexDirection: "column",
      borderColor: this.getStyle()
    }
    if (this.props.smallText) {
      return (
        <div style={this.state.hover ? smallButtonHoverStyle : smallButtonStyle} onClick={this.props.functionToRun} onMouseEnter={() => this.inHover()}
        onMouseLeave={() => this.offHover()}>
          <div style={{margin: "auto"}}>{this.props.name}</div>
          <SmallLabel text={this.props.smallText}/>
        </div>
      )
    }
    return (
      <div style={smallButtonStyle} onClick={this.props.functionToRun} onMouseEnter={() => this.inHover()}
      onMouseLeave={() => this.offHover()}>
        <div style={{margin: "auto"}}>{this.props.name}</div>
      </div>
    )
  }
}


const smallButtonHoverStyle = {
    backgroundImage: "linear-gradient(15deg, #DCE1E3, #BBBBBB)",
    border: "1px solid black",
    width: "108px",
    height: "48px",
    borderRadius: "10px",
    fontSize: "12px",
    margin: "64px 24px 24px auto",
    display: "flex",
    flexDirection: "column"
}

export default SmallButton;
