import React from 'react'
import PropTypes from 'prop-types'
import './Home.css'
import Button from './Button.js'
import Label from './Label.js'
import Sliders from './Sliders.js'
import SmallLabel from './SmallLabel.js'
import SmallButton from './SmallButton.js'
import Clock from './Clock.js'


class Home extends React.Component {
  state = {
  };
  componentDidMount() {
    console.log("mounted");
    console.log(this.props.state);
  }
  componentWillUnmount() {
    console.log("unmounted");
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
  render () {
    console.log(this.props.state.cash);
    console.log(this.props.state.cashPerIncrement);
    return (
      <div>
        <div className="home-grid">
          <div>
            <Button name={"Work"} smallText={`Speed: ${this.props.state.workSpeed} Rate: ${this.formatMoney(this.props.state.cashPerIncrement)}/day`} functionToRun={
                () => {
                  this.props.sendWorkSlider(100);
                } }
                locked={this.props.state.workButtonLocked}
                halfActive={this.props.state.workButtonHalfActive}
              />
            <div style={{maxWidth: "300px", border: '1px solid', borderColor: this.props.state.workSliderColor, borderRadius: "10px", overflow: "hidden", margin: "8px auto"}}>
              <Sliders width={this.props.state.workSliderWidth}/>
            </div>
            <div style={{display: "grid", gridTemplateColumns: "2fr 1fr 2fr"}}>
              <SmallButton name={"Unlock Education"} smallText={`Cost: ${this.props.state.educationCost}`}
                functionToRun={() => this.props.enableEducation()}
                locked={this.props.state.educationUnlockButtonLocked}/>
              <Button name={"Education"} functionToRun={
                  () => {
                    this.props.sendEducationSlider(100)
                  }
                }
                smallText={`${this.props.state.currentEducation}: ${this.props.state.educationCompleted}/${this.props.state.educationNumber}`}
                locked={this.props.state.educationButtonLocked}
                halfActive={this.props.state.educationButtonHalfActive}
              />
              <div></div>
            </div>
            <div style={{maxWidth: "300px", border: '1px solid', borderColor: this.props.state.workSliderColor, borderRadius: "10px", overflow: "hidden", margin: "8px auto"}}>
                <Sliders width={this.props.state.educationSliderWidth}/>
            </div>
            <Button name={"Career Promotion"} smallText={"Cost: 5 Work Exp"} functionToRun={
                () => {this.props.getCareerPromotion(this.props.state.careerPromotionCost)}
              }/>
            <Button name={"Efficiency Upgrade"} smallText={"Cost: 5 Work Exp"} functionToRun={
                () => {this.props.upgradeEfficiency(this.props.state.efficiencyUpgradeCost)}
            }/>
          </div>
          <div className="middleBar">
          </div>
          <div>
            <Label field={"Cash"} value={this.formatMoney(this.props.state.cash)}/>
            <Label field={"Education Level"} value={this.props.state.educationLevel} />
            <Label field={"Work Speed"} value={this.props.state.workSpeed} />
            <Label field={"Work Experience"} value={this.props.state.workExperience} />
            <Label field={"Work EXP Per Completion"} value={this.props.state.workExperiencePerCompletion}/>
            <Label field={"Career Level"} value={this.props.state.careerLevel} />
          </div>
        </div>
        <Clock />
      </div>
    )
  }
}


export default Home;
