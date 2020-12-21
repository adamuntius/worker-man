import React from 'react'
import PropTypes from 'prop-types'
import './Home.css'
import Button from './Button.js'
import Label from './Label.js'
import Sliders from './Sliders.js'
import SmallLabel from './SmallLabel.js'
import SmallButton from './SmallButton.js'

class Home extends React.Component {
  state = {
    cash: 100000,
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
    educationUnlockButtonLocked: false,
  };
  formatMoney(number) {
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
  upgradeEfficiency(cost) {
    if (this.state.workExperience >= this.state.efficiencyUpgradeCost) {
      this.setState({workExperience: this.state.workExperience - cost,
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
  incrementCash = (cashPerIncrement) => {
    this.setState({
      cash: this.state.cash + cashPerIncrement
    });
  };
  incrementWorkSliderWidth(speed) {
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
  incrementEducationSliderWidth(speed) {
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
  getCareerPromotion(cost) {
    if (this.state.workExperience >= cost) {
      this.setState({careerLevel: this.state.careerLevel + 1,
      workExperience: this.state.workExperience - cost,
      cashPerIncrement: this.state.cashPerIncrement * 1.05})

    }
  }
  render () {
    return (
      <div className="home-grid">
        <div>
          <Button name={"Work"} smallText={`Speed: ${this.state.workSpeed} Rate: ${this.formatMoney(this.state.cashPerIncrement)}$/day`} functionToRun={
              () => {
                this.incrementWorkSliderWidth(100);
              } }
              locked={this.state.workButtonLocked}
              halfActive={this.state.workButtonHalfActive}
            />
          <div style={{maxWidth: "300px", border: '1px solid', borderColor: this.state.workSliderColor, borderRadius: "10px", overflow: "hidden", margin: "8px auto"}}>
            <Sliders width={this.state.workSliderWidth}/>
          </div>
          <div style={{display: "grid", gridTemplateColumns: "2fr 1fr 2fr"}}>
            <SmallButton name={"Unlock Education"} smallText={`Cost: ${this.state.educationCost}`}
              functionToRun={() => this.enableEducation()}
              locked={this.state.educationUnlockButtonLocked}/>
            <Button name={"Education"} functionToRun={
                () => {
                  this.incrementEducationSliderWidth(100)
                }
              }
              smallText={`${this.state.currentEducation}: ${this.state.educationCompleted}/${this.state.educationNumber}`}
              locked={this.state.educationButtonLocked}
              halfActive={this.state.educationButtonHalfActive}
            />
            <div></div>
          </div>
          <div style={{maxWidth: "300px", border: '1px solid', borderColor: this.state.workSliderColor, borderRadius: "10px", overflow: "hidden", margin: "8px auto"}}>
              <Sliders width={this.state.educationSliderWidth}/>
          </div>
          <Button name={"Career Promotion"} smallText={"Cost: 5 Work Exp"} functionToRun={
              () => {this.getCareerPromotion(this.state.careerPromotionCost)}
            }/>
          <Button name={"Efficiency Upgrade"} smallText={"Cost: 5 Work Exp"} functionToRun={
              () => {this.upgradeEfficiency(this.state.efficiencyUpgradeCost)}
          }/>
        </div>
        <div className="middleBar">
        </div>
        <div>
          <Label field={"Cash"} value={this.formatMoney(this.state.cash)}/>
          <Label field={"Education Level"} value={this.state.educationLevel} />
          <Label field={"Work Speed"} value={this.state.workSpeed} />
          <Label field={"Work Experience"} value={this.state.workExperience} />
          <Label field={"Work EXP Per Completion"} value={this.state.workExperiencePerCompletion}/>
          <Label field={"Career Level"} value={this.state.careerLevel} />
        </div>
      </div>
    )
  }
}


export default Home;
