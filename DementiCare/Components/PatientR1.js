import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  Button,
  ScrollView,
  SafeAreaView,
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
        <PickerD />
        <TextInput
          style={styles.input}
          placeholder="Age"
          onChangeText={onChangeText}
          value={text}
        />
        <TextInput
          style={styles.input}
          placeholder="City"
          onChangeText={onChangeText1}
          value={text1}
        />
        <TextInput
          style={styles.input}
          placeholder="Respective Doctor Name"
          onChangeText={onChangeText2}
          value={text2}
        />
        <TextInput
          style={styles.input}
          placeholder="Caretaker Relation"
          onChangeText={onChangeText3}
          value={text3}
        />

        <View style={styles.buttonContainer}>
          <Button
            title="Next"
            onPress={() => {
              navigation.navigate("TermCondtion");
            }}
          />
        </View>
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
    marginLeft: 170,
    color: "#32DAFF",
    cursor: "pointer",
  },
});
