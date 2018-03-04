import React, {Component} from 'react';
import tinycolor from 'tinycolor2';

import './sample.css';
import colors from './colors';

const luminanace = (r, g, b) => {
    let a = [r, g, b].map(function (v) {
        v /= 255;
        return v <= 0.03928
            ? v / 12.92
            : Math.pow( (v + 0.055) / 1.055, 2.4 );
    });
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}

const contrast = (rgb1, rgb2) => {
  let contrast = (luminanace(rgb1[0], rgb1[1], rgb1[2]) + 0.05) / (luminanace(rgb2[0], rgb2[1], rgb2[2]) + 0.05);

  if (contrast < 1) contrast = 1/contrast;

  return parseFloat(contrast).toFixed(1);
}

const colorRatioBased = (ratio) => {
  let background;

  if(ratio <= 3) {
    background = colors.danger;
  } else if(ratio > 3 && ratio <= 4.5) {
    background =  colors.warning;
  } else if (ratio >=4.5 && ratio < 8){
    background =  colors.success;
  } else {
    background =  colors.awesome;
  }

  return {
    backgroundColor: background
  }
}


class Sample extends Component {
  render () {
    const style = {
      backgroundColor: this.props.background,
      color: this.props.color
    }

    const bg = tinycolor(this.props.background).toRgb();
    const c = tinycolor(this.props.color).toRgb();
    const ratio = contrast([c.r, c.g, c.b], [bg.r, bg.g, bg.b]);

    return (
      <li onClick={e => {
        this.props.onClick && this.props.onClick(this.props.index);
      }} className="item item1" style={style}>
        <span className="item-center">Aa</span>
        <span className="rating" style={colorRatioBased(ratio)}>{ratio}</span>
      </li>
    );
  }
}

export default Sample;
