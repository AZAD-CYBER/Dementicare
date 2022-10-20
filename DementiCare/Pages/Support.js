import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

function Support() {
  return (
    <View>
      <View style={styles.div}>
        <Text style={styles.text}>What can i do to Support them ?</Text>
        <Image
          source={require("../assets/support.jpeg")}
          style={styles.image}
        />
      </View>
    </View>
  );
}

export default Support;
var styles = StyleSheet.create({
  text: {
    color: "#009A75",
    fontSize: 25,
    width: 250,
    marginTop: 20,
    marginStart: 30,
    marginBottom: 5,
  },
  image: {
    width: 60,
    height: 60,
    marginTop: 20,
    marginRight: 40,
  },
  div: {
    display: "flex",
    flexDirection: "row",
    borderBottomColor: "#009A75",
    borderBottomWidth: 2,
    width: 360,
    marginStart: 10,
  },
});
