import { createStackNavigator } from "@react-navigation/stack";
import { Details } from "../screens/Details/Details";
import BookAppointment from "../screens/BookAppointment";

const Stack = createStackNavigator();
export function TabAScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Book an Appointment' component={BookAppointment} />
    </Stack.Navigator>
  );
}