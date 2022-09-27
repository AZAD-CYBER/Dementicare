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
import Graph from "../Components/Graph";
import Rimender from "../Components/Rimender";

const Dashboard = () => {
  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <Graph />
      <Rimender />
    </ScrollView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({});
