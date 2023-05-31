import React, { useState, useEffect, useContext } from "react";
import { Appcontext } from "../lib/AppContext";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    SafeAreaView,
    Button,
} from "react-native";





// navigation prop is provided by StackNavigator inside App.js incase you need to route forward.
export default function SignUp({ navigation }) {
    const [isValidEmail, setIsValidEmail] = useState(false);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const { login,createUser } = useContext(Appcontext);

    const onPressSubmitHandler = () => {
        createUser({userName,password})
    }

    const onPressToggleHandler = () => {
        setShowPassword((prevState) => !prevState);
    }

    const onChangeEmailHandler = (currentTarget) => {
        const pattern = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
        const match = pattern.test(currentTarget);
        setUserName(currentTarget);
        setIsValidEmail(match);
    }

    return (
        <View style={styles.container}>
            <View>
                <TextInput
                    placeholder='Email'
                    style={{...styles.input, borderColor: isValidEmail ? 'green' : '#ccc'}}
                    value={userName}
                    onChangeText={onChangeEmailHandler}
                />
                <TextInput
                    placeholder='Password'
                    style={styles.input}
                    value={password}
                    onChangeText={(val) => setPassword(val)}
                    secureTextEntry={!showPassword}
                />
                <Button
                    title={showPassword ? 'Hide' : 'Show'}
                    onPress={() => onPressToggleHandler()}
                />
                <Button
                    title='Submit'
                    onPress={() => onPressSubmitHandler()}
                />
            </View>
        </View>
    )

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: "center",
    },
    input: {
        width: "100%",
        height: 40,
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
});