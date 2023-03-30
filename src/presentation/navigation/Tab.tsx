import { AntDesign, Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Cart from '../screens/Cart';
import Product from '../screens/Products/Product';

const Tab = createBottomTabNavigator();
export function HomeScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          tabBarIcon: ({}) => <AntDesign name='home' size={24} color='black' />,
        }}
        name='Product'
        component={Product}
      />
    </Tab.Navigator>
  );
}
