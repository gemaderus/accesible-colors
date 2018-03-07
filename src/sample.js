import React, {Component} from 'react';
import tinycolor from 'tinycolor2';

import './sample.css';
import {legends} from './colors';

// const luminanace = (r, g, b) => {
//     let a = [r, g, b].map(function (v) {
//         v /= 255;
//         return v <= 0.03928
//             ? v / 12.92
//             : Math.pow( (v + 0.055) / 1.055, 2.4 );
//     });
//     return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
// }

const getRGBPerceived = (foreground, background) => {
  const rgb1 = tinycolor(foreground).toRgb();
  const rgb2 = tinycolor(background).toRgb();
  const r3 = rgb2.r + (rgb1.r-rgb2.r)*rgb1.a;
  const g3 = rgb2.g + (rgb1.g-rgb2.g)*rgb1.a;
  const b3 = rgb2.b + (rgb1.b-rgb2.b)*rgb1.a;
  return `rgb(${r3}, ${g3}, ${b3})`;
}

// getRGB('hsla(238, 32%, 19%, .64)', 'hsl(238, 32%, 19%)');

// const contrast = (rgb1, rgb2) => {
//   let contrast = (luminanace(rgb1[0], rgb1[1], rgb1[2]) + 0.05) / (luminanace(rgb2[0], rgb2[1], rgb2[2]) + 0.05);

//   if (contrast < 1) contrast = 1/contrast;

//   return parseFloat(contrast).toFixed(1);
// }

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

    // console.log(tinycolor.readability(this.props.background.code, this.props.color.code));
    // console.log(tinycolor(this.props.color.code).getLuminance());

    const colorDetail = tinycolor(this.props.background.code);
    const hsla = colorDetail.toHsl();
    // const bg = colorDetail.toRgb();
    // const c = tinycolor(this.props.color.code).toRgb();
    const hex8 = colorDetail.toHex8();
    const hex8Main = hex8.slice(0, 6);
    const hex8Trans = hex8.slice(6, 8);
    // const ratio = contrast([c.r, c.g, c.b], [bg.r, bg.g, bg.b]);

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
