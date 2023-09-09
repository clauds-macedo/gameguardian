import {Circle, Ellipse, Svg} from 'react-native-svg';
import {ICircleProps} from './types';
import {getCirclePosition} from './utils';

export const Circles: React.FC<ICircleProps> = props => {
  const positionProps = getCirclePosition({
    sideX: props.sideX,
    sideY: props.sideY,
  });

  return (
    <Svg
      width="221"
      height="221"
      viewBox="0 0 221 221"
      fill="none"
      style={[
        {position: 'absolute', ...positionProps, opacity: 0.3},
        props.style,
      ]}>
      <Circle cx="110.5" cy="110.5" r="109.5" stroke="#393F4B" />
      <Ellipse cx="110" cy="110.5" rx="101" ry="100.5" stroke="#393F4B" />
      <Ellipse cx="110" cy="110.5" rx="91" ry="90.5" stroke="#393F4B" />
      <Ellipse cx="110" cy="110.5" rx="81" ry="80.5" stroke="#393F4B" />
      <Ellipse cx="110" cy="110.5" rx="71" ry="70.5" stroke="#393F4B" />
    </Svg>
  );
};
