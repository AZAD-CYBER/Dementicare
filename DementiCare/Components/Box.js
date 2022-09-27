import React, { useState } from "react";

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Platform,
  TouchableOpacity,
  Linking,
} from "react-native";

const Box = () => {
  makeCall = (val) => {
    let phoneNumber = "";

    if (Platform.OS === "android") {
      phoneNumber = val;
    } else {
      phoneNumber = "telprompt:${102}";
    }

    Linking.openURL(phoneNumber);
  };

  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <View style={styles.box}>
        <TouchableOpacity
          style={styles.box1}
          onPress={() => makeCall("tel:${102}")}
        >
          <Image source={require("../assets/ambu.png")} />

          <Text style={{ marginTop: 12 }}>Ambulance</Text>
          <Text style={{ fontWeight: "bold" }}>102</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.box1}
          onPress={() => makeCall("tel:${100}")}
        >
          <Image
            source={require("../assets/police.png")}
            style={{ marginTop: -15 }}
          />
          <Text style={{ marginTop: 5 }}>Police</Text>
          <Text style={{ fontWeight: "bold" }}>100</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.box1}
          onPress={() => makeCall("tel:${1234567890}")}
        >
          <Image source={require("../assets/docter1.png")} />
          <Text style={{ marginTop: 5 }}>Docter</Text>
          <Text style={{ fontWeight: "bold" }}>********</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Box;

const styles = StyleSheet.create({
  box: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    marginTop: 30,
    marginStart: 30,
  },
  box1: {
    borderColor: "#009A75",
    borderWidth: 2,
    margin: 10,
    marginTop: 10,
    width: 150,
    height: 160,
    alignItems: "center",
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#dcf4ef",
  },
});
