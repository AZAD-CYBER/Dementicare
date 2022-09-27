import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";

const CustomDrawer = (props) => {
  return (
    <DrawerContentScrollView
      {...props}
      DrawerContentStyle={{ background: "blue" }}
    >
      <View style={styles.bg}>
        <Image
          style={styles.image}
          source={require("../assets/patient.jpeg")}
        />
        <View style={styles.t}>
          <Text style={styles.tx}>Bea Mine</Text>
          <Text style={styles.tx}>email@example.com</Text>
        </View>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  bg: {
    height: 200,
    backgroundColor: "#009A75",
  },
  t: {
    margin: 20,
    marginTop: 20,
  },
  image: {
    margin: 20,
    height: 80,
    width: 80,
    borderRadius: 50,
  },
});
