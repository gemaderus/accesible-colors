import React, { Component } from 'react';
import Sample from './sample';
import Control from './control';
import colors from './colors';

import './App.css';

class App extends Component {
  state = {
    items: []
  }

  onClick = (sample) => {
    this.setState(state => {
      return {
        ...state,
        items: [ ...state.items, sample ]
      }
    })
  }

  removeSample = (index) => {
    this.setState(state => {
      return {
        ...state,
        items: state.items.slice(0, index).concat(state.items.slice(index + 1))
      }
    })
  }

  render() {
    return (
      <div>
      <ul className="grid">
        <Sample color={colors.midnight} background={colors.white}/>
        <Sample color={colors.fontColorStorm} background={colors.white}/>
        <Sample color={colors.midnight} background={colors.hint}/>
        <Sample color={colors.fontColorStorm} background={colors.hint}/>
        <Sample color={colors.fontColorMain} background={colors.moradul}/>
        <Sample color={colors.fontColorSecundary} background={colors.moradul}/>
        <Sample color={colors.fontColorMain} background={colors.slate}/>
        <Sample color={colors.fontColorSecundary} background={colors.slate}/>
        <Sample color={colors.fontColorMain} background={colors.majorelle}/>
        <Sample color={colors.fontColorSecundary} background={colors.majorelle}/>
        <Sample color={colors.fontColorMain} background={colors.lucky}/>
        <Sample color={colors.fontColorSecundary} background={colors.lucky}/>
        <Sample color={colors.fontColorMain} background={colors.midnight}/>
        <Sample color={colors.fontColorSecundary} background={colors.midnight}/>
        <Sample color={colors.fontColorMain} background={colors.mirage}/>
        <Sample color={colors.fontColorSecundary} background={colors.mirage}/>
        <Sample color={colors.fontColorMain} background={colors.columbia}/>
        <Sample color={colors.fontColorSecundary} background={colors.columbia}/>
        <Sample color={colors.fontColorMain} background={colors.lightSky}/>
        <Sample color={colors.fontColorSecundary} background={colors.lightSky}/>
        <Sample color={colors.fontColorMain} background={colors.maya}/>
        <Sample color={colors.fontColorSecundary} background={colors.maya}/>

        {this.state.items.map((sample, index) => {
          return (
            <Sample
              onClick={this.removeSample}
              key={index}
              index={index}
              color={sample.color}
              background={sample.background}
            />
          );
        })}

      </ul>
      <Control onClick={this.onClick}/>
      </div>

    );
  }
}

export default App;
