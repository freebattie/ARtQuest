import React, { useContext, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    SafeAreaView,
    Button,
} from 'react-native';
import designSystem from '../components/style/designSystem';

import { Appcontext } from '../lib/AppContext';
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
            <Button title="login" onPress={() => handelLogin()} />
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
        width: '100%',
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
});
