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
} from 'react-native';
import designSystem from '../components/style/DesignSystem';
import { Appcontext } from '../lib/AppContext';
import CustomButton from '../components/style/CustomButton';
import DashedLine from '../components/style/DashedLine';




const { COLOR } = designSystem();

export default function Login({ navigation }) {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useContext(Appcontext);

    const handleLogin = async () => {
        try {
            await login({ userName, password });
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
            color: COLOR.MUNCH_BLACK,
        },
        icon: {
            width: 32,
            height: 32,
        }
    });
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                value={userName}
                onChangeText={(userName) => setUserName(userName)}
                placeholder={'UserName'}
            />
            <TextInput
                value={password}
                onChangeText={(password) => setPassword(password)}
                placeholder={'Password'}
                style={styles.input}
            />

            <CustomButton style={styles.button} title="login" onPress={() => handleLogin()} />
            <View style={{ flexDirection: 'row', margin: 20 }}>
                <Text>
                    Can't login? Reset
                </Text>
                <TouchableOpacity>
                    <Text style={{ marginLeft: 2, color: COLOR.MUNCH_RED }}>password</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <DashedLine />
                <Text>or</Text>
                <DashedLine />
            </View>
            <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', width: 250, height: 50, borderColor: 'red', borderStyle: 'solid', borderWidth: 0 }}>
                <Image style={styles.icon} source={require('../assets/icons/facebook.png')} />
                <Image style={styles.icon} source={require('../assets/icons/google.png')} />
                <Image style={styles.icon} source={require('../assets/icons/instagram.png')} />
                <Image style={styles.icon} source={require('../assets/icons/apple.png')} />
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', margin: 20 }}>
                <Text>
                    Don't have an account?
                </Text>
                <TouchableOpacity onPress={() => handleCreateUser()}>
                    <Text style={{ marginLeft: 10, color: COLOR.MUNCH_RED }}>Sign up</Text>
                </TouchableOpacity>
            </View>

            <Button title="camera" onPress={() => handleOpenCamera()} />
        </View>
    );
}

