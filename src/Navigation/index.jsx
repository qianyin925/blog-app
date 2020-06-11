import * as React from 'react';
import setting from './setting';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

const Stack = createStackNavigator();

export default () => (
  <NavigationContainer>
    <Stack.Navigator>
      {setting.map((v, index) => (
        <Stack.Screen
          key={index}
          name={v.name}
          options={v.options}
          component={v.component}
        />
      ))}
    </Stack.Navigator>
  </NavigationContainer>
);
