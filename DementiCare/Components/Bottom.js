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
const Bottom = () => {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.tab}>
        <View>
          <TouchableHighlight
            onPress={() => {
              navigation.navigate("Locator");
            }}
          >
            <Image
              style={styles.child}
              source={require("../assets/Tab1.png")}
            />
          </TouchableHighlight>
          <Text style={styles.Text}>Locator</Text>
        </View>
        <View>
          <TouchableHighlight
            onPress={() => {
              navigation.navigate("Personal");
            }}
          >
            <Image
              style={styles.child}
              source={require("../assets/navbar_personal-space.png")}
            />
          </TouchableHighlight>
          <Text style={styles.Text}>Personal </Text>
        </View>
        <View>
          <TouchableHighlight
            onPress={() => {
              navigation.navigate("Dashboard");
            }}
          >
            <Image
              style={styles.child}
              source={require("../assets/navbar_caregiver_dashboard.png")}
            />
          </TouchableHighlight>
          <Text style={styles.Text}>Dashboard</Text>
        </View>

        <View>
          <TouchableHighlight
            onPress={() => {
              navigation.navigate("Emergency");
            }}
          >
            <Image
              style={styles.child}
              source={require("../assets/navbar_emergency-call.png")}
            />
          </TouchableHighlight>
          <Text style={styles.Text}>Emergency</Text>
        </View>
        <View>
          <TouchableHighlight
            onPress={() => {
              navigation.navigate("Games");
            }}
          >
            <Image
              style={styles.child}
              source={require("../assets/navbar_games.png")}
            />
          </TouchableHighlight>
          <Text style={styles.Text}>Games</Text>
        </View>
      </View>
    </>
  );
};

export default Bottom;

const styles = StyleSheet.create({
  tab: {
    position: "absolute",
    bottom: 0,
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#373737",
    height: 70,
    alignItems: "center",
  },
  child: {
    display: "flex",
    marginHorizontal: 22,
  },
  Text: {
    marginLeft: 12,
    color: "#009A75",
  },
});
