import { AntDesign, Ionicons, Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Cart from '../screens/Cart';
import Appointment from '../screens/Appointments/Appointment';
import Product from '../screens/Products/Product';
import Record from '../screens/Records/Record';

const Tab = createBottomTabNavigator();
export function HomeScreen() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({ }) => <AntDesign name='home' size={24} color='black' />,
        }}
        name='Product'
        component={Product}
      />

      <Tab.Screen
        options={{
          tabBarIcon: ({ }) => <Feather name='file-plus' size={24} color='black' />,
        }}
        name='Records'
        component={Record}
      />

      <Tab.Screen
        options={{
          tabBarIcon: ({ }) => <Feather name='calendar' size={24} color='black' />,
        }}
        name='Appointments'
        component={Appointment}
      />
    </Tab.Navigator>
  );
}
