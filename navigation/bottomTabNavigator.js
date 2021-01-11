import React from "react";
import navigator from "./stackNavigator";
import { Ionicons, Entypo } from "@expo/vector-icons";
import { Platform } from "react-native";
import contactUs from "../pages/contactUs";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

const BttomTab = createBottomTabNavigator();
const MaterialTab = createMaterialBottomTabNavigator();

const iosNavigator = () => (
  <NavigationContainer>
    <BttomTab.Navigator
      screenOptions={{
        activeTintColor: "#55ccd4",
        inactiveTintColor: "#e1e1e1",
        activeBackgroundColor: "white",
        inactiveBackgroundColor: "white",
        labelStyle: {
          fontFamily: "open-sans-bold",
        },
      }}
    >
      <BttomTab.Screen
        name="categories"
        component={navigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-grid" size={24} color={color} />
          ),
        }}
      />
      <BttomTab.Screen
        name="contactUs"
        component={contactUs}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-grid" size={24} color={color} />
          ),
        }}
      />
    </BttomTab.Navigator>
  </NavigationContainer>
);

const androidNavigator = () => (
  <NavigationContainer>
    <MaterialTab.Navigator
      shifting={true}
      screenOptions={{
        activeColor: "#fff",
        inactiveColor: "#e1e1e1",
      }}
    >
      <MaterialTab.Screen
        name="categories"
        component={navigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-grid" size={24} color={color} />
          ),
          tabBarColor: "#fe6786",
        }}
      />
      <MaterialTab.Screen
        name="contactUs"
        component={contactUs}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="phone" size={24} color={color} />
          ),
          tabBarColor: "#55ccd4",
        }}
      />
    </MaterialTab.Navigator>
  </NavigationContainer>
);

export default Platform.OS === "android" ? androidNavigator : iosNavigator;
