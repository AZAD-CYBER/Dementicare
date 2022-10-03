import {
  View,
  Text,
  Image,
  StyleSheet,
  Link,
  TouchableHighlight,
} from "react-native";
import React from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import Bottom from "../Components/Bottom";
const Caregiver = () => {
  const navigation = useNavigation();
  return (
    <>
      <View>
        <Text>Caregiver</Text>
      </View>
      <Bottom />
    </>
  );
};

export default Caregiver;

const styles = StyleSheet.create({});
