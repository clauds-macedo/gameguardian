import React from 'react';
import {Share} from 'react-native-feather';
import {TouchableOpacity} from 'react-native-gesture-handler';
import GeneralScreenContainer from '../../components/GeneralScreenContainer';
import PageTitle from '../../components/PageTitle';
import PromotionPrice from '../../components/PromotionPrice';
import colors from '../../global/colors';
import useLanguage from '../../hooks/useLanguage';
import {TopTabNavigation} from './routes/routes';
import {
  BackgroundImage,
  Box,
  Text,
  TextContainer,
  TitleContainer,
} from './styles';

//para fins de mock
const uri =
  'https://img.olhardigital.com.br/wp-content/uploads/2021/05/Days-Gone.jpg';

const GameDetails: React.FC = () => {
  const {languageStrings} = useLanguage();

  return (
    <>
      <BackgroundImage source={{uri}} />
      <GeneralScreenContainer>
        <TitleContainer>
          <PageTitle title="Days Gone" subtitle={languageStrings.details} />
          <TouchableOpacity style={{}}>
            <Share stroke={colors.primaryText} />
          </TouchableOpacity>
        </TitleContainer>

        <TextContainer>
          <Text>
            Viaja e combate numa mortífera América pós-pandémica. Assume o papel
            de Deacon St. John, um vadio e caçador de...
          </Text>
          <PromotionPrice discountedPrice="30" oldPrice="50" />
        </TextContainer>
        <Box>
          <TopTabNavigation />
        </Box>
      </GeneralScreenContainer>
    </>
  );
};
export default GameDetails;
