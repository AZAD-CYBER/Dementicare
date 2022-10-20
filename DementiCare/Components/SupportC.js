import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

function SupportC(props) {
  return (
    <View>
      <View style={styles.div}>
        <Text style={styles.text}>{props.data1}</Text>
        <Text style={styles.text1}>{props.data2}</Text>
      </View>
    </View>
  );
}

export default SupportC;
var styles = StyleSheet.create({
  text: {
    width: 100,
    marginLeft: 50,
    fontSize: 18,
    margin: 20,
  },
  text1: {
    marginLeft: 40,
    width: 180,
    borderLeftWidth: 1,
    padding: 10,
  },
  image: {},
  div: {
    display: "flex",
    flexDirection: "row",
    borderBottomWidth: 1,
  },
});
