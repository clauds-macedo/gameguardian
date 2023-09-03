import React from 'react';
import {Dimensions, Text, TouchableOpacity} from 'react-native';

const MainButton: React.FC = () => {
  return (
    <TouchableOpacity
      style={{
        width: Dimensions.get('screen').width * 0.9,
        height: 57,
        backgroundColor: '#FF5555',
      }}>
      <Text>MainButton:React.FC</Text>
    </TouchableOpacity>
  );
};

export default MainButton;
