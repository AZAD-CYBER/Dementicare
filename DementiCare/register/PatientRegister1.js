import React, { useState } from "react";

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { Link } from "@react-navigation/native";
import { useRoute, useNavigation } from "@react-navigation/native";
import CustomSwitch from "../Components/CustomSwitch";
import P from "../Components/PatientR1";
import D from "../Components/DoctorR";

const PaientRegister1 = () => {
  const [mode, setMode] = useState(true);
  const onSelectSwitch = () => {
    setMode(!mode);
  };
  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <Text style={styles.text}>Create New Account</Text>
      <View style={{ alignItems: "center", margin: 20 }}>
        <CustomSwitch
          selectionMode={1}
          roundCorner={true}
          option1={"Patient"}
          option2={"Doctor"}
          onClick={onSelectSwitch}
          selectionColor={"#32DAFF"}
        />
      </View>
      {mode == true ? <P /> : mode == false ? <D /> : null}
    </ScrollView>
  );
};

export default PaientRegister1;

const styles = StyleSheet.create({
  text: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 32,
    marginLeft: 50,
    margin: 20,
  },
});
