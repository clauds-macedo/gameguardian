import React from 'react';
import {FlatList} from 'react-native';
import {Card} from '../../components/Card';
import GeneralScreenContainer from '../../components/GeneralScreenContainer';
import styles from '../../global/styles';

const Deals = () => {
  return (
    <GeneralScreenContainer>
      <FlatList
        data={[
          {
            discountedPrice: '2',
            oldPrice: '111',
            title: "Livin' on a prayer",
            uri: 'https://i.ytimg.com/vi/lDK9QqIzhwk/hqdefault.jpg?sqp=-oaymwEiCKgBEF5IWvKriqkDFQgBFQAAAAAYASUAAMhCPQCAokN4AQ==&rs=AOn4CLAOQEvaLCnOgthQo-OFTJ7p5Mw_TA',
            favourite: true,
          },
        ]}
        renderItem={({item}) => {
          return <Card {...item} />;
        }}
        contentContainerStyle={{
          paddingHorizontal: 16,
          alignItems: 'center',
          justifyContent: 'center',
          width: styles.screenFullWidth,
        }}
      />
    </GeneralScreenContainer>
  );
};

export default Deals;
