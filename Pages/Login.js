import React, { useContext, useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    Image,
    TouchableOpacity,
    KeyboardAvoidingView
} from 'react-native';
import designSystem from '../components/style/DesignSystem';
import { Appcontext } from '../lib/AppContext';
import CustomButton from '../components/style/CustomButton';
import DashedLine from '../components/style/DashedLine';
import QuestProgressItem from '../components/item/QuestProgressItem';
import Icon from 'react-native-vector-icons/FontAwesome';

const { COLOR, STYLING } = designSystem();

export default function Login({ navigation }) {
    const [email, setUserName] = useState('test@test.no');
    const [password, setPassword] = useState('test');
    const { login } = useContext(Appcontext);
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = async () => {
        try {
            await login({ email: email, password });
            navigation.navigate('Home');
        } catch (error) {
            console.log('handelLogin', error);
        }
    };

    // Route to SignUp screen
    const handleCreateUser = () => {
        navigation.navigate('SignUp');
    };

    const handleOpenCamera = () => {
        navigation.navigate('Camera');
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    // hook for safe view
    // TODO: refactor this into style in a context/provider?
    const insets = useSafeAreaInsets();
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
        },
        input: {
            width: '70%',
            height: 40,
            borderColor: 'rgba(50,50,50,1)',
            borderWidth: 1.5,
            borderRadius: 2,
            paddingHorizontal: 10,
            marginBottom: 15,
        },
        button: {
            color: COLOR.MUNCH_WHITE,
        },
        icon: {
            width: 32,
            height: 32,
        },
    });
    const quests = new Map();
    quests.set('scream', { name: 'scream', collected: [1, 2], size: 2 });

    return (
        <KeyboardAvoidingView
        style={{ flex: 1, backgroundColor: COLOR.WHITE }}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={-100}
        >

        <View style={styles.container}>
            <TextInput
                style={styles.input}
                value={email}
                onChangeText={(userName) => setUserName(userName)}
                placeholder={'UserName'}
            />

             {/* <TextInput
                value={password}
                onChangeText={(password) => setPassword(password)}
                placeholder={'Password'}
                style={styles.input}
            /> */}


            {/* Added Password show hide functionality in the
                password input field */}
            <View style={STYLING.passwordInputContainer}>
                <TextInput
                    placeholder="Password"
                    style={STYLING.loginPagePasswordInput}
                    secureTextEntry={!showPassword}
                />
                <TouchableOpacity
                    style={STYLING.passwordIconContainer}
                    onPress={togglePasswordVisibility}
                >
                    <Icon
                        name={showPassword ? 'eye' : 'eye-slash'}
                        size={20}
                        color="#888"
                    />
                </TouchableOpacity>
            </View>

           
            {/* Swapped CustomButton Login button
                with TouchableOpacity primaryButton */}
            <TouchableOpacity onPress={() => handleLogin()} style={STYLING.primaryButton}> 
                <Text style={STYLING.primaryButtonText} >Login</Text>
            </TouchableOpacity>

            <View style={{ flexDirection: 'row', margin: 20 }}>
                <Text>Can't login? Reset</Text>
                <TouchableOpacity>
                    <Text style={{ marginLeft: 2, color: COLOR.MUNCH_RED }}>
                        password
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <DashedLine />
                <Text>or</Text>
                <DashedLine />
            </View>
            <TouchableOpacity
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    width: 250,
                    height: 50,
                    borderColor: 'red',
                    borderStyle: 'solid',
                    borderWidth: 0,
                }}
            >
                <Image
                    style={styles.icon}
                    source={require('../assets/icons/facebook.png')}
                />
                <Image
                    style={styles.icon}
                    source={require('../assets/icons/google.png')}
                />
                <Image
                    style={styles.icon}
                    source={require('../assets/icons/instagram.png')}
                />
                <Image
                    style={styles.icon}
                    source={require('../assets/icons/apple.png')}
                />
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', margin: 20 }}>
                <Text>Don't have an account?</Text>
                <TouchableOpacity onPress={() => handleCreateUser()}>
                    <Text style={{ marginLeft: 10, color: COLOR.MUNCH_RED }}>
                        Sign up
                    </Text>
                </TouchableOpacity>
            </View>

            <Button title="camera" onPress={() => handleOpenCamera()} />
        </View>
        </KeyboardAvoidingView>
    );
}
