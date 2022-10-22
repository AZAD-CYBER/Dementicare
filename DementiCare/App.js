import { Text, View } from "react-native";
import { DrawerActions, NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import PatientLogin from "./login/PatientLogin";
import { createDrawerNavigator } from "@react-navigation/drawer";
import PatientRegister from "./register/PatientRegister";
import PatientRegister1 from "./register/PatientRegister1";
import DocterRegister from "./register/DocterRegister";
import TermCondtion from "./register/TermCondtion";
import DrawerRoutes from "./Components/DrawerRoutes";
import Locator from "./Pages/Locator";
import Home from "./Pages/Home";
import Personal from "./Pages/navbar_personal-space";
import Dashboard from "./Pages/Dashboard";
import Games from "./Pages/Games";
import Emergency from "./Pages/Emergency";
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="PatientLogin"
          component={PatientLogin}
          options={{
            headerStyle: { backgroundColor: "#009A75" },
            headerTintColor: "black",
            headerTitleStyle: { fontWeight: "bold" },
            headerShown: true,
            headerTitle: "Login",
            headerLeft: (props) => (
              <MaterialCommunityIcons name="login" size={34} color="black" />
            ),
          }}
        />

        <Stack.Screen
          name="PatientRegister"
          component={PatientRegister}
          options={{
            headerStyle: { backgroundColor: "#009A75" },
            headerTintColor: "black",
            headerTitleStyle: { fontWeight: "bold" },
            headerShown: true,
            headerTitle: "Register",
            // headerRight: (props) => (
            //   <MaterialCommunityIcons
            //     name="sign-text"
            //     size={34}
            //     color="black"
            //   />
            // ),
          }}
        />
        <Stack.Screen
          name="PatientRegister1"
          component={PatientRegister1}
          options={{
            headerStyle: { backgroundColor: "#009A75" },
            headerTintColor: "black",
            headerTitleStyle: { fontWeight: "bold" },
            headerShown: true,
            headerTitle: "Register",
            // headerLeft: (props) => (
            //   <MaterialCommunityIcons
            //     name="sign-text"
            //     size={34}
            //     color="black"
            //   />
            // ),
          }}
        />
        <Stack.Screen
          name="DocterRegister"
          component={DocterRegister}
          options={{
            headerStyle: { backgroundColor: "#009A75" },
            headerTintColor: "black",
            headerTitleStyle: { fontWeight: "bold" },
            headerShown: true,
            headerTitle: "Register",
            // headerLeft: (props) => (
            //   <MaterialCommunityIcons
            //     name="sign-text"
            //     size={34}
            //     color="black"
            //   />
            // ),
          }}
        />
        <Stack.Screen
          name="TermCondtion"
          component={TermCondtion}
          options={{
            headerStyle: { backgroundColor: "#009A75" },
            headerTintColor: "black",
            headerTitleStyle: { fontWeight: "bold" },
            headerShown: true,
            // headerLeft: (props) => (
            //   <MaterialCommunityIcons
            //     name="sign-text"
            //     size={34}
            //     color="black"
            //   />
            // ),
          }}
        />

        <Stack.Screen
          name="Home"
          component={DrawerRoutes}
          options={{
            headerStyle: { backgroundColor: "#009A75" },
            headerTintColor: "black",
            headerTitleStyle: { fontWeight: "bold" },
            headerShown: false,
            // headerLeft: (props) => (
            //   <MaterialCommunityIcons name="home" size={34} color="black" />
            // ),
          }}
        />
        <Stack.Screen
          name="Locator"
          component={Locator}
          options={{
            headerStyle: { backgroundColor: "#009A75" },
            headerTintColor: "black",
            headerTitleStyle: { fontWeight: "bold" },
            headerShown: true,
            // headerLeft: (props) => (
            //   <MaterialCommunityIcons name="home" size={34} color="black" />
            // ),
          }}
        />
        <Stack.Screen
          name="Personal"
          component={Personal}
          options={{
            headerStyle: { backgroundColor: "#009A75" },
            headerTintColor: "black",
            headerTitleStyle: { fontWeight: "bold" },
            headerShown: true,
            // headerLeft: (props) => (
            //   <MaterialCommunityIcons name="home" size={34} color="black" />
            // ),
          }}
        />

        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            headerStyle: { backgroundColor: "#009A75" },
            headerTintColor: "black",
            headerTitleStyle: { fontWeight: "bold" },
            headerShown: true,
            // headerLeft: (props) => (
            //   <MaterialCommunityIcons name="home" size={34} color="black" />
            // ),
          }}
        />
        <Stack.Screen
          name="Emergency"
          component={Emergency}
          options={{
            headerStyle: { backgroundColor: "#009A75" },
            headerTintColor: "black",
            headerTitleStyle: { fontWeight: "bold" },
            headerShown: true,
            // headerLeft: (props) => (
            //   <MaterialCommunityIcons name="home" size={34} color="black" />
            // ),
          }}
        />
        <Stack.Screen
          name="Games"
          component={Games}
          options={{
            headerStyle: { backgroundColor: "#009A75" },
            headerTintColor: "black",
            headerTitleStyle: { fontWeight: "bold" },
            headerShown: true,
            // headerLeft: (props) => (
            //   <MaterialCommunityIcons name="home" size={34} color="black" />
            // ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
