import { Button, Text, View } from 'react-native';
import { Navigation } from '../../../Domain/Models/NavigationModel';

export function NotificationsScreen({ navigation }: { navigation: Navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>No New Notifications!</Text>
      <Button onPress={() => navigation.goBack()} title='Go back home' />
    </View>
  );
}
