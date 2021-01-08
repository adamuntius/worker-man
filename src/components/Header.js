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
      workSpeed: 10,
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
  sendWorkSlider(speed) {
    console.log("Working");
    if (!this.state.workSliderActive) {
      this.setState({workSliderActive: true});
      const sliderInterval = setInterval(() => {
        if (this.state.workSliderWidth >= 300) {
          clearInterval(sliderInterval);
          this.setState({workSliderWidth: 0});
          this.incrementCash(this.state.cashPerIncrement);
          this.setState({workSliderActive: false});
          this.setState({workExperience: this.state.workExperience + this.state.workExperiencePerCompletion})
        }
        this.setState({workSliderWidth: this.state.workSliderWidth + 1});
      }, 150/this.state.workSpeed);
    }
  }
  sendEducationSlider(speed) {
    console.log("Educating");
    if (!this.state.educationSliderActive && !this.state.educationButtonLocked) {
      this.setState({educationSliderActive: true});
      const educationSliderInterval = setInterval(() => {
        if (this.state.educationSliderWidth >= 300) {
          clearInterval(educationSliderInterval);
          this.setState({educationSliderWidth: 0});
          this.setState({educationCompleted: this.state.educationCompleted + 1})
          this.setState({educationSliderActive: false});
          if (this.state.educationCompleted == this.state.educationNumber) {
            this.disableEducation(this.state.currentEducation);
          }

        }
        this.setState({educationSliderWidth: this.state.educationSliderWidth + 1});
      }, 10);
    }
  }
  formatMoney(number) {
    console.log(number + "being formatted");
    number = parseFloat(number);
    number = number.toFixed(2);
    var string = number.toString();
    if (string.includes(".")) {
      var noDecString = string.slice(0, string.indexOf("."));
      var decimalString = string.slice(string.indexOf("."), string.length)
    }
    else {
      var noDecString = string;
      var decimalString = "";
    }
    var array = [];
    var counter = 0;
    for (var i = noDecString.length - 1; i >= 0; i--) {
      array.unshift(noDecString.slice(i, i + 1));
      counter ++;
      if (counter == 3) { array.unshift(",")
      counter = 0;
      }
    }
    if (array[0] == ",") {array.shift(array[0]);}
    var newString = array.join("");
    return "$" + newString + decimalString;
  }
  upgradeEfficiency() {
    if (this.state.workExperience >= this.state.efficiencyUpgradeCost) {
      this.setState({workExperience: this.state.workExperience - this.state.efficiencyUpgradeCost,
                     workSpeed: (this.state.workSpeed * 1.1).toFixed(2)
      });
    }
  }
  enableEducation = (level) => {
    if (this.state.cash >= this.state.educationCost) {
      this.setState({educationButtonLocked: false,
      educationUnlockButtonLocked: true,
      cash: this.state.cash -= this.state.educationCost})
    }
  }
  disableEducation = (level) => {
    this.setState({educationButtonLocked: true,
                   educationCompleted: 0,
                   educationUnlockButtonLocked: false
    })
    if (level == "High School") {
      this.setState({educationCost: 10000,
      educationLevel: "High School",
      currentEducation: "College",
      workExperiencePerCompletion: 5})
    }
    if (level == "College") {
      this.setState({educationCost: 15000,
      educationLevel: "College",
      currentEducation: "Masters",
      workExperiencePerCompletion: 10})
    }
    if (level == "Masters") {
      this.setState({educationCost: 15000,
      educationLevel: "Masters",
      currentEducation: "Doctorate",
      workExperiencePerCompletion: 20})
    }
    if (level == "Doctorate") {
      this.setState({educationCost: 0,
      educationLevel: "Doctorate",
      currentEducation: "NA",
      workExperiencePerCompletion: 40})
    }
  }
  incrementCash = () => {
    this.setState({
      cash: this.state.cash + this.state.cashPerIncrement
    });
  };
  getCareerPromotion() {
    console.log("promoting");
    if (this.state.workExperience >= this.state.careerPromotionCost) {
      this.setState({careerLevel: this.state.careerLevel + 1,
      workExperience: this.state.workExperience - this.state.careerPromotionCost,
      cashPerIncrement: this.state.cashPerIncrement * 1.05})

    }
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
            <Home headerState={this.state}
              sendWorkSlider={() => this.sendWorkSlider()}
              sendEducationSlider={() => this.sendEducationSlider()}
              formatMoney={() => this.formatMoney()}
              upgradeEfficiency={() => this.upgradeEfficiency()}
              enableEducation={() => this.enableEducation()}
              disableEducation={() => this.disableEducation()}
              incrementCash={() => this.incrementCash()}
              getCareerPromotion={() => this.getCareerPromotion()}
              state={this.state}
              />
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
