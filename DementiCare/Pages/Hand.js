import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

function Hand() {
  return (
    <View>
      <View style={styles.div}>
        <Text style={styles.text}>Hand</Text>
        <Image source={require("../assets/hand.jpeg")} style={styles.image} />
        <Text style={styles.text1}>Hand</Text>
      </View>
    </View>
  );
}

export default Hand;
var styles = StyleSheet.create({
  text: {
    color: "#009A75",
    fontSize: 25,
    width: 250,
    marginTop: 20,
    marginStart: 30,
    marginBottom: 5,
  },
  text1: {
    color: "#009A75",
    fontSize: 25,
    width: 250,
    marginTop: 20,
    position: "absolute",
    left: 140,
    marginBottom: 50,
  },
  image: {
    width: 30,
    height: 30,
    marginTop: 25,
    position: "absolute",
    left: 100,
  },
  div: {
    display: "flex",
    flexDirection: "row",
    borderBottomColor: "#009A75",
    borderBottomWidth: 2,
    width: 240,
    marginStart: 70,
  },
});
