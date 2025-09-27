import React from 'react';
import {UserProvider} from './context/UserContext';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import SignupScreen from './screens/SignupScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import EditProfileScreen from './screens/EditProfileScreen';

const Stack=createStackNavigator();
const Tab=createBottomTabNavigator();

function HomeTabs(){
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen}/>
      <Tab.Screen name="Profile" component={ProfileScreen}/>
      <Tab.Screen name="EditProfile" component={EditProfileScreen}/>
    </Tab.Navigator>
  );
}

export default function App(){
  return(
    <UserProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Signup">
          <Stack.Screen name="Signup" component={SignupScreen}/>
          <Stack.Screen name="Login" component={LoginScreen}/>
          <Stack.Screen name="HomeTabs" component={HomeTabs} options={{headerShown:false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
}