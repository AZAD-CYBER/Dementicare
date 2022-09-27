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

import Autocomplete from "react-native-dropdown-autocomplete-textinput";
import { useRoute, useNavigation } from "@react-navigation/native";
import PickerD from "./PickerD";
// Link Component
const PatientR = () => {
  const [text, onChangeText] = React.useState("");
  const [text1, onChangeText1] = React.useState("");
  const [text2, onChangeText2] = React.useState("");
  const [text3, onChangeText3] = React.useState("");
  const [text4, onChangeText4] = React.useState("");
  const [text5, onChangeText5] = React.useState("");
  const [e, setE] = React.useState(0);
  function change(val) {
    setE(val);
  }

  const navigation = useNavigation();
  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <Text style={styles.text}>Kindly provide the details</Text>
      <View style={styles.inputs}>
        <PickerD
          getdata={change}
          data="Patient/Docter"
          data1="Patient"
          data2="Docter"
        />

        <View style={{ marginBottom: 20, marginTop: 20 }}>
          <Text nativeID="formLabel" style={styles.label}>
            Email
          </Text>
          <Image style={styles.icone} source={require("../assets/email.png")} />
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={onChangeText1}
            value={text1}
          />
        </View>
        <View style={{ marginBottom: 20 }}>
          <Text nativeID="formLabel" style={styles.label}>
            Password
          </Text>
          <Image
            style={styles.icone}
            source={require("../assets/password.png")}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            onChangeText={onChangeText3}
            value={text3}
          />
        </View>

        <View style={{ marginBottom: 0 }}>
          <Text nativeID="formLabel" style={styles.label}>
            Confirm Password
          </Text>
          <Image
            style={styles.icone}
            source={require("../assets/password.png")}
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            onChangeText={onChangeText3}
            value={text3}
          />
        </View>
        <Pressable
          style={styles.buttonContainer}
          onPress={() => {
            e == 1
              ? navigation.navigate("PatientRegister1")
              : navigation.navigate("DocterRegister");
          }}
        >
          <Text style={styles.button}>Next</Text>
        </Pressable>
      </View>
      <View style={styles.bottom}>
        <Text> Already have an Account?</Text>
        <Link style={styles.link} to={{ screen: "PatientLogin" }}>
          Login
        </Link>
      </View>
    </ScrollView>
  );
};

export default PatientR;

const styles = StyleSheet.create({
  text: {
    marginLeft: 50,
  },
  patient: {
    marginLeft: 110,
    padding: 50,
    borderRadius: 90,
  },
  label: {
    color: "#009A75",
    marginLeft: 15,
    marginBottom: -30,
    paddingButton: 15,
  },
  icone: {
    position: "absolute",
    right: 52,
    top: 30,
  },
  inputs: {
    marginLeft: 35,
    paddingBottom: 50,
  },
  input: {
    borderColor: "white",
    borderBottomColor: "#009A75",
    height: 50,
    margin: 12,
    borderWidth: 3,
    width: 315,
    paddingTop: 13,
    paddingButton: 15,
    paddingLeft: 5,
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
    marginTop: 30,
    marginLeft: 35,
    height: 50,
    width: 275,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    elevation: 3,
    backgroundColor: "#009A75",
  },
  bottom: {
    marginTop: -30,
    padding: 5,
    marginLeft: 100,
  },

  link: {
    marginTop: -20,
    marginLeft: 165,
    color: "#32DAFF",
    cursor: "pointer",
  },
});
