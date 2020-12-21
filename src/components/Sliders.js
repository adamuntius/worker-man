import React from 'react'
import PropTypes from 'prop-types'



class Sliders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      speed: 1
    }
  }

  componentDidMount() {
    // this.sliderInterval = setInterval(
    //   () => this.incrementWidth(),
    //   10
    // );
  }
  incrementWidth(speed) {
    this.setState({
      width: this.state.width + this.state.speed
    });
  }
  render () {
    const sliderStyle = {
      backgroundColor: '#004E7C',
      width: this.props.width,
      height: '10px',
    }
    return (
      <div style = {sliderStyle}>{this.props.title}</div>
    );
  }
}

export default Sliders;
