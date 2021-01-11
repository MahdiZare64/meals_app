import React from "react";
import categories from "../pages/categories";
import mealCategories from "../pages/mealCategory";
import details from "../pages/details";
import { Platform } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

const navigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerTitleStyle: {
        fontFamily: "open-sans-bold",
        fontSize: 20,
        textAlign: "center",
      },
      headerTintColor: Platform.OS === "android" ? "white" : "#fe6786",
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? "#fe6786" : "white",
      },
    }}
  >
    <Stack.Screen name="Categories" component={categories} />
    <Stack.Screen
      name="MealCategories"
      component={mealCategories}
      options={{
        title: "Recipes",
      }}
    />
    <Stack.Screen
      name="Details"
      component={details}
      options={(navData) => {
        return {
          title: navData.route.params.title,
        };
      }}
    />
  </Stack.Navigator>
);

export default navigator;
