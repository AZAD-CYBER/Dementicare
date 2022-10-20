import React, { useState } from "react";

import { StyleSheet, Text, View, ScrollView } from "react-native";

import { Link } from "@react-navigation/native";
import { useRoute, useNavigation } from "@react-navigation/native";
import Box from "../Components/Box";
import Bottom from "../Components/Bottom";
import Modal_contact from "../Components/Modal_contact";

const Emergency = () => {
  return (
    <>
      <ScrollView style={{ backgroundColor: "white" }}>
        <Text style={styles.top}>Emergency help needed ?</Text>
        <Text style={{ alignSelf: "center", fontSize: 20, opacity: 0.5 }}>
          Select the below contacts to call
        </Text>

        <Box value="ambu.jpeg" />
        <Modal_contact />
      </ScrollView>
      <Modal_contact />
      <Bottom />
    </>
  );
};

export default Emergency;

const styles = StyleSheet.create({
  top: {
    display: "flex",
    alignSelf: "center",
    fontSize: 34,
    width: 250,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 20,
  },
});
