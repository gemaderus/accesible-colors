import React, {Component} from 'react';

class Control extends Component {
  state = {
    color: '',
    background: ''
  }

  onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState(state => {
      return {
        ...state,
        [name]: value
      }
    })
  }

  render() {

    return (<div>
      <label className="background">
        <span className='is-block'>Background:</span>
        <input onChange={this.onChange} name="background" placeholder="rbg" className='input'/>
      </label>
      <label className="foreground">
        <span className='is-block'>Text color:</span>
        <input onChange={this.onChange} name="color" placeholder="rbg" className='input'/>
      </label>
      <button onClick={(e) => {
        this.props.onClick(this.state);
      }}>Add</button>
    </div>);
  }
}

export default Control;