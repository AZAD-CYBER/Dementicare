import { View, Text, Image } from "react-native";
import React from "react";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../Pages/Home";
import Locator from "../Pages/Locator";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DrawerRoutes from "./DrawerRoutes";
import Personal from "../Pages/navbar_personal-space";
import Dashboard from "../Pages/Dashboard";
import Emergency from "../Pages/Emergency";
import Games from "../Pages/Games";
const BottomBar = ({ ...props }) => {
  const Tab = createBottomTabNavigator();

  const screenOptions = {
    tabBarItemStyle: {
      backgroundColor: "#373737",
      outerHeight: 89,
    },
  };

  return (
    <Tab.Navigator {...{ screenOptions }} initialRouteName="Locator">
      <Tab.Screen
        name="Locator"
        component={DrawerRoutes}
        options={{
          tabBarStyle: {
            color: "#009A75",
          },
          tabBarIcon: ({ color }) => (
            <Image source={require("../assets/Tab1.png")} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Personal"
        component={Personal}
        options={{
          tabBarStyle: { color: "#009A75" },
          tabBarIcon: ({ color }) => (
            <Image source={require("../assets/navbar_personal-space.png")} />
          ),
          headerShown: true,
        }}
      />

      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarStyle: { color: "#009A75" },
          tabBarIcon: ({ color }) => (
            <Image
              source={require("../assets/navbar_caregiver_dashboard.png")}
            />
          ),
          headerShown: true,
        }}
      />

      <Tab.Screen
        name="Emergency"
        component={Emergency}
        options={{
          tabBarStyle: { color: "#009A75" },
          tabBarIcon: ({ color }) => (
            <Image source={require("../assets/navbar_emergency-call.png")} />
          ),
          headerShown: true,
        }}
      />

      <Tab.Screen
        name="Games"
        component={Games}
        options={{
          tabBarStyle: { color: "#009A75" },
          tabBarIcon: ({ color }) => (
            <Image source={require("../assets/navbar_games.png")} />
          ),
          headerShown: true,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomBar;
