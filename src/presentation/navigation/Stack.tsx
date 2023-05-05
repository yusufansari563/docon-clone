import { createStackNavigator } from '@react-navigation/stack';
import Notifications from '../screens/Notifications/Notifications';
import Drawer from './Drawer';
import { SCREEN_NAME } from '../Utils';
import Settings from '../screens/Settings/Settings';
import FindDoctor from '../screens/FindDoctor/FindDoctor';

const Stack = createStackNavigator();
export function stack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={SCREEN_NAME.DRAWER}
        options={
          {
            // headerTitle: 'Hello, patient',
          }
        }
        component={Drawer}
      />
      <Stack.Screen name={SCREEN_NAME.NOTIFICATION} component={Notifications} />
      <Stack.Screen
        options={{
          headerShown:true,
          headerTitle: "Settings"
        }}
      name={SCREEN_NAME.SETTING} component={Settings} />
      <Stack.Screen name={SCREEN_NAME.SEARCH} component={FindDoctor} />
    </Stack.Navigator>
  );
}
