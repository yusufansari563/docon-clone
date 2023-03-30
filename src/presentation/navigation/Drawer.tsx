import { View, Text } from 'react-native';
import React from 'react';
import { HomeScreen } from './Tab';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AntDesign } from '@expo/vector-icons';

const DrawerContainer = createDrawerNavigator();
const Drawer = () => {
  return (
    <DrawerContainer.Navigator initialRouteName='Home'>
      <DrawerContainer.Screen
        name='Home'
        component={HomeScreen}
        options={{
          drawerIcon: ({}) => <AntDesign name='home' size={24} color='black' />,
        }}
      />
    </DrawerContainer.Navigator>
  );
};

export default Drawer;
