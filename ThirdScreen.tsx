import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/FontAwesome5';
import SecondScreen from "./SecondScreen";
import ProfileScreen from "./ProfileScreen";
import HomeScreen from "./HomeScreen"; 

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Menu"
        component={SecondScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="server" color="black" size={25}/>
          ),
        }}
      />
      <Tab.Screen 
        name="Activity"
        component={HomeScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="igloo" color="black" size={25}/>
          ),
        }}
      />
      <Tab.Screen 
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="user-shield" color="black" size={25}/>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default function ThirdScreen() {
  return (
    // <NavigationContainer> // Uncomment this if it's not wrapped elsewhere
      <MainTabNavigator/>
    // </NavigationContainer>
  );
}
