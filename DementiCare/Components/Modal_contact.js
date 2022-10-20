import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
  TextInput,
} from "react-native";
import { Link } from "@react-navigation/native";
import { useRoute, useNavigation } from "@react-navigation/native";
const Modal_contact = () => {
  const [text, onChangeText] = React.useState("");
  const [text1, onChangeText1] = React.useState("");
  const [text2, onChangeText2] = React.useState(null);
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.top1}>Add a contact</Text>
            <Text style={styles.top2}>
              Provide details to save the contact :
            </Text>
            <View style={styles.inputs}>
              <Text nativeID="formLabel" style={styles.label}>
                Name
              </Text>

              <TextInput
                accessibilityLabelledBy="formLabel"
                style={styles.input}
                placeholder="Enter the name"
                onChangeText={onChangeText}
                value={text}
              />
              <Text nativeID="formLabel1" style={styles.label}>
                Relation
              </Text>

              <TextInput
                accessibilityLabelledBy="formLabel1"
                style={styles.input}
                placeholder="Relation"
                onChangeText={onChangeText1}
                value={text1}
              />
              <Text nativeID="formLabel1" style={styles.label}>
                Contact
              </Text>

              <TextInput
                accessibilityLabelledBy="formLabel1"
                style={styles.input}
                placeholder="Contact No"
                onChangeText={onChangeText2}
                value={text2}
              />
              <Pressable
                style={styles.buttonContainer}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                <Text style={styles.button}>Save</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <Pressable onPress={() => setModalVisible(true)}>
        <Image source={require("../assets/modal.jpeg")} style={styles.Image} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  top1: {
    margin: 20,
    fontSize: 30,
  },
  top2: {
    margin: 20,
    fontSize: 15,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 25,
    paddingLeft: -10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  Image: {
    height: 80,
    width: 80,
    marginBottom: 60,
    marginLeft: 200,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  container: {
    width: 250,
    resizeMode: "center",
    height: 200,
    margin: 43,
    marginTop: 20,
  },
  text: {
    color: "#009A75",
    display: "flex",
    alignSelf: "center",
    fontSize: 36,
    fontWeight: "bold",
    margin: 18,
    padding: 10,
    marginTop: -50,
  },
  label: {
    color: "#009A75",
    marginLeft: 15,
    marginBottom: -30,
    paddingButton: 10,
  },
  inputs: {
    marginLeft: 25,
  },
  input: {
    borderColor: "white",
    borderBottomColor: "#009A75",
    height: 50,
    margin: 12,
    borderWidth: 3,
    width: 250,
    paddingTop: 15,
    paddingButton: 15,
    paddingLeft: 2,
  },
  icone: {
    position: "absolute",
    right: 52,
    top: 30,
  },
  iconp: {
    position: "absolute",
    right: 52,
    top: 95,
  },
  button: {
    fontSize: 16,
    lineHeight: 27,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
    height: 28,
    width: 40,
  },
  buttonContainer: {
    marginTop: 50,
    marginLeft: 35,
    height: 40,
    width: 200,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    elevation: 3,
    backgroundColor: "#009A75",
  },
});

export default Modal_contact;
