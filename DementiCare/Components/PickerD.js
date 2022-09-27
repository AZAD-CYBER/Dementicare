import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";
export default class PickerD extends Component {
  state = {
    choosenIndex: 0,
  };

  render() {
    // alert(this.state.choosenIndex);
    return (
      <View style={styles.container}>
        <Picker
          style={styles.pickerStyle}
          selectedValue={this.state.language}
          onValueChange={(itemValue, itemPosition) => {
            this.setState({ language: itemValue, choosenIndex: itemPosition });
            this.props.getdata(itemPosition);
          }}
        >
          <Picker.Item label={this.props.data} value={this.props.data} />
          <Picker.Item label={this.props.data1} value={this.props.data1} />
          <Picker.Item label={this.props.data2} value={this.props.data2} />
        </Picker>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    borderColor: "white",
    borderBottomColor: "#009A75",
    height: 50,
    margin: 12,
    borderWidth: 3,
    width: 315,
    paddingTop: 15,
    paddingButton: 15,
    paddingLeft: 5,
  },
  textStyle: {},
  pickerStyle: {
    margin: -5,
    marginLeft: -10,
  },
});
