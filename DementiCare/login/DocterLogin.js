import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  Button,
  ScrollView,
} from "react-native";
import React from "react";
import { Link } from "@react-navigation/native";
import { useRoute, useNavigation } from "@react-navigation/native";
import SelectedLogin from "../Components/SelectedLogin";
import SelectedLogin2 from "../Components/SelectedLogin2";

const PatientLogin = () => {
  const [text, onChangeText] = React.useState("");
  const [text1, onChangeText1] = React.useState("");
  const [number, onChangeNumber] = React.useState(null);

  return (
    <ScrollView>
      <Image style={styles.container} source={require("../assets/logo.jpeg")} />
      <Text style={styles.text}>Select your user type</Text>

      <SelectedLogin2 />
      <View style={styles.inputs}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          onChangeText={onChangeText}
          value={text}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={onChangeText1}
          value={text1}
        />
        <View style={styles.buttonContainer}>
          <Button title="Login" />
        </View>
      </View>

      <View style={styles.bottom}>
        <Text> Do not have an Account?</Text>
        <Link style={styles.link} to={{ screen: "DocterRegister" }}>
          Register
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
    margin: 50,
  },
  text: {
    paddingLeft: 140,
    marginTop: -30,
    color: "orange",
    marginBottom: 8,
  },
  inputs: {
    marginLeft: 35,
  },
  input: {
    borderColor: "#32DAFF",
    height: 50,
    margin: 12,
    borderWidth: 3,
    width: 315,
    padding: 10,
  },
  buttonContainer: {
    margin: 20,
    marginLeft: 11,
    height: 50,
    width: 315,
  },
  bottom: {
    margin: 20,
    padding: 5,
    marginLeft: 80,
  },

  link: {
    marginTop: -20,
    marginLeft: 160,
    color: "#32DAFF",
    cursor: "pointer",
  },
});
