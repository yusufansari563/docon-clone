import { Button, Text, View } from "react-native";
import { Navigation } from "../../../Domain/Models/NavigationModel";

export function TabADetailsScreen({ navigation }:{ navigation: Navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Welcome to TabA page!</Text>
        <Button
          onPress={() => navigation.navigate('TabA Details')}
          title='Go to TabA Details'
        />
      </View>
    );
  }