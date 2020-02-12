import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Dashboard from './src/dashboard/index';

const routes = {
  home: {
    name: "Home",
    title: "Panel",
    component: Dashboard
  },
};

const StackNavigator = createStackNavigator();
const HomeStack = () => {
  {/* Para cada pantalla, hacer un componente stack con una sola StackNavigator.Screen */}
  return (
    <StackNavigator.Navigator>
      <StackNavigator.Screen 
        name={routes.home.name} 
        options={{title: routes.home.title}}
        component={routes.home.component}
      />
      {/* No agregar otra screen, crear otro componente con su Navigator y su Screen*/}
  </StackNavigator.Navigator>
  );
}

const TabsNavigator = createBottomTabNavigator();
const Tabs = () => {
  return (
    <TabsNavigator.Navigator>
      <TabsNavigator.Screen 
        name={routes.home.name}
        component={HomeStack}
      />
      {/* otras TabNavigation.screen, donde cada una apunta a una StackNavigation.Screen */}
    </TabsNavigator.Navigator>
  );
}

const DrawerNavigator = createDrawerNavigator();
const App: () => React$Node = () => (
  <NavigationContainer>
    <DrawerNavigator.Navigator>
      <DrawerNavigator.Screen name="Home" component={Tabs} />
    </DrawerNavigator.Navigator>
  </NavigationContainer>
);

export default App;
