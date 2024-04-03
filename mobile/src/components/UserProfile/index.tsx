import React from 'react';
import { authConfig } from '../../config/auth-config';
import Label from '../PageTitle/components/Label';
import ImageProfile from './components/ImageProfile';
import OutsideCircle from './components/OutsideCircle';
import { Container } from './styles';

const UserProfile = () => {
  const user = authConfig.getCurrentUser();
  return (
    <Container>
      <OutsideCircle>
        <ImageProfile />
      </OutsideCircle>
      {user?.displayName && <Label>{user.displayName}</Label>}
    </Container>
  );
};

export default UserProfile;
