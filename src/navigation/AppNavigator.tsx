import { NavigationContainer } from "@react-navigation/native";
import React, { useContext } from "react";
import { UserContext } from "../contexts/userContexts";
import { AuthScreen } from "../screens/AuthScreen";
import { MainTabNavigator } from "./MainTabNavigator";

export const AppNavigator = () => {
  const { user } = useContext(UserContext);
  return (
    <NavigationContainer>
      {!user ? <AuthScreen /> : <MainTabNavigator />}
    </NavigationContainer>
  );
};
