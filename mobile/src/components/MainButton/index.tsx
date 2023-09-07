import React from 'react';
import {Dimensions, Text, TouchableOpacity} from 'react-native';
import useAppRoute from '../../routes/hooks/useAppRoute';

const MainButton: React.FC = () => {
  const {navigate} = useAppRoute().navigation;
  return (
    <TouchableOpacity
      style={{
        width: Dimensions.get('screen').width * 0.9,
        height: 57,
        backgroundColor: '#FF5555',
      }}
      onPress={() => {
        navigate('Login');
      }}>
      <Text>MainButton:React.FC</Text>
    </TouchableOpacity>
  );
};

export default MainButton;
