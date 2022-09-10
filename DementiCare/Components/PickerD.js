import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";
export default class PickerD extends Component {
  state = {
    choosenIndex: 0,
  };

  render() {
    return (
      <View style={styles.container}>
        <Picker
          style={styles.pickerStyle}
          selectedValue={this.state.language}
          onValueChange={(itemValue, itemPosition) =>
            this.setState({ language: itemValue, choosenIndex: itemPosition })
          }
        >
          <Picker.Item label="Male" value="java" />
          <Picker.Item label="Female" value="js" />
          <Picker.Item label="Other" value="rn" />
        </Picker>
        {/* <Text style={styles.textStyle}>
          {" "}
          {"Index =" + this.state.choosenIndex}
        </Text> */}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    borderColor: "#32DAFF",
    borderWidth: 3,
    height: 50,
    width: 315,
    margin: 12,
  },
  textStyle: {},
  pickerStyle: {
    margin: -5,
    marginLeft: 0.1,
  },
});
