import React, { useContext, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    SafeAreaView,
    Button,
} from 'react-native';
import designSystem from '../components/style/DesignSystem';

import { Appcontext } from '../lib/AppContext';
import CustomButton from '../components/style/CustomButton';
export default function Login({ navigation }) {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useContext(Appcontext);
    const handelLogin = async () => {
        try {
            await login({ userName, password });
            navigation.navigate('Camera');
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

    const { PRIMARY } = designSystem();
    const pinkGreenStyle = PRIMARY.COLOUR_ON_COLOUR.PINK_GREEN;
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
            <CustomButton title={'Login'} onPress={() => alert('clicked')} />
            <Button style={styles.button} title="login" onPress={() => handelLogin()} />
            <Button title="create" onPress={() => handleCreateUser()} />
            <Button title="camera" onPress={() => handleOpenCamera()} />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        width: '70%',
        height: 40,
        borderColor: 'rgba(50,50,50,1)',
        borderWidth: 1.5,
        borderRadius: 2,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    button: {
        color: 'rgba(255,255,255)',
    }
});
