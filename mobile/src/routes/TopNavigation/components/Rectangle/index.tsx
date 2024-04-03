import { Rect, Svg } from 'react-native-svg';
export const Rectangle: React.FC = () => {
  return (
    <Svg width="20" height="2" viewBox="0 0 20 2" fill="none">
      <Rect width="20" height="2" rx="1" fill="#4B87FF" />
    </Svg>
  );
};
