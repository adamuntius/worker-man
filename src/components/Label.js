import React from 'react'
import PropTypes from 'prop-types'

class Label extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      length: 0
    }
  }
  getUnderbarWidth(props) {
    if (this.props.length) {
      return this.props.length * 12;
    }
    var fieldLength = this.props.field.toString().length;
    var valueLength = this.props.value.toString().length;
    var totalLength = fieldLength + valueLength;
    return totalLength * 12;
  }
  render () {
    const labelstyle = {
      textAlign: "center",
      color: "black",
      backgroundColor: "#DCE1E3",
      padding: "10px",
      borderRadius: "12px",
      margin: "8px auto",
      maxWidth: "240px"
    }
    const underbarstyle = {
      backgroundColor: "#B73225",
      color: "white",
      width: this.getUnderbarWidth(),
      height: "1px",
      marginTop: "-10px",
      marginBottom: "10px"
    }
    const flexstyle = {
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }
    return (
      <section>
        <div style = {flexstyle}>
          <div style = {labelstyle}>
            {this.props.field}: {this.props.value}
          </div>
          <div style = {underbarstyle}>
          </div>
        </div>
      </section>
    )
  }
}

export default Label;
