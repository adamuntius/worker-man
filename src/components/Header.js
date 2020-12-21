import React from 'react'
import PropTypes from 'prop-types'
import HeaderItem from './HeaderItem'

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeHeaderItem: headerItems[1]
    }
  }
  handleClick(id) {
    console.log("handled");
    this.setState(state => ({
      activeHeaderItem: headerItems[id]
    }));
  }
  render () {
    return (
      <div>
        <div style={headerstyle}>
          <div style={headergrid}>
            <div onClick = {() => this.handleClick(0)}><HeaderItem activeHeader={this.state.activeHeaderItem} name={"Market"}/></div>
            <div onClick = {() => this.handleClick(1)}><HeaderItem activeHeader={this.state.activeHeaderItem} name={"Home"}/></div>
            <div onClick = {() => this.handleClick(2)}><HeaderItem activeHeader={this.state.activeHeaderItem} name={"My Portfolio"} /></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Header;

const headerItems = ["Market", "Home", "My Portfolio"]


const headergrid = {
  backgroundColor: "#004E7C",
  height: "100%",
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  alignItems: "center",
  fontSize: "24px",
  color: "white",
  textAlign: "center",
}

const headerstyle = {
  height: "12vh"
}
