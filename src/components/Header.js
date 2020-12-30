import React from 'react'
import PropTypes from 'prop-types'
import HeaderItem from './HeaderItem'
import Home from './Home'
import Market from './Market'
import Portfolio from './Portfolio'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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
    <Router>
      <div style={headerstyle}>
        <nav>
          <ul style={headergrid}>
            <li onClick = {() => this.handleClick(0)}><HeaderItem activeHeader={this.state.activeHeaderItem} name={"Market"}/>
              <Link to="/Market"></Link>
            </li>
            <li onClick = {() => this.handleClick(1)}><HeaderItem activeHeader={this.state.activeHeaderItem} name={"Home"}/>
              <Link to="/Home"></Link>
            </li>
            <li onClick = {() => this.handleClick(2)}><HeaderItem activeHeader={this.state.activeHeaderItem} name={"My Portfolio"} />
              <Link to="/Portfolio"></Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/Market">
            <Market />
          </Route>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/Portfolio">
            <Portfolio />
          </Route>
        </Switch>
      </div>
    </Router>
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
  height: "12vh",
  listStyleType: "none"
}

const headerstyle = {
  height: "12vh"
}
