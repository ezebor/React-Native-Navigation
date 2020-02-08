import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/components/HomeScreen';
import OrderListScreen from './src/components/OrderListScreen';
import { 
  Button,
  Text,
} from 'react-native';

const Stack = createStackNavigator();

const App: () => React$Node = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen  
        name="Home" 
        component={HomeScreen}
      />
      <Stack.Screen  name="Ventas" component={OrderListScreen}/>
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
