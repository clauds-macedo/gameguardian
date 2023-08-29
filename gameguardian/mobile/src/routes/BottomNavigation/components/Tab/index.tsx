import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import TabContainer from '../TabContainer';
import {iconsByRouteName} from './utils';

export const TabBarComponent: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  return (
    <TabContainer>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({name: route.name, merge: true} as never);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const Icon = iconsByRouteName[route.name];

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{flex: 1, alignItems: 'center'}}>
            <Icon stroke="#fff" width={32} height={32} />
          </TouchableOpacity>
        );
      })}
    </TabContainer>
  );
};
