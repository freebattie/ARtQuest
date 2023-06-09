// TODO fix KeyboardAvoidingView

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
    KeyboardAvoidingView,
} from 'react-native';
import designSystem from '../components/style/DesignSystem';
import { Appcontext } from '../lib/AppContext';
import CustomButton from '../components/style/CustomButton';
import DashedLine from '../components/style/DashedLine';
import Icon from 'react-native-vector-icons/FontAwesome';

const { COLOR, STYLING } = designSystem();

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('test@test.no');
    const [password, setPassword] = useState('test');
    const { login } = useContext(Appcontext);
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = async () => {
        try {
            await login({ email: email, password });
            navigation.navigate('HomeScreen');
        } catch (error) {
            console.log('handelLogin', error);
        }
    };

    // Route to SignUp screen
    const handleCreateUser = () => {
        navigation.navigate('SignUpScreen');
    };

    const handleOpenCamera = () => {
        navigation.navigate('CameraScreen');
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    // hook for safe view
    // TODO: refactor this into style in a context/provider?
    const insets = useSafeAreaInsets();
    const STYLING = StyleSheet.create({
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
    return (
        <View
            style={[
                STYLING.loginPageInput,
                {
                    paddingTop: '30%',
                    alignSelf: 'center',
                    width: '80%',
                    flex: 1,
                },
            ]}
        >
            <TextInput
                style={designSystem().INPUT_FORM.input}
                value={email}
                onChangeText={(email) => setEmail(email)}
                placeholder={'email'}
            />
            {/* Added Password show hide functionality in the
                 password input field */}
            <View
                style={[
                    designSystem().INPUT_FORM.input,
                    {
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                    },
                ]}
            >
                <TextInput
                    placeholder="Password"
                    value={password}
                    style={[STYLING.passwordInput, { flex: 3 }]}
                    onChangeText={(password) => setPassword(password)}
                    secureTextEntry={!showPassword}
                />
                <TouchableOpacity
                    style={[
                        STYLING.passwordIconContainer,
                        {
                            alignSelf: 'center',
                            justifyContent: 'center',
                            marginHorizontal: '3%',
                            height: '100%',
                        },
                    ]}
                    onPress={togglePasswordVisibility}
                >
                    <Icon
                        name={showPassword ? 'eye' : 'eye-slash'}
                        size={20}
                        color="#888"
                    />
                </TouchableOpacity>
            </View>
            <CustomButton
                title={'Login'}
                onPress={handleLogin}
                style={[
                    designSystem().STYLING.primaryButton,
                    designSystem().STYLING.primaryButtonText,
                ]}
            />

 <View style={{ flexDirection: 'row' }}>
        <DashedLine />
                 <Text>or</Text>
                 <DashedLine />
              </View>

              <View>
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
                   style={STYLING.icon}
                   source={require('../assets/icons/facebook.png')}
                />
                <Image
                   style={STYLING.icon}
                   source={require('../assets/icons/google.png')}
                />
                <Image
                   style={STYLING.icon}
                   source={require('../assets/icons/instagram.png')}
                />
                <Image
                   style={STYLING.icon}
                   source={require('../assets/icons/apple.png')}
                />
             </TouchableOpacity>
             </View>

              <View style={{ flexDirection: 'row', margin: 20 }}>
               <Text>Don't have an account?</Text>
                <TouchableOpacity onPress={() => handleCreateUser()}>
                   <Text style={{ marginLeft: 10, color: COLOR.MUNCH_RED }}>
                      Sign up
                   </Text>
                </TouchableOpacity>
             </View>

        </View>
    );
}
