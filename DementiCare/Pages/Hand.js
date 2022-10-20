import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { Video } from "expo-av";
import video from "../assets/Dementia.mp4";
function Hand() {
  return (
    <ScrollView>
      <View style={styles.div}>
        <Text style={styles.text}>Hand</Text>
        <Image source={require("../assets/hand.jpeg")} style={styles.image} />
        <Text style={styles.text1}>Hand</Text>
      </View>
      <View>
        <Video
          source={{
            uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
          }}
          rate={1.0}
          volume={1.0}
          isMuted={true}
          resizeMode="cover"
          shouldPlay
          style={{ width: 350, height: 300, margin: 20 }}
        />
        <Text style={styles.para}>
          <Text style={{ fontWeight: "bold" }}>Hand-under-Hand (HuH)</Text> is a
          technique to assist with everyday tasks that enables the person living
          with dementia to control their own movements with the guidance of the
          care partner. {"\n"}HuH failitates doing with as a care partner,
          rather than doing to as a caregiver. This techniqye supports a
          person’s activity by placing the care partners’ hand UNDER the hand of
          the person doing the movement.
        </Text>
      </View>
    </ScrollView>
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
  para: {
    fontSize: 17,
    lineHeight: 25,
    textAlign: "left",
    padding: 10,
    marginStart: 10,
  },
});
