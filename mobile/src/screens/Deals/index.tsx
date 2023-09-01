import React from 'react';
import {FlatList} from 'react-native';
import {Card} from '../../components/Card';
import GeneralScreenContainer from '../../components/GeneralScreenContainer';
import PageTitle from '../../components/PageTitle';
import useLanguage from '../../hooks/useLanguage';
import useAppRoute from '../../routes/hooks/useAppRoute';
import {getSubtitle} from './utils';
const Deals = () => {
  const {languageStrings} = useLanguage();
  const {name, params} = useAppRoute().route;
  return (
    <GeneralScreenContainer>
      <PageTitle
        title={getSubtitle(name, params?.platform ?? '')}
        subtitle={languageStrings.deals}
      />
      <FlatList
        data={[
          {
            discountedPrice: '2',
            oldPrice: '111',
            title: 'God of War: Ragnarok',
            uri: 'https://i.ytimg.com/vi/lDK9QqIzhwk/hqdefault.jpg?sqp=-oaymwEiCKgBEF5IWvKriqkDFQgBFQAAAAAYASUAAMhCPQCAokN4AQ==&rs=AOn4CLAOQEvaLCnOgthQo-OFTJ7p5Mw_TA',
            favourite: true,
          },
          {
            discountedPrice: '50',
            oldPrice: '100',
            title: 'Cyberpunk 2077',
            uri: 'https://example.com/cyberpunk-image.jpg',
            favourite: false,
          },
          {
            discountedPrice: '35',
            oldPrice: '60',
            title: 'Assassin’s Creed Valhalla',
            uri: 'https://example.com/assassins-creed-image.jpg',
            favourite: true,
          },
          {
            discountedPrice: '40',
            oldPrice: '90',
            title: 'Red Dead Redemption 2',
            uri: 'https://example.com/red-dead-image.jpg',
            favourite: false,
          },
          {
            discountedPrice: '15',
            oldPrice: '40',
            title: 'Final Fantasy VII Remake',
            uri: 'https://example.com/final-fantasy-image.jpg',
            favourite: true,
          },
          {
            discountedPrice: '15',
            oldPrice: '40',
            title: 'Final Fantasy VII Remake',
            uri: 'https://example.com/final-fantasy-image.jpg',
            favourite: true,
          },
        ]}
        renderItem={({item}) => {
          return <Card {...item} mt={8} mb={8} />;
        }}
        style={{
          width: '100%',
        }}
      />
    </GeneralScreenContainer>
  );
};

export default Deals;
