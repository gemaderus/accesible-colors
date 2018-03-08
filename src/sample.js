import React, {Component} from 'react';
import tinycolor from 'tinycolor2';

import './sample.css';
import {legends} from './colors';

const getRGBPerceived = (foreground, background) => {
  const rgb1 = tinycolor(foreground).toRgb();
  const rgb2 = tinycolor(background).toRgb();
  const r3 = rgb2.r + (rgb1.r-rgb2.r)*rgb1.a;
  const g3 = rgb2.g + (rgb1.g-rgb2.g)*rgb1.a;
  const b3 = rgb2.b + (rgb1.b-rgb2.b)*rgb1.a;
  return `rgb(${r3}, ${g3}, ${b3})`;
}

const colorRatioBased = (ratio) => {
  let background;
  if(ratio <= 3) {
    background = legends.danger;
  } else if(ratio > 3 && ratio <= 4.5) {
    background =  legends.warning;
  } else if (ratio >=4.5 && ratio < 8){
    background = legends.success;
  } else {
    background = legends.awesome;
  }

  return {
    backgroundColor: background
  }
}

const hslToString = ({h, s, l, a}) => {
  return `${Math.round(h)}, ${Math.round(s*100)}%, ${Math.round(l*100)}%, ${a}`;
}

class Sample extends Component {
  render () {
    const style = {
      backgroundColor: this.props.background.code,
      color: this.props.color.code
    }

    const colorDetail = tinycolor(this.props.background.code);
    const hsla = colorDetail.toHsl();
    const hex8 = colorDetail.toHex8();
    const hex8Main = hex8.slice(0, 6);
    const hex8Trans = hex8.slice(6, 8);
    const perceived = getRGBPerceived(this.props.color.code, this.props.background.code);
    const ratio = tinycolor.readability(this.props.background.code, perceived).toFixed(1);

    return (
      <li onClick={e => {
        this.props.onClick && this.props.onClick(this.props.index);
      }} className='card'>
        <div className="card-header" style={style}>
          <span className="item-center">Aa</span>
          <span className="rating" style={colorRatioBased(ratio)}>{ratio}</span>
        </div>
        <div className="card-content">
          <p className='color-gray-light'>Text <strong>{this.props.color.name}</strong></p>
          <div className="card-bg">
            <h3 className='card-bg-name'>{this.props.background.name}</h3>
            <ul className="card-bg-detail">
              <li>
                <h4 className='color-gray-light'>HEX</h4>
                <span className='uppercase'>{hex8Main}</span>
                <span className='uppercase color-gray-light'>{hex8Trans}</span>
              </li>
              <li>
                <h4 className='color-gray-light'>HSLA</h4>
                <span>
                  <span>{hslToString(hsla)}</span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </li>
    );
  }
}

export default Sample;
