import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  Button,
  ScrollView,
  Pressable,
} from "react-native";
import React from "react";
import { Link } from "@react-navigation/native";
import { useRoute, useNavigation } from "@react-navigation/native";
const PatientLogin = () => {
  const [text, onChangeText] = React.useState("");
  const [text1, onChangeText1] = React.useState("");
  const navigation = useNavigation();
  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <Image style={styles.container} source={require("../assets/logo.png")} />
      <Text style={styles.text}>Login</Text>
      <View style={styles.inputs}>
        <Text nativeID="formLabel" style={styles.label}>
          Email
        </Text>
        <Image style={styles.icone} source={require("../assets/email.png")} />
        <TextInput
          accessibilityLabelledBy="formLabel"
          style={styles.input}
          placeholder="abc@email.com"
          onChangeText={onChangeText}
          value={text}
        />
        <Text nativeID="formLabel1" style={styles.label}>
          Password
        </Text>
        <Image
          style={styles.iconp}
          source={require("../assets/password.png")}
        />
        <TextInput
          accessibilityLabelledBy="formLabel1"
          style={styles.input}
          placeholder="******"
          onChangeText={onChangeText1}
          value={text1}
        />
        <Pressable
          style={styles.buttonContainer}
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <Text style={styles.button}>Login</Text>
        </Pressable>
      </View>
      <View style={styles.forget}>
        <Link style={styles.flink} to={{ screen: "PatientRegister" }}>
          Forgot Password ?
        </Link>
      </View>
      <View style={styles.bottom}>
        <Text style={{ marginLeft: -10 }}> Don’t have an account? </Text>
        <Link style={styles.link} to={{ screen: "PatientRegister" }}>
          Signup
        </Link>
      </View>
    </ScrollView>
  );
};

export default PatientLogin;

const styles = StyleSheet.create({
  container: {
    width: 300,
    resizeMode: "center",
    height: 200,
    margin: 43,
    marginTop: 20,
  },
  text: {
    color: "#009A75",
    display: "flex",
    alignSelf: "center",
    fontSize: 36,
    fontWeight: "bold",
    margin: 18,
    padding: 10,
    marginTop: -50,
  },
  label: {
    color: "#009A75",
    marginLeft: 15,
    marginBottom: -30,
    paddingButton: 10,
  },
  inputs: {
    marginLeft: 35,
  },
  input: {
    borderColor: "white",
    borderBottomColor: "#009A75",
    height: 50,
    margin: 12,
    borderWidth: 3,
    width: 300,
    paddingTop: 15,
    paddingButton: 15,
    paddingLeft: 5,
  },
  icone: {
    position: "absolute",
    right: 52,
    top: 30,
  },
  iconp: {
    position: "absolute",
    right: 52,
    top: 95,
  },
  button: {
    fontSize: 16,
    lineHeight: 27,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
    height: 28,
    width: 50,
  },
  buttonContainer: {
    marginTop: 50,
    marginLeft: 25,
    height: 50,
    width: 275,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    elevation: 3,
    backgroundColor: "#009A75",
  },

  bottom: {
    margin: 20,
    padding: 5,
    marginLeft: 100,
  },

  flink: {
    marginTop: 20,
    marginLeft: 140,
    color: "#009A75",
    cursor: "pointer",
  },

  link: {
    marginTop: -18,
    marginLeft: 140,
    color: "#009A75",
    cursor: "pointer",
  },
});
