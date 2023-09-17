/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FlatList} from 'react-native';
import {Card} from '../../components/Card';
import GeneralScreenContainer from '../../components/GeneralScreenContainer';
import PageTitle from '../../components/PageTitle';
import useGameClicks from '../../hooks/useGameClicks';
import useLanguage from '../../hooks/useLanguage';
import useAppRoute from '../../routes/hooks/useAppRoute';
import {Circles} from '../Login/components/Circles';
import {getSubtitle} from './utils';
const Deals = () => {
  const {languageStrings} = useLanguage();
  const {name, params} = useAppRoute().route;
  const {registerClick} = useGameClicks();
  return (
    <GeneralScreenContainer>
      <Circles sideX="right" sideY="top" />

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
            uri: 'https://licensingcon.com.br/wp-content/uploads/2019/08/god.jpg',
            favourite: true,
          },
          {
            discountedPrice: '50',
            oldPrice: '100',
            title: 'Cyberpunk 2077',
            uri: 'https://www.cyberpunk.net/build/images/pre-order/buy-b/keyart-standard-pt-br-0b37d851.jpg',
            favourite: false,
          },
          {
            discountedPrice: '35',
            oldPrice: '60',
            title: 'Assassin’s Creed Valhalla',
            uri: 'https://play-lh.googleusercontent.com/zHub2wXIeQX7LeG0DkXoJVmR3YgK3VdPsaEKavBZBaliHR-7qLZx7zjcB6AjVeWxbCk=s256-rw',
            favourite: true,
          },
          {
            discountedPrice: '40',
            oldPrice: '90',
            title: 'Red Dead Redemption 2',
            uri: 'https://www.techpowerup.com/review/red-dead-redemption-2-benchmark-test-performance-analysis/images/small.png',
            favourite: false,
          },
          {
            discountedPrice: '15',
            oldPrice: '40',
            title: 'Final Fantasy VII Remake',
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo2aiRwgvmf_pFLOci1DiQ8hodFoK0n79NsV8vJmUivwzX43XKtyCBtjR1bPdTpPhK1ZA&usqp=CAU',
            favourite: true,
          },
          {
            discountedPrice: '15',
            oldPrice: '40',
            title: 'Bully Scholarship Edition',
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpg0m-fsVXAYV0i20eHk_R-34IHPmEw4eFa3lH9JkH1No0MWSqGd8rkldZE2gYEnhA1Ak&usqp=CAU',
            favourite: true,
          },
          {
            discountedPrice: '2',
            oldPrice: '111',
            title: 'God of War: Ragnarok',
            uri: 'https://licensingcon.com.br/wp-content/uploads/2019/08/god.jpg',
            favourite: true,
          },
          {
            discountedPrice: '50',
            oldPrice: '100',
            title: 'Cyberpunk 2077',
            uri: 'https://www.cyberpunk.net/build/images/pre-order/buy-b/keyart-standard-pt-br-0b37d851.jpg',
            favourite: false,
          },
          {
            discountedPrice: '35',
            oldPrice: '60',
            title: 'Assassin’s Creed Valhalla',
            uri: 'https://play-lh.googleusercontent.com/zHub2wXIeQX7LeG0DkXoJVmR3YgK3VdPsaEKavBZBaliHR-7qLZx7zjcB6AjVeWxbCk=s256-rw',
            favourite: true,
          },
        ]}
        renderItem={({item}) => {
          return (
            <Card
              {...item}
              mt={8}
              mb={8}
              onCardPress={() => registerClick(item.title)}
            />
          );
        }}
        style={{
          width: '100%',
        }}
      />
    </GeneralScreenContainer>
  );
};

export default Deals;
