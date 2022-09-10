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

const Home = () => {
  const [mode, setMode] = useState(true);
  const onSelectSwitch = () => {
    setMode(!mode);
  };
  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <Text>Home</Text>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({});
