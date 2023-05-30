import { StatusBar } from "expo-status-bar";
import Navigation from './components/navigation';
import { StyleSheet } from "react-native";
import Login from "./Pages/Login";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";

const Stack = createNativeStackNavigator();
export default function App() {
  const options = {
    headerStyle: {
      backgroundColor: "darkgreen",
      color: "white",
    },
    headerTitleStyle: {
      color: "#fff",
    },
    headerTintColor: "#fff", // set the back button arrow color to white
  };
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={options} />
        <Stack.Screen name="Home" component={Home} options={options} />
        <Stack.Screen name="SignUp" component={SignUp} options={options} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
