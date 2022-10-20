import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import SupportC from "../Components/SupportC";

function Support() {
  return (
    <ScrollView>
      <View style={styles.div}>
        <Text style={styles.text}>What can i do to Support them ?</Text>
        <Image
          source={require("../assets/support.jpeg")}
          style={styles.image}
        />
      </View>
      <Image source={require("../assets/1.jpeg")} style={styles.image1} />
      <SupportC
        ok="../assets/support.jpeg"
        data1="Responding to Their Vision"
        data2="Get visual attention. Use familiar gestures, directional signs. Greet, stay in visual field. Limit complex cues, allow time to visually explore object & you."
      />
      <Image source={require("../assets/2.jpeg")} style={styles.image2} />
      <SupportC
        data1="Responding to Their 
        Language"
        data2="Connect with them. Acknowledge preferences and emotions. Empathize. Use facial expressions with gretting and use limited words . Use songs.."
      />
      <Image source={require("../assets/3.jpeg")} style={styles.image3} />
      <SupportC
        data1="Touching a person"
        data2="Shake hands, get permissions to touch. Use handshake greeting and Hand-under-Hander(HuH) to guide and direct. "
      />
      <Image source={require("../assets/4.jpeg")} style={styles.image4} />
      <SupportC
        data1="Getting a Person to 
        Move / Do 
        Something"
        data2="Ask for their support. Greet, pause, say their name, show what you want them to do then use few words only. Appreciate their skill. Offer option to watch. Watch for their discomfort.."
      />
      <Image source={require("../assets/5.jpeg")} style={styles.image5} />
      <SupportC
        data1="Guiding Place, and Time Awareness
        "
        data2="Use curiosity and support to find out place/ situation/ time they believe they are in. Make them feel comfortable. Transition them from in, to outwards focus, use tone, palm pressure."
      />
    </ScrollView>
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
    margin: 10,
  },
  image1: {
    position: "absolute",
    top: 150,
    height: 25,
    width: 25,
    marginLeft: 10,
    marginRight: 10,
  },
  image2: {
    position: "absolute",
    top: 300,
    height: 25,
    width: 25,
    marginLeft: 10,
    marginRight: 10,
  },
  image3: {
    position: "absolute",
    top: 440,
    height: 25,
    width: 25,
    marginLeft: 10,
    marginRight: 10,
  },
  image4: {
    position: "absolute",
    top: 600,
    height: 25,
    width: 25,
    marginLeft: 10,
    marginRight: 10,
  },
  image5: {
    position: "absolute",
    top: 760,
    height: 25,
    width: 25,
    marginLeft: 10,
    marginRight: 10,
  },
});
