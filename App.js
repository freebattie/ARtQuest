import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import Login from "./Pages/Login";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";
import CameraScreen from "./Pages/Camera";
import DesignSystem from "./components/style/DesignSystem";
import { Image, View } from 'react-native';
import useFont from "./components/hooks/useFont";

const Stack = createNativeStackNavigator();
export default function App() {
  const isFontLoaded = useFont();
  const { COLOR, PRIMARY, STACK_NAV_HEADER } = DesignSystem();
  const pinkGreen = PRIMARY.COLOUR_ON_COLOUR.RED_BLACK;
  const options = STACK_NAV_HEADER

  ////////////////////////////////////////////////////////////////////////
  // Font loading
  if (isFontLoaded) {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={options}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} options={options} />
          <Stack.Screen name="SignUp" component={SignUp} options={options} />
          <Stack.Screen name="Camera" component={CameraScreen} options={options} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return null;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
