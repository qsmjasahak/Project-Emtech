import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './components/LoginScreen';
import SignupScreen from './components/SignupScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Project Name" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.homepage}>
        <Text>Project App</Text>
      </View>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('Login')}
      >
        <View style={styles.customButton}>
          <Text style={styles.buttonText}>Login</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('Signup')}>
        <View style={styles.customButton2}>
          <Text style={styles.buttonText}>Signup</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.textStyles} onPress={("")}>
        <Text style={{ fontWeight: 'bold', color: 'black' }}>
          Guest Sign In
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'flex-end',
  },
  homepage: {
    alignItems: 'center',
    marginVertical: 200,
  },
  buttonContainer: {
    margin: 4,
    width: 325,
    alignSelf: 'center',
  },
  customButton: {
    backgroundColor: '#78D6C6',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
  },
  customButton2: {
    backgroundColor: 'black',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'white',
  },
  textStyles: {
    alignItems: 'center',
    marginBottom: 20,
  },
});
