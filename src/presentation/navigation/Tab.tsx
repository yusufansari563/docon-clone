import { AntDesign, Ionicons, Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Cart from '../screens/Cart';
import Appointment from '../screens/Appointments/Appointment';
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
          tabBarIcon: ({color}) => 
          <AntDesign name='home' size={24} color={color} />,
          tabBarActiveTintColor: 'blue',
          title: 'Home',
        }}
        name={SCREEN_NAME.HOME}
        component={Home}
      />

      <Tab.Screen
        options={{
          tabBarIcon: ({color}) => (
            <Feather name='file-plus' size={24} color={color} />
            
          ),
          title: 'Record',
          tabBarActiveTintColor: 'blue',
        }}
        name={SCREEN_NAME.RECORD}
        component={Record}
      />

      <Tab.Screen
        options={{
          tabBarIcon: ({color}) => (
            <Feather name='calendar' size={24} color={color} />
          ),
          title: 'Appointment',
          tabBarActiveTintColor: 'blue',
        }}
        name={SCREEN_NAME.APPOINTMENT}
        component={Appointment}
      />
    </Tab.Navigator>
  );
}
