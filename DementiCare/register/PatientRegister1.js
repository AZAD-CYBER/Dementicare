import React, { useState } from "react";
import { StyleSheet, Text, Image, ScrollView } from "react-native";
import P from "../Components/PatientR1";

const PaientRegister1 = () => {
  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <Image style={styles.container} source={require("../assets/logo.png")} />
      <Text style={styles.text}>Register</Text>

      <P />
    </ScrollView>
  );
};

export default PaientRegister1;

const styles = StyleSheet.create({
  container: {
    width: 300,
    resizeMode: "center",
    height: 200,
    margin: 50,
    marginTop: 20,
  },
  text: {
    color: "#009A75",
    display: "flex",
    alignSelf: "center",
    fontSize: 36,
    fontWeight: "bold",
    margin: 20,
    padding: 10,
    marginTop: -50,
  },
});
