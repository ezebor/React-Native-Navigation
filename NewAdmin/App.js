import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from './src/components/HomeScreen';
import OrderListScreen from './src/components/OrderListScreen';
import { 
  Button,
  Text,
} from 'react-native';

const routes = {
  home: {
    name: "Home",
    component: HomeScreen
  },
  orders: {
    name: "Ventas",
    component: OrderListScreen
  },
};

const TabsNavigator = createBottomTabNavigator();
function Tabs(key){
  return (
    <TabsNavigator.Navigator>
      <TabsNavigator.Screen 
        name="Home"
        component={routes["home"]["component"]}
      />
      <TabsNavigator.Screen 
        name="Ventas"
        component={routes["orders"]["component"]}
      />
    </TabsNavigator.Navigator>
  );
}


const StackNavigator = createStackNavigator();
function Stack(key){
  return (
    <StackNavigator.Navigator>
      <StackNavigator.Screen name="Home" options={{title: "HALAAA"}}>
        {() => Tabs(key)}
      </StackNavigator.Screen>
      <StackNavigator.Screen name="Ventas">
        {() => Tabs(key)}
      </StackNavigator.Screen>
  </StackNavigator.Navigator>
  );
}

const DrawerNavigator = createDrawerNavigator();
function Drawer(){
  return (
    <DrawerNavigator.Navigator>
      <DrawerNavigator.Screen name="Home">
        {() => Stack("home")}
      </DrawerNavigator.Screen>
      <DrawerNavigator.Screen name="Ventas">
        {() => Stack("orders")}
      </DrawerNavigator.Screen>
    </DrawerNavigator.Navigator>
  );
}

const App: () => React$Node = () => (
  <NavigationContainer>
    {Drawer()}
  </NavigationContainer>
);

export default App;
