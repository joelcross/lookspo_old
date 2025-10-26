import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStack from "./HomeStack";
import ActivityScreen from "../screens/ActivityScreen";
import NewPostScreen from "../screens/NewPostScreen";
import ProfileStack from "./ProfileStack";
import Icon from "react-native-vector-icons/Feather";
import type { RootTabParamList } from "./types";

const Tab = createBottomTabNavigator<RootTabParamList>();

export default function AppNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let name: string = "circle";
          if (route.name === "Home") name = "home";
          if (route.name === "Activity") name = "bell";
          if (route.name === "NewPost") name = "plus-square";
          if (route.name === "Profile") name = "user";
          return <Icon name={name} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Activity" component={ActivityScreen} />
      <Tab.Screen name="NewPost" component={NewPostScreen} />
      <Tab.Screen name="Profile" component={ProfileStack} />
    </Tab.Navigator>
  );
}
