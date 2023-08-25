import React from "react";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import Login from "./Screens/Login_Signup/Login";
import SignUp from "./Screens/Login_Signup/SignUp";
import { SplashScreen } from "./Screens/SplashScreen";
import OTP from "./Screens/Login_Signup/OTP";
import Book from "./Screens/Main/Book";
import BookedCard from "./Screens/Main/BookedCard";

import HomeScreen from "./Screens/Main/HomeScreen";


export default function Nav() {
  const MainNavigator = createNativeStackNavigator();

  return (
    <NativeBaseProvider>
      <NavigationContainer>
          <MainNavigator.Navigator
            screenOptions={{
              headerShown: false,
              gestureEnabled: true,
              stackAnimation: "fade",
            }}
            initialRouteName="BookedCard"
          >
            <MainNavigator.Screen name="SplashScreen" component={SplashScreen} />
            <MainNavigator.Screen name="Login" component={Login} />
            <MainNavigator.Screen name="SignUp" component={SignUp} />
            <MainNavigator.Screen name="OTP" component={OTP} />
            <MainNavigator.Screen name="Book" component={Book} />
            <MainNavigator.Screen name="BookedCard" component={BookedCard} />


            <MainNavigator.Screen name="HomeScreen" component={HomeScreen} />

          
          </MainNavigator.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
