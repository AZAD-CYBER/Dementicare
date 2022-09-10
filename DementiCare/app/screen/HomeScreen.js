import { View, Text } from "react-native";
import React from "react";
import { Link } from "@react-navigation/native";
import { useRoute, useNavigation } from "@react-navigation/native";

// const HomeScreen = () => {
//   return (
//     <View>
//       <Text style={{ fontSize: 24 }}>HomeScreen</Text>
//     </View>
//   )
// }

// Link Component
const HomeScreen = () => {
  return (
    <View>
      <Text style={{ fontSize: 24 }}>HomeScreen</Text>
      <Link to={{ screen: "About" }} style={{ fontSize: 36 }}>
        Do not have an account?
      </Link>
    </View>
  );
};

// // route and navigation Props
// const HomeScreen = ({ route, navigation }) => {
//   console.log('Route...', route)
//   console.log('Navigation...', navigation)
//   return (
//     <View>
//       <Text style={{ fontSize: 24 }}>HomeScreen</Text>
//       <Link to={{ screen: 'About' }} style={{ fontSize: 36 }}>Go to About</Link>
//       <Link to={{ screen: 'Contact' }} style={{ fontSize: 36 }}>Go to Contact</Link>
//       <Link to={{ screen: 'Service' }} style={{ fontSize: 36 }}>Go to Service</Link>
//     </View>
//   )
// }

// // Hook
// const HomeScreen = () => {
//   const route = useRoute()
//   const navigation = useNavigation()
//   console.log('Route...', route)
//   console.log('Navigation...', navigation)
//   return (
//     <View>
//       <Text style={{ fontSize: 24 }}>HomeScreen</Text>
//       <Link to={{ screen: 'About' }} style={{ fontSize: 36 }}>Go to About</Link>
//       <Link to={{ screen: 'Contact' }} style={{ fontSize: 36 }}>Go to Contact</Link>
//       <Link to={{ screen: 'Service' }} style={{ fontSize: 36 }}>Go to Service</Link>
//     </View>
//   )
// }

export default HomeScreen;
