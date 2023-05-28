import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  Button,
} from "react-native";

export default function Home() {
  const [userName, setUserName] = useState("");
  const [password, sePassword] = useState("");
  return (
    <View style={styles.container}>
      <Text>You are Logged in</Text>
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
