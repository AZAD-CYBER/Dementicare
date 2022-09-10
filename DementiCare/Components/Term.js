import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React from "react";
import { Link } from "@react-navigation/native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { CheckBox, Icon } from "@rneui/themed";
const Term = () => {
  const navigation = useNavigation();
  const [check2, setCheck2] = React.useState(false);
  const [check1, setCheck1] = React.useState(false);
  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <View style={styles.container}>
        <View style={styles.checkboxContainer}>
          <CheckBox
            style={styles.check}
            center
            checked={check1}
            onPress={() => setCheck1(!check1)}
            containerStyle={{ marginRight: -10 }}
          />
          <Text style={styles.label}>
            All the details provided by the time of creating account are
            correct.
          </Text>
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox
            style={styles.check}
            center
            checked={check2}
            onPress={() => setCheck2(!check2)}
            containerStyle={{ marginRight: -10 }}
          />
          <Text style={styles.label}>
            All the details provided by the time of creating account are
            correct.
          </Text>
        </View>
        <ScrollView style={styles.scroll}>
          <Text style={styles.term} numberOfLines={12}>
            Terms and Condition : Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Ullamcorper ultrices arcu non, cursus condimentum
            auctor sit. Auctor sed vitae gravida ultrices pulvinar congue
            feugiat tellus. Donec nisl elementum amet sit fermentum. Est eu tate
            turpis velit amet integer lobortis faucibus purus massa. Convallis
            fermentum, sit ac purus amet, sed erat nulla. Semper vulputate
            turpis ac, augue eget cras. Massa amet sed sed ornare viverra.
            Mauris dictum ornare ut eget leo. Nulla ullamcorper volutpat,
            aliquet nibh mauris. Accumsan neque, lacus, morbi sit eget aliquam
            in at. Tellus nisi quam lectus lorem morbi vulputate lobortis
            quisque. Ridiculus suscipit fringilla faucibus pulvinar tellus quam.
            Molestie donec nisl consectetur volutpat non. Sit ultrices velit
            nisi, risus accumsan mi integer. Quam mi dui et viverra sit montes.
            Morbi netus fames pretium nisl. Sed vitae viverra mauris neque.
            Justo, sed volutpat pellentesque condimentum nisi, tristique mauris.
            Ornare nibh sagittis, vitae, arcu elementum aenean sagittis. Aliquam
            sit vel non nunc egestas.
          </Text>
        </ScrollView>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Create account"
          onPress={() => {
            alert("Success");
            navigation.navigate("Home");
          }}
        />
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

export default Term;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
    fontSize: 20,
  },
  term: {
    fontSize: 20,

    lineHeight: 30,

    textAlign: "center",

    textShadowColor: "#32DAFF",

    textShadowRadius: 4,

    textShadowOffset: { width: 2, height: 2 },

    textTransform: "capitalize",

    textAlignVertical: "top",
    padding: 20,
  },
  scroll: {
    width: 350,
    height: 300,
    backgroundColor: "#32DAFF",
    marginBottom: 50,
  },
  buttonContainer: {
    margin: 20,
    marginLeft: 50,
    height: 50,
    width: 315,
  },
  bottom: {
    margin: 10,
    marginTop: -10,
    padding: 5,
    marginLeft: 80,
  },

  link: {
    marginTop: -20,
    marginLeft: 170,
    color: "#32DAFF",
    cursor: "pointer",
  },
  check: {},
});
