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

const Locator = () => {
  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <Text>Locator</Text>
    </ScrollView>
  );
};

export default Locator;

const styles = StyleSheet.create({});
