import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./screens/LoginScreen";
export default function App() {
  return (
    <NavigationContainer>
      <LoginScreen />
    </NavigationContainer>
  );
}
