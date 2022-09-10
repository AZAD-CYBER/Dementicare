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
import P from "../Components/PatientR";
import D from "../Components/DoctorR";

const DocterRegister = () => {
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
          option1={"Doctor"}
          option2={"Patient"}
          onClick={onSelectSwitch}
          selectionColor={"#32DAFF"}
        />
      </View>
      {mode == true ? <D /> : mode == false ? <P /> : null}
    </ScrollView>
  );
};

export default DocterRegister;

const styles = StyleSheet.create({
  text: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 32,
    marginLeft: 50,
    margin: 20,
  },
});
