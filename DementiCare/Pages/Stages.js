import React from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";
import { Link } from "@react-navigation/native";
function Stages() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/bg.jpeg")}
        resizeMode="contain"
        style={styles.image}
      >
        <Text style={styles.text}> Stages of Dementia :</Text>

        <Text style={styles.text2}>
          Typically, these stages apply to all types of dementia.
        </Text>
        <Text style={styles.text3}>
          But it’s important to remember that someone with dementia may not
          always fit in a specific stage or go through every stage because the
          progression of dementia is unique and different for each person.
        </Text>
        <View style={styles.view4}>
          <Text style={styles.viewt}>1. Early - mild Dementia </Text>
          <Text style={styles.viewt}>2. Middle - moderate Dementia</Text>
          <Text style={styles.viewt}>3. Late - stage Dementia</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

export default Stages;
var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
  text: {
    color: "#009A75",
    fontSize: 25,
    margin: 20,
  },
  text2: {
    fontSize: 18,
    marginStart: 20,
    marginEnd: 10,
    marginBottom: 5,
    lineHeight: 27,
  },
  text3: {
    fontSize: 18,
    marginStart: 20,
    marginEnd: 10,
    marginBottom: 5,
    lineHeight: 27,
  },
  view4: {
    marginStart: 20,
    marginBottom: 5,
    display: "flex",
    margin: 10,
  },
  viewt: {
    color: "#1270FC",
    margin: 2,
  },
});
