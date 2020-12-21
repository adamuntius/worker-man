import React from 'react';
import PropTypes from 'prop-types';
import { useSpring, animated } from 'react-spring';
import WhiteBars from './WhiteBars.js';

class HeaderItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    }
  }
  render () {
    var isActive = (this.props.name == this.props.activeHeader);

    if (isActive) {
      return (
          <div style={headerchild}>
            <WhiteBars />
            <div>{this.props.name}</div>
            <WhiteBars />
          </div>
      )
    }
    return (
      <div onClick={this.handleClick}>
        <div>{this.props.name}</div>
      </div>
    )
  }
}

const headerchild = {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
}


export default HeaderItem;
