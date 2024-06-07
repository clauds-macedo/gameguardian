import GeneralScreenContainer from '@/presentation/components/GeneralScreenContainer';
import React from 'react';
import { Text } from 'react-native';
import useGetMostAccessedGamesFromDay from './hooks/useGetMostAccessedGames';

const MostAccessed: React.FC = () => {
  const { mostAccessedGamesFromDay } = useGetMostAccessedGamesFromDay();
  return (
    <GeneralScreenContainer>
      <Text>asdasda</Text>
    </GeneralScreenContainer>
  );
};

export default MostAccessed;
