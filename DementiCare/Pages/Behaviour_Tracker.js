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
const Behaviour_Tracker = () => {
  const navigation = useNavigation();
  return (
    <>
      <View>
        <Text>Behaviour_Tracker</Text>
      </View>
      <Bottom />
    </>
  );
};

export default Behaviour_Tracker;

const styles = StyleSheet.create({});
