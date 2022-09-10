import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./app/screen/HomeScreen";
import AboutScreen from "./app/screen/AboutScreen";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import ContactScreen from "./app/screen/ContactScreen";
import ServiceScreen from "./app/screen/ServiceScreen";
import PatientLogin from "./login/PatientLogin";
import DocterLogin from "./login/DocterLogin";
import PatientRegister from "./register/PatientRegister";
import PatientRegister1 from "./register/PatientRegister1";
import DocterRegister from "./register/DocterRegister";
import TermCondtion from "./register/TermCondtion";
import Home from "./Pages/Home";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="PatientLogin"
          component={PatientLogin}
          options={{
            headerStyle: { backgroundColor: "#32DAFF" },
            headerTintColor: "black",
            headerTitleStyle: { fontWeight: "bold" },
            headerShown: true,
            headerLeft: (props) => (
              <MaterialCommunityIcons name="login" size={34} color="black" />
            ),
          }}
        />
        <Stack.Screen
          name="DocterLogin"
          component={DocterLogin}
          options={{
            headerStyle: { backgroundColor: "#32DAFF" },
            headerTintColor: "black",
            headerTitleStyle: { fontWeight: "bold" },
            headerShown: true,
            headerLeft: (props) => (
              <MaterialCommunityIcons name="login" size={34} color="black" />
            ),
          }}
        />
        <Stack.Screen
          name="PatientRegister"
          component={PatientRegister}
          options={{
            headerStyle: { backgroundColor: "#32DAFF" },
            headerTintColor: "black",
            headerTitleStyle: { fontWeight: "bold" },
            headerShown: true,
            headerLeft: (props) => (
              <MaterialCommunityIcons
                name="sign-text"
                size={34}
                color="black"
              />
            ),
          }}
        />
        <Stack.Screen
          name="PatientRegister1"
          component={PatientRegister1}
          options={{
            headerStyle: { backgroundColor: "#32DAFF" },
            headerTintColor: "black",
            headerTitleStyle: { fontWeight: "bold" },
            headerShown: true,
            headerLeft: (props) => (
              <MaterialCommunityIcons
                name="sign-text"
                size={34}
                color="black"
              />
            ),
          }}
        />
        <Stack.Screen
          name="DocterRegister"
          component={DocterRegister}
          options={{
            headerStyle: { backgroundColor: "#32DAFF" },
            headerTintColor: "black",
            headerTitleStyle: { fontWeight: "bold" },
            headerShown: true,
            headerLeft: (props) => (
              <MaterialCommunityIcons
                name="sign-text"
                size={34}
                color="black"
              />
            ),
          }}
        />
        <Stack.Screen
          name="TermCondtion"
          component={TermCondtion}
          options={{
            headerStyle: { backgroundColor: "#32DAFF" },
            headerTintColor: "black",
            headerTitleStyle: { fontWeight: "bold" },
            headerShown: true,
            headerLeft: (props) => (
              <MaterialCommunityIcons
                name="sign-text"
                size={34}
                color="black"
              />
            ),
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerStyle: { backgroundColor: "#32DAFF" },
            headerTintColor: "black",
            headerTitleStyle: { fontWeight: "bold" },
            headerShown: true,
            headerLeft: (props) => (
              <MaterialCommunityIcons name="home" size={34} color="black" />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
