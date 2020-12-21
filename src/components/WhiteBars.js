import React from 'react'
import PropTypes from 'prop-types'
import {useSpring, animated} from 'react-spring'

function WhiteBars() {
  const props = useSpring({
    opacity: 1, from: {opacity: 0},
    height: "2px",
    width: "100px",
    margin: "8px", from: {margin: "0px"},
    backgroundColor: "white"
  });
  return (
    <animated.div style={props}></animated.div>
  )
}

export default WhiteBars;
