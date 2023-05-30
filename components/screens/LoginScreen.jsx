import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import { useEffect, useState } from "react";
import { useHandleLogin } from "../hooks/useHandleLogin";

// Destructure the Stack.Screen component props
// The pushed screen will be the active screen and when returning the screen will be popped
export default function LoginScreen({ navigation }) {
    const [inputName, setInputName] = useState("");
    const [inputPassword, setInputPassword] = useState("");
    useEffect(() => {
        // TODDO: Axios call needs to be fixed in order to work
        if (isLoggedIn) {
            navigation.replace("Home");
        }
    }, [isLoggedIn]);

    const { isLoggedIn, handleLogin } = useHandleLogin();
    console.log(isLoggedIn);
    const handlePress = () => {
        handleLogin(inputName, inputPassword);
    };

    return (
        <View style={styles.container}>
            <Text>Login screen</Text>
            <View>
                <TextInput
                    placeholder="Username"
                    onChangeText={(inputValue) => setInputName(inputValue)}
                />
                <TextInput
                    placeholder="Password"
                    onChangeText={(inputValue) => setInputPassword(inputValue)}
                />
                <Button title="Login" onPress={() => handlePress()} />
            </View>
            <Text>
                {inputName} {inputPassword}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: "center",
    },
});
