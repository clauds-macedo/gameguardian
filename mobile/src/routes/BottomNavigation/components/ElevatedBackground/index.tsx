import { Ellipse, Svg } from 'react-native-svg';
export const ElevatedBackground: React.FC = () => {
  return (
    <Svg
      width="80"
      height="80"
      viewBox="0 0 100 100"
      fill="none"
      style={{ position: 'absolute' }}
    >
      <Ellipse cx="50" cy="50" rx="50" ry="50" fill="#24282F" />
    </Svg>
  );
};
