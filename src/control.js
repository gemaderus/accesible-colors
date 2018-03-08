import React, {Component} from 'react';

import './control.css';

class Control extends Component {
  state = {
    color: '',
    background: ''
  }

  onChange = (e) => {
    const name = e.target.name;
    console.log(name);
    const value = e.target.value;
    console.log(value);

    this.setState(state => {
      return {
        ...state,
        [name]: value
      }
    })
  }

  render() {

    return (
    <div className='addItems'>
      <label className="background">
        <span className='is-block'>Background:</span>
        <input onChange={this.onChange} name="background" placeholder="Enter color" className='input align-right'/>
      </label>
      <label className="foreground align-right">
        <span className='is-block'>Text color:</span>
        <input onChange={this.onChange} name="color" placeholder="Enter color" className='input align-left'/>
      </label>
      <div className="btn-add-holder">
        <button className="button button-main button-rounded" onClick={(e) => {
          this.props.onClick(this.state);
        }}>Add</button>
      </div>
    </div>
    );
  }
}

export default Control;