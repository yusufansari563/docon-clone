import { AntDesign, Ionicons, Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Cart from '../screens/Cart';
import Appointment from '../screens/Appointments/Appointment';
import Product from '../screens/Products/Product';
import Record from '../screens/Records/Record';
import Home from '../screens/Home/Home';
import { Pressable } from 'react-native';
import { View } from 'react-native';
import { SCREEN_NAME } from '../Utils';

const Tab = createBottomTabNavigator();

export function TabNavigation({ navigation }: { navigation: any }) {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({}) => <AntDesign name='home' size={24} />,
          tabBarActiveTintColor: 'blue',
          title: 'Home',
        }}
        name={SCREEN_NAME.HOME}
        component={Home}
      />

      <Tab.Screen
        options={{
          tabBarIcon: ({}) => (
            <Feather name='file-plus' size={24} color='black' />
          ),
          title: 'Record',
        }}
        name={SCREEN_NAME.RECORD}
        component={Record}
      />

      <Tab.Screen
        options={{
          tabBarIcon: ({}) => (
            <Feather name='calendar' size={24} color='black' />
          ),
          title: 'Appointment',
        }}
        name={SCREEN_NAME.APPOINTMENT}
        component={Appointment}
      />
    </Tab.Navigator>
  );
}
