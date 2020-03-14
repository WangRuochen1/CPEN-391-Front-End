import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from "./Screens/LoginScreen";
import SignupScreen from "./Screens/SignupScreen";
import UserProfile from "./Screens/UserProfile";
import CatProfile from "./Screens/CatProfile";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "UserProfile">
        <Stack.Screen name = "UserProfile" component = {UserProfile} options = {{headerShown: false}} />
        <Stack.Screen name = "CatProfile" component = {CatProfile} options = {{headerShown: false}} />
        <Stack.Screen name = "Login" component={LoginScreen} options={{ headerShown: false }}/>
        <Stack.Screen name = "SignUp" component={SignupScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
