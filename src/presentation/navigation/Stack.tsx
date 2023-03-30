import { createStackNavigator } from "@react-navigation/stack";
import { Details } from "../screens/Details/Details";

const Stack = createStackNavigator();
export function TabAScreen() {
  return (
    <Stack.Navigator>
      {/*<Stack.Screen name='TabA Details' component={Details} />*/}
    </Stack.Navigator>
  );
}