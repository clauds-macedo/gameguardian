import React from 'react';
import { FlatList } from 'react-native';
import { Card } from '../../components/Card';
import GeneralScreenContainer from '../../components/GeneralScreenContainer';
import PageTitle from '../../components/PageTitle';
import { gameClicksUseCase } from '../../data/usecases/gameClicksUseCase';
import useLanguage from '../../hooks/useLanguage';
import useAppRoute from '../../routes/hooks/useAppRoute';
import { Circles } from '../Login/components/Circles';
import { useFetchGames } from './hooks/useFetchGames';
import { getSubtitle } from './utils';

const Deals = () => {
  const { languageStrings } = useLanguage();
  const { name, params } = useAppRoute().route;
  const { games } = useFetchGames({
    store: params?.platform.toLowerCase() || 'steam',
  });

  return (
    <GeneralScreenContainer>
      <Circles sideX="right" sideY="top" />

      <PageTitle
        title={getSubtitle(name, params?.platform ?? '')}
        subtitle={languageStrings.deals}
      />
      <FlatList
        data={games}
        renderItem={({ item }) => (
          <Card
            {...item}
            mt={8}
            mb={8}
            onCardPress={async () =>
              gameClicksUseCase.register({ doc: item.title })
            }
          />
        )}
        style={{
          width: '100%',
        }}
      />
    </GeneralScreenContainer>
  );
};

export default Deals;
