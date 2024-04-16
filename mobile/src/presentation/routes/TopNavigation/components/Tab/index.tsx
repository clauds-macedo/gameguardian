import { MaterialTopTabBarProps } from '@react-navigation/material-top-tabs';
import React from 'react';
import useLanguage from '../../../../hooks/useLanguage';
import TabContainer from '../../../BottomNavigation/components/TabContainer';
import TopBarLabel from '../Label';
import { Rectangle } from '../Rectangle';
import { TopBarButton } from './style';

const TopBarComponent: React.FC<MaterialTopTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  const { languageStrings } = useLanguage();
  return (
    <TabContainer variant="top">
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TopBarButton
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
          >
            <TopBarLabel isFocused={isFocused}>
              {languageStrings[route.name.toLowerCase()]}
            </TopBarLabel>
            {isFocused && <Rectangle />}
          </TopBarButton>
        );
      })}
    </TabContainer>
  );
};

export default TopBarComponent;
