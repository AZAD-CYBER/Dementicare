import { View, Text, Icon } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Stages from "../Pages/Stages";
import Support from "../Pages/Support";
import Hand from "../Pages/Hand";
import Chat from "../Pages/Chat";

const Tab = createMaterialTopTabNavigator();

const TopNav = () => {
  return (
    <Tab.Navigator
      independent={true}
      screenOptions={{
        tabBarActiveTintColor: "#009A75",
      }}
    >
      <Tab.Screen name="Stages" component={Stages} options={{}} />
      <Tab.Screen
        name="Support"
        component={Support}
        options={{
          title: "SUPPORT TO TRY",
        }}
      />
      <Tab.Screen name="Hand" component={Hand} />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          title: "DEMENTIA CHAT",
        }}
      />
    </Tab.Navigator>
  );
};

export default TopNav;
