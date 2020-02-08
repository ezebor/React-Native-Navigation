import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import HomeScreen from './src/components/HomeScreen';

const Stack = createStackNavigator();

const DetailsScreen = () => (
  <StyledScrollView>
    <Text>chau</Text>
  </StyledScrollView>
);

const App: () => React$Node = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen  name="Home" component={HomeScreen}/>
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
