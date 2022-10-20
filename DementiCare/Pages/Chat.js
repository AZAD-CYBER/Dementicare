import React from "react";
import { Button } from "react-native";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  ScrollView,
} from "react-native";

function Chat() {
  const [text, onChangeText] = React.useState("");
  return (
    <View>
      <View style={styles.div}>
        <Text style={styles.text}> Dementia-Chat</Text>
        <Image source={require("../assets/chat.jpeg")} style={styles.image} />
      </View>
      <View style={styles.chat}>
        <TextInput
          accessibilityLabelledBy="formLabel"
          style={styles.input}
          placeholder="Type a Message"
          onChangeText={onChangeText}
          value={text}
        />
        <Text style={styles.send}> send</Text>
      </View>
    </View>
  );
}

export default Chat;
var styles = StyleSheet.create({
  text: {
    color: "#009A75",
    fontSize: 35,
    width: 250,
    marginTop: 20,
    marginStart: 30,
    marginBottom: 5,
  },
  image: {
    width: 40,
    height: 40,
    position: "absolute",
    bottom: 10,
    left: 300,
  },
  div: {
    display: "flex",
    flexDirection: "row",
    borderBottomWidth: 2,
    borderBottomColor: "#009A75",
  },
  chat: {
    position: "absolute",
    top: 500,
    borderColor: "#009A75",
    borderWidth: 2,
    width: 270,
    borderRadius: 10,
    height: 50,
    padding: 10,
    margin: 20,
  },
  send: {
    position: "absolute",
    left: 300,
    bottom: -1,
    backgroundColor: "#009A75",
    width: 55,
    height: 55,
    borderRadius: 50,
    textAlign: "center",
  },
});
