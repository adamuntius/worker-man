import React from 'react'
import PropTypes from 'prop-types'
import HeaderItem from './HeaderItem'
import Home from './Home.js'
import Market from './Market.js'
import Portfolio from './Portfolio.js'
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
      activeHeaderItem: headerItems[1],
      cash: 500000,
      cashPerIncrement: 10,
      workSliderWidth: 0,
      workSliderColor: "black",
      speed: 1,
      educationLevel: "Middle School",
      currentEducation: "High School",
      workSliderActive: false,
      workSpeed: 1,
      workExperience: 0,
      educationSliderWidth: 0,
      educationSliderActive: false,
      workExperiencePerCompletion: 1,
      careerPromotionCost: 5,
      efficiencyUpgradeCost: 5,
      careerLevel: 0,
      educationCompleted: 0,
      educationNumber: 5,
      educationCost: 0,
      workButtonHalfActive: false,
      educationButtonHalfActive: false,
      workButtonLocked: false,
      educationButtonLocked: true,
      educationUnlockButtonLocked: false
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
            <li style={listItemStyle} onClick = {() => this.handleClick(0)}>
              <Link style={linkStyle} to="/Market">
                <HeaderItem activeHeader={this.state.activeHeaderItem} name={"Market"}/>
              </Link>
            </li>
            <li style={listItemStyle} onClick = {() => this.handleClick(1)}>
              <Link style={linkStyle} to="/Home">
                <HeaderItem activeHeader={this.state.activeHeaderItem} name={"Home"}/>
              </Link>
            </li>
            <li style={listItemStyle} onClick = {() => this.handleClick(2)}>
              <Link style={linkStyle} to="/Portfolio">
                <HeaderItem activeHeader={this.state.activeHeaderItem} name={"Portfolio"} />
              </Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/Market">
            <Market />
          </Route>
          <Route path="/Home">
            <Home headerState={this.state} adjustState={
                (stateObject) => {
                  this.setState(stateObject);
                  this.setState({activeHeaderItem: this.state.activeHeaderItem});
                }
              }/>
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

const headerItems = ["Market", "Home", "Portfolio"]
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
const listItemStyle = {
  height: "100%",
  width: "100%",
  position: "relative"
}
const linkStyle = {
  position: "relative",
  height: "100%",
  width: "100%",
  color: "white"
}
