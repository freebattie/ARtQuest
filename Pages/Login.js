import React, { useContext, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  Button,
} from "react-native";

import { Appcontext } from "../lib/AppContext";
export default function Login({ navigation }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { login, } = useContext(Appcontext);
  const handelLogin = async () => {
    try {
      await login({ userName, password });
      navigation.navigate("Home", { pass: password, user: userName });
    } catch (error) {
      console.log("handelLogin", error);
    }
  };

  // Route to SignUp screen
  const handleCreateUser = () => {
    navigation.navigate("SignUp");
  }

  const handleOpenCamera = () => {
    navigation.navigate("Camera");
  }

  return (
    <View style={styles.container}>
      <Text>Insert any text in below input</Text>
      <TextInput
        value={userName}
        onChangeText={(userName) => setUserName(userName)}
        placeholder={"UserName"}
        style={styles.input}
      />
      <Text>Insert any text in below input</Text>
      <TextInput
        value={password}
        onChangeText={(password) => setPassword(password)}
        placeholder={"Password"}
        style={styles.input}
      />
      <Button title="login" onPress={() => handelLogin()} />
      <Button title="create" onPress={() => handleCreateUser()} />
      <Button title="camera" onPress={() => handleOpenCamera()} />
    </View>
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
