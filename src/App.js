import React, { Component } from 'react';
import Sample from './sample';
import Control from './control';
import Legend from './legend';
import {colors} from './colors';

import './App.css';

const getColor = (name) => {
  return colors.filter((color) => color.name === name)[0];
}

class App extends Component {
  state = {
    items: []
  }

  onClick = sample => {
    const newSample = { background: { name: '', code: sample.background }, color: { name: '', code: sample.color } };

    this.setState(state => {
      return {
        ...state,
        items: [...state.items, newSample],
      };
    });
  };

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
          <Sample color={getColor('Positive Primary')} background={getColor('Moradul')}/>
          <Sample color={getColor('Positive Secondary')} background={getColor('Moradul')}/>
          <Sample color={getColor('Negative Primary')} background={getColor('Moradul')}/>
          <Sample color={getColor('Negative Secondary')} background={getColor('Moradul')}/>
          <Sample color={getColor('Positive Primary')} background={getColor('Moradul Light')}/>
          <Sample color={getColor('Positive Secondary')} background={getColor('Moradul Light')}/>
          <Sample color={getColor('Negative Primary')} background={getColor('Moradul Light')}/>
          <Sample color={getColor('Negative Secondary')} background={getColor('Moradul Light')}/>
          <Sample color={getColor('Positive Primary')} background={getColor('Moradul Dark')}/>
          <Sample color={getColor('Positive Secondary')} background={getColor('Moradul Dark')}/>
          <Sample color={getColor('Negative Primary')} background={getColor('Moradul Dark')}/>
          <Sample color={getColor('Negative Secondary')} background={getColor('Moradul Dark')}/>
          <Sample color={getColor('Positive Primary')} background={getColor('Martinique')}/>
          <Sample color={getColor('Positive Secondary')} background={getColor('Martinique')}/>
          <Sample color={getColor('Negative Primary')} background={getColor('Martinique')}/>
          <Sample color={getColor('Negative Secondary')} background={getColor('Martinique')}/>
          <Sample color={getColor('Positive Primary')} background={getColor('Martinique Light')}/>
          <Sample color={getColor('Positive Secondary')} background={getColor('Martinique Light')}/>
          <Sample color={getColor('Negative Primary')} background={getColor('Martinique Light')}/>
          <Sample color={getColor('Negative Secondary')} background={getColor('Martinique Light')}/>
          <Sample color={getColor('Positive Primary')} background={getColor('Martinique Dark')}/>
          <Sample color={getColor('Positive Secondary')} background={getColor('Martinique Dark')}/>
          <Sample color={getColor('Negative Primary')} background={getColor('Martinique Dark')}/>
          <Sample color={getColor('Negative Secondary')} background={getColor('Martinique Dark')}/>
          <Sample color={getColor('Positive Primary')} background={getColor('Pink')}/>
          <Sample color={getColor('Positive Secondary')} background={getColor('Pink')}/>
          <Sample color={getColor('Negative Primary')} background={getColor('Pink')}/>
          <Sample color={getColor('Negative Secondary')} background={getColor('Pink')}/>
          <Sample color={getColor('Positive Primary')} background={getColor('Pink Light')}/>
          <Sample color={getColor('Positive Secondary')} background={getColor('Pink Light')}/>
          <Sample color={getColor('Negative Primary')} background={getColor('Pink Light')}/>
          <Sample color={getColor('Negative Secondary')} background={getColor('Pink Light')}/>
          <Sample color={getColor('Positive Primary')} background={getColor('Pink Dark')}/>
          <Sample color={getColor('Positive Secondary')} background={getColor('Pink Dark')}/>
          <Sample color={getColor('Negative Primary')} background={getColor('Pink Dark')}/>
          <Sample color={getColor('Negative Secondary')} background={getColor('Pink Dark')}/>
          <Sample color={getColor('Positive Primary')} background={getColor('Blue Love')}/>
          <Sample color={getColor('Positive Secondary')} background={getColor('Blue Love')}/>
          <Sample color={getColor('Negative Primary')} background={getColor('Blue Love')}/>
          <Sample color={getColor('Negative Secondary')} background={getColor('Blue Love')}/>
          <Sample color={getColor('Positive Primary')} background={getColor('Blue Light')}/>
          <Sample color={getColor('Positive Secondary')} background={getColor('Blue Light')}/>
          <Sample color={getColor('Negative Primary')} background={getColor('Blue Light')}/>
          <Sample color={getColor('Negative Secondary')} background={getColor('Blue Light')}/>
          <Sample color={getColor('Positive Primary')} background={getColor('Blue Dark')}/>
          <Sample color={getColor('Positive Secondary')} background={getColor('Blue Dark')}/>
          <Sample color={getColor('Negative Primary')} background={getColor('Blue Dark')}/>
          <Sample color={getColor('Negative Secondary')} background={getColor('Blue Dark')}/>
          <Sample color={getColor('Positive Primary')} background={getColor('Mac And Cheese')}/>
          <Sample color={getColor('Positive Secondary')} background={getColor('Mac And Cheese')}/>
          <Sample color={getColor('Negative Primary')} background={getColor('Mac And Cheese')}/>
          <Sample color={getColor('Negative Secondary')} background={getColor('Mac And Cheese')}/>
          <Sample color={getColor('Positive Primary')} background={getColor('Mac And Cheese Light')}/>
          <Sample color={getColor('Positive Secondary')} background={getColor('Mac And Cheese Light')}/>
          <Sample color={getColor('Negative Primary')} background={getColor('Mac And Cheese Light')}/>
          <Sample color={getColor('Negative Secondary')} background={getColor('Mac And Cheese Light')}/>
          <Sample color={getColor('Positive Primary')} background={getColor('Mac And Cheese Dark')}/>
          <Sample color={getColor('Positive Secondary')} background={getColor('Mac And Cheese Dark')}/>
          <Sample color={getColor('Negative Primary')} background={getColor('Mac And Cheese Dark')}/>
          <Sample color={getColor('Negative Secondary')} background={getColor('Mac And Cheese Dark')}/>
          <Sample color={getColor('Positive Primary')} background={getColor('Shamrock')}/>
          <Sample color={getColor('Positive Secondary')} background={getColor('Shamrock')}/>
          <Sample color={getColor('Negative Primary')} background={getColor('Shamrock')}/>
          <Sample color={getColor('Negative Secondary')} background={getColor('Shamrock')}/>
          <Sample color={getColor('Positive Primary')} background={getColor('Shamrock Light')}/>
          <Sample color={getColor('Positive Secondary')} background={getColor('Shamrock Light')}/>
          <Sample color={getColor('Negative Primary')} background={getColor('Shamrock Light')}/>
          <Sample color={getColor('Negative Secondary')} background={getColor('Shamrock Light')}/>
          <Sample color={getColor('Positive Primary')} background={getColor('Shamrock Dark')}/>
          <Sample color={getColor('Positive Secondary')} background={getColor('Shamrock Dark')}/>
          <Sample color={getColor('Negative Primary')} background={getColor('Shamrock Dark')}/>
          <Sample color={getColor('Negative Secondary')} background={getColor('Shamrock Dark')}/>
          <Sample color={getColor('Positive Primary')} background={getColor('Selago')}/>
          <Sample color={getColor('Positive Secondary')} background={getColor('Selago')}/>
          <Sample color={getColor('Negative Primary')} background={getColor('Selago')}/>
          <Sample color={getColor('Negative Secondary')} background={getColor('Selago')}/>
           <Sample color={getColor('Positive Primary')} background={getColor('White')}/>
          <Sample color={getColor('Positive Secondary')} background={getColor('White')}/>
          <Sample color={getColor('Negative Primary')} background={getColor('White')}/>
          <Sample color={getColor('Negative Secondary')} background={getColor('White')}/>

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
