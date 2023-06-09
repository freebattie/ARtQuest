/****** TODO 

        Style the signup page
    
    []  Add KeyboardAvoidingView
    []  Add Scrollview
    []  Add show/hide password to password input
    []  Make the email and password inputs flash red if the
        requirements are not met     
    []  Fix so it's not possible to press submit if the input 
        fields are empty or does not meet the requirements  

******/

////////////////////////////////////////////////////////////////
//  Description: Security Patch
//  Version: 1.0
//  Author: Jack
//  co-Author: userhonest
///////////////////////////////////////////////////////////////

import React, { useState, useEffect, useContext } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Appcontext } from '../lib/AppContext';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    SafeAreaView,
    Button,
    TouchableOpacity,
    KeyboardAvoidingView,
    StatusBar,
    ScrollView,
} from 'react-native';
import designSystem from '../components/style/DesignSystem';

const { COLOR, STYLING } = designSystem();

// navigation prop is provided by StackNavigator inside App.js incase you need to route forward.
export default function SignUpScreen({ navigation }) {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [passwordTooShort, setPasswordTooShort] = useState(false);
    const [isValidEmail, setIsValidEmail] = useState(false);
    const [email, setEmail] = useState('');
    const [emailContainsAT, setEmailContainsAT] = useState(false);

    // check to add extra chars on the regex to see
    // if password is strong enough...
    // if password is strong enough...
    const [isStrongPassword, setIsStrongPassword] = useState(false);

    const { login, createUser } = useContext(Appcontext);

    const onPressSubmitHandler = () => {
        // TODO read response for status code
        createUser({ email, userName, password });
        navigation.navigate('LoginScreen');
    };

    const onPressToggleHandler = () => {
        setShowPassword((prevState) => !prevState);
    };

    const onChangeEmailHandler = (currentEmail) => {
        try {
            const pattern = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
            const match = pattern.test(currentEmail);
            console.log('math is ', match);
            setEmail(currentEmail);
            setIsValidEmail(match);
            setEmailContainsAT(currentEmail.includes('@'));
        } catch (error) {
            console.log(error);
        }
    };

    const onChangePasswordHandler = (currentPassword) => {
        console.log('test');
        const pattern = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

        const isStrong = pattern.test(currentPassword);
        setPassword(currentPassword);
        setIsStrongPassword(isStrong);
        setPasswordTooShort(currentPassword.length < 10); //<- check to user, to add less than a certain amount of characters.
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <KeyboardAvoidingView
            style={{ flex: 1, backgroundColor: COLOR.WHITE }}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={150}
        >
            <StatusBar hidden />
           
                <View style={STYLING.container}>
                    <View style={STYLING.signupPageTextInputContainer}>
                        
                        <View style={STYLING.signupPageTextInputContainer}>
                            <TextInput
                                placeholder="Email"
                                style={{
                                    ...STYLING.signupPageEmailInput,

                                    borderColor: isValidEmail
                                        ? 'green'
                                        : COLOR.DARK_GRAY,
                                }}
                                value={email}
                                onChangeText={onChangeEmailHandler}
                            />
                            {!emailContainsAT && (
                                <Text style={{ color: 'red' }}>
                                    Email should contain '@'.
                                </Text>
                            )}

                            <View style={STYLING.passwordInputContainer}>
                                <TextInput
                                    placeholder="Password"
                                    style={{
                                        ...STYLING.signupPagePasswordInput,
                                        borderColor: isStrongPassword
                                            ? 'green'
                                            : '#ccc',
                                    }}
                                    value={password}
                                    onChangeText={onChangePasswordHandler}
                                    secureTextEntry={!showPassword}
                                />
                                <TouchableOpacity
                                    style={STYLING.passwordIconContainer}
                                    onPress={togglePasswordVisibility}
                                >
                                    <Icon
                                        name={
                                            showPassword ? 'eye' : 'eye-slash'
                                        }
                                        size={20}
                                        color="#888"
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <TouchableOpacity
                            style={STYLING.primaryButton}
                            onPress={onPressSubmitHandler}
                        >
                            <Text style={STYLING.buttonText}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
});

//////end of file ////////////////////////////////////////////
