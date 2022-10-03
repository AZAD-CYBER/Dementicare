import React, { useState } from "react";

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { Link } from "@react-navigation/native";
import { useRoute, useNavigation } from "@react-navigation/native";
import Bottom from "../Components/Bottom";
import Map from "../Components/Map";
const Locator = () => {
  return (
    <>
      <ScrollView style={{ backgroundColor: "white" }}>
        <Text>Locator</Text>
        {/* <Map /> */}
      </ScrollView>
      <Bottom />
    </>
  );
};

export default Locator;

const styles = StyleSheet.create({});
