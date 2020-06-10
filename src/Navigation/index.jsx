import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

const style = {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
};

const HomeScreen = () => (
  <View style={style}>
    <Text>Home Screen</Text>
  </View>
);

const DetailsScreen = () => (
  <View>
    <Text>details Screen</Text>
  </View>
);

const Stack = createStackNavigator();

export default () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{ title: 'Overview' }}
      />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);
