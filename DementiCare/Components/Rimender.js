import React, { useState } from "react";

import { StyleSheet, Text, View, ScrollView } from "react-native";

import { Link } from "@react-navigation/native";
import { useRoute, useNavigation } from "@react-navigation/native";
import Box from "../Components/Box";

const Emergency = () => {
  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <Text style={{ marginStart: 10 }}>Rimender</Text>
      <View style={styles.outside}>
        <Text style={styles.inside}> It’s time for medicine</Text>
      </View>
      <View style={styles.outside}>
        <Text style={styles.inside}>Lets go for a walk!</Text>
      </View>
      <View style={styles.outside}>
        <Text style={styles.inside}>Oh! looks like its time for bed.</Text>
      </View>
    </ScrollView>
  );
};

export default Emergency;

const styles = StyleSheet.create({
  outside: {
    borderWidth: 1,
    borderColor: "#009A75",
    margin: 10,
    height: 50,
    justifyContent: "center",
    backgroundColor: "#dcf4ef",
  },
  inside: {
    fontWeight: "bold",
    marginStart: 10,
  },
});
