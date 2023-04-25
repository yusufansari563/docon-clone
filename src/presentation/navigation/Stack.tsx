import {createStackNavigator} from '@react-navigation/stack';
import {Details} from '../screens/Details/Details';
import Home from '../screens/Home/Home';
import Notifications from '../screens/Notifications/Notifications';
import Drawer from './Drawer';
import {SCREEN_NAME} from '../Utils';
import Settings from '../screens/Settings/Settings';

const Stack = createStackNavigator();

export function stack() {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen
                name={SCREEN_NAME.DRAWER}
                options={
                    {
                        // headerTitle: 'Hello, patient',
                    }
                }
                component={Drawer}
            />
            <Stack.Screen name={SCREEN_NAME.NOTIFICATION} component={Notifications}/>
            <Stack.Screen name={SCREEN_NAME.SETTING} component={Settings} options={{
                headerShown: true,
                headerTitle: "Settings"
            }}/>
        </Stack.Navigator>
    );
}
