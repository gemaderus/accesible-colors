import React, { Component } from 'react';
import Sample from './sample';
import Control from './control';
import Legend from './legend';
import {colors, legends} from './colors';

import './App.css';

const getColor = (name) => {
  return colors.filter((color) => color.name === name)[0];
}

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
    console.log(getColor('Positive Secondary'));

    return (
      <div>
        <ul className="grid">
          <Sample color={getColor('Positive Primary')} background={getColor('Moradul')}/>
          <Sample color={getColor('Positive Secondary')} background={getColor('Moradul')}/>

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
        <Legend/>
        <Control onClick={this.onClick}/>
      </div>

    );
  }
}

export default App;
