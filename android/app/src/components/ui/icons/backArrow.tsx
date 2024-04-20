import React from 'react';
import Svg, {Path} from 'react-native-svg';

const BackArrow = ({color}) => (
  <Svg width="25" height="25">
    <Path
      d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"
      fill={color}
    />
  </Svg>
);

export default BackArrow;
