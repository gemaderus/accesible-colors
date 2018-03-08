import React, {Component} from 'react';

import './legend.css';

class Legend extends Component {

  render() {

    return (
      <ul className='legend-list color-gray-light'>
        <li className='legend-item'>
          <i className='circle awesome'></i>
          <p>4.5+ Passes AA level for any size text and AAA for large text (above 18pt or bold above 14pt) 7.5+ Passes AAA level for any size text</p>
        </li>
        <li className='legend-item'>
          <i className='circle success'></i>
          <p>4.5+ Passes AA level for any size text and AAA for large text (above 18pt or bold above 14pt)</p>
        </li>
        <li className='legend-item'>
          <i className='circle warning'></i>
          <p>4.0+ Passes AA for large text (above 18pt or bold above 14pt)</p>
        </li>
        <li className='legend-item'>
          <i className='circle danger'></i>
          <p>Fails WCAG 2.0</p>
        </li>
      </ul>
    );
  }
}

export default Legend;