import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import RNRestart from 'react-native-restart';

export class ErrorBoundary extends React.Component<{ children: any }> {
  state: { error: boolean; errMsg: string } = {
    error: false,
    errMsg: '',
  };

  static getDerivedStateFromError(error: any) {
    return { error: true };
  }

  onPress = async () => {
    RNRestart.Restart();
  };

  componentDidCatch(error: any, errorInfo: any) {
    const mod = JSON.stringify(error);
    this.setState({ errMsg: mod });
  }

  render() {
    if (this.state.error) {
      return (
        <SafeAreaView>
            <TouchableOpacity
              onPress={() => {
                this.onPress();
              }}
            >
              <Text>Back To Home</Text>
            </TouchableOpacity>
        </SafeAreaView>
      );
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
