import React from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";
import { Link } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
const a = "#ADD8E6";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  box: {
    height: 140,
    width: 140,
  },
  box1: {
    backgroundColor: a,
    padding: 28,
    borderRadius: 20,
    borderColor: "#32DAFF",
    borderWidth: 3,
    marginLeft: 30,
  },
  box2: {
    backgroundColor: a,
    padding: 28,
    borderRadius: 20,
    borderColor: "#32DAFF",
    borderWidth: 3,
    marginRight: 30,
  },
  black: {
    color: "black",
    marginTop: 56,
  },
  docter: {
    height: 80,
    width: 80,
    borderRadius: 50,
  },
  text: {
    fontSize: 10,
    padding: 1,
  },
});

export default function SelectedLogin(props) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* <Link to={{ screen: "DocterLogin" }}> */}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("DocterLogin");
        }}
        style={[styles.box, styles.box1]}
      >
        <Image
          style={styles.docter}
          source={require(".././assets/docter.jpeg")}
        />

        <Text style={styles.text}>Login as Docter</Text>
      </TouchableOpacity>
      {/* </Link> */}
      <Text style={styles.black}>OR</Text>
      <TouchableOpacity onPress={() => {}} style={[styles.box, styles.box2]}>
        <Image
          style={styles.docter}
          source={require(".././assets/patient.jpeg")}
        />
        <Text style={styles.text}>Login as Patient</Text>
      </TouchableOpacity>
    </View>
  );
}
