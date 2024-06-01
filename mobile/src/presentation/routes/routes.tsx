import { NavigationContainer } from '@react-navigation/native';
import { Host } from 'react-native-portalize';
import { StackNavigation } from './StackNavigation';

export const Routes = () => (
    <NavigationContainer>
      <Host>
        <StackNavigation />
      </Host>
    </NavigationContainer>
  );
