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
import Autocomplete from "react-native-dropdown-autocomplete-textinput";
import PickerD from "../Components/PickerD";
// Link Component
const PatientR1 = () => {
  const [text, onChangeText] = React.useState("");
  const [text1, onChangeText1] = React.useState("");
  const [text2, onChangeText2] = React.useState("");
  const [text3, onChangeText3] = React.useState("");
  const [text4, onChangeText4] = React.useState("");
  const [text5, onChangeText5] = React.useState("");
  const DATA = [
    { code: "AP", name: "Andhra Pradesh" },
    { code: "AR", name: "Arunachal Pradesh" },
  ];
  const navigation = useNavigation();
  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <Text style={styles.text}>Kindly provide the details</Text>
      <View style={styles.inputs}>
        <View style={{ marginTop: 20 }}>
          <Text nativeID="formLabel" style={styles.label}>
            Name
          </Text>
          <Image
            style={styles.icone}
            source={require("../assets/patient_icon.png")}
          />
          <TextInput
            style={styles.input}
            placeholder="Name"
            onChangeText={onChangeText1}
            value={text1}
          />
        </View>
        <PickerD data="Male" data1="Female" data2="Other" />
        <View style={{ marginBottom: 20, marginTop: 20 }}>
          <Text nativeID="formLabel" style={styles.label}>
            City
          </Text>
          <Image
            style={styles.icone}
            source={require("../assets/location.png")}
          />
          <TextInput
            style={styles.input}
            placeholder="Bhiwandi"
            onChangeText={onChangeText1}
            value={text1}
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <Text nativeID="formLabel" style={styles.label}>
            Certified Registered Number
          </Text>
          <Image
            style={styles.icone}
            source={require("../assets/registered.png")}
          />
          <TextInput
            style={styles.input}
            placeholder="12345678"
            onChangeText={onChangeText1}
            value={text1}
          />
        </View>

        <Pressable
          style={styles.buttonContainer}
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <Text style={styles.button}>Next</Text>
        </Pressable>
      </View>
      <View style={styles.bottom}>
        <Text>
          By clicking Signup you testify that your above filled information is
          true and you agree to our company’s
          <Text style={{ color: "#009A75" }}>
            Terms & Conditions / Privacy Policy.
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
};

export default PatientR1;

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
    marginTop: -50,
    padding: 10,
    marginLeft: 50,
    textAlign: "Yatra-One",
  },
});
