import { View, Text, Image } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../Pages/Home";
import Dementia_Talk from "../Pages/Dementia_Talk";
import About from "../Pages/About";
import Feedback from "../Pages/Feedback";
import CustomDrawer from "./CustomDrawer";
import Behaviour_Tracker from "../Pages/Behaviour_Tracker";
import Reminder from "../Pages/Reminder";
const Drawer = createDrawerNavigator();
const DrawerRoutes = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Locator"
      drawerContent={(props) => <CustomDrawer {...props} />}
      ScreenOptions={{ activeTintColor: "#009A75" }}
    >
      <Drawer.Screen
        name="Behaviour_Tracker"
        component={Behaviour_Tracker}
        options={{
          headerShown: true,
          headerTintColor: "#009A75",
          headerTitleStyle: { display: "none" },
          title: "Behaviour Tracker",
        }}
      />
      <Drawer.Screen
        name="Remender"
        component={Reminder}
        options={{
          headerShown: true,
          headerTintColor: "#009A75",
          headerTitleStyle: { display: "none" },
        }}
      />
      <Drawer.Screen
        name="Dementia_Talk"
        component={Dementia_Talk}
        options={{
          headerShown: true,
          headerTintColor: "#009A75",
          headerTitleStyle: {
            display: "none",
          },
          title: "Dementia Talk",
          drawerItemStyle: {
            borderBottomWidth: 2,
            borderBottomColor: "#009A75",
          },
        }}
      />

      <Drawer.Screen
        name="Feedback"
        component={Feedback}
        options={{
          headerShown: true,
          headerTintColor: "#009A75",
          headerTitleStyle: { display: "none" },
        }}
      />
      <Drawer.Screen
        name="About"
        component={About}
        options={{
          headerShown: true,
          headerTintColor: "#009A75",
          headerTitleStyle: { display: "none" },
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerRoutes;
