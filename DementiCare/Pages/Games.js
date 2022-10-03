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

const Games = () => {
  return (
    <>
      <ScrollView style={{ backgroundColor: "white" }}>
        <Text>Personal</Text>
      </ScrollView>
      <Bottom />
    </>
  );
};

export default Games;

const styles = StyleSheet.create({});
