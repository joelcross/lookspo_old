import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import SaveModal from "../screens/SaveModal";
import CollectionScreen from "../screens/CollectionScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeFeed"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SaveModal"
        component={SaveModal}
        options={{ presentation: "modal", title: "Save" }}
      />
      <Stack.Screen
        name="Collection"
        component={CollectionScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProfileView"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
