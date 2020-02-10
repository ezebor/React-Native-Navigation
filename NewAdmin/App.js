import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from './src/components/HomeScreen';
import OrderListScreen from './src/components/OrderListScreen';
import ProductListScreen from './src/components/ProductListScreen';
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
  products: {
    name: "Productos",
    component: OrderListScreen
  },
};

const TabsNavigator = createBottomTabNavigator();
const Tabs = () => {
  return (
    <TabsNavigator.Navigator>
      <TabsNavigator.Screen 
        name={routes.home.name}
        component={HomeStack}
      />
      <TabsNavigator.Screen 
        name="Ventas"
        component={routes["orders"]["component"]}
      />
      <TabsNavigator.Screen 
        name="Productos"
        component={ProductListScreen}
      />
    </TabsNavigator.Navigator>
  );
}


const StackNavigator = createStackNavigator();
const HomeStack = () => {
  return (
    <StackNavigator.Navigator>
      <StackNavigator.Screen 
        name={routes.home.name} 
        options={{title: "Panel"}}
        component={routes.home.component}
      />
  </StackNavigator.Navigator>
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
