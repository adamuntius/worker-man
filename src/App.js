import './App.css';
import React, { Component } from 'react';
import Sliders from './components/Sliders';
import Label from './components/Label';
import Button from './components/Button.js';
import Header from './components/Header.js';
import Nav from './components/Nav.js';
import Home from './components/Home.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


class App extends Component {
  state = {
    title: "Work Slider"
  }
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
    return newString + decimalString;
  }
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}


export default App;
