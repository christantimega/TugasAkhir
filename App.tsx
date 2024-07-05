import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./screen/LoginScreen.tsx";
import ThirdScreen from "./screen/ThirdScreen.tsx";
import 'react-native-gesture-handler';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="LoginScreen" component={LoginScreen}/>
      <Stack.Screen name="ThirdScreen" component={ThirdScreen} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
}

export default function App () {
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  )
}

