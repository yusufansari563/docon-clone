import { View, Text } from 'react-native';
import React from 'react';
import { HomeScreen } from './Tab';
import { NotificationsScreen } from '../screens/Notifications/NotificationsScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Product from '../screens/Products/Product';
import Cart from '../screens/Cart';
import HeaderCart from '../components/HeaderCart/HeaderCart';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const DrawerContainer = createDrawerNavigator();
const Drawer = () => {
  return (
    <DrawerContainer.Navigator initialRouteName='Home'>
      <DrawerContainer.Screen
        name='Home'
        component={HomeScreen}
        options={{
          drawerIcon: ({}) => <AntDesign name='home' size={24} color='black' />,
          headerRight: ({}) => <HeaderCart />,
        }}
      />
    </DrawerContainer.Navigator>
  );
};

export default Drawer;
