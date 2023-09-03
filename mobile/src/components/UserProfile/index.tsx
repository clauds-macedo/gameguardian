import React from 'react';
import {View} from 'react-native';
import {authConfig} from '../../config/auth-config';
import Label from '../PageTitle/components/Label';
import ImageProfile from './components/ImageProfile';
import OutsideCircle from './components/OutsideCircle';

const UserProfile = () => {
  const user = authConfig.getCurrentUser();
  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <OutsideCircle>
        <ImageProfile />
      </OutsideCircle>
      {user?.displayName && <Label>{user.displayName}</Label>}
    </View>
  );
};

export default UserProfile;
