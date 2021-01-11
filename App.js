import React from "react";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

import Navigator from "./navigation/bottomTabNavigator";

export default function App() {
  const [font] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!font) {
    return <AppLoading />;
  } else {
    return <Navigator />;
  }
}

