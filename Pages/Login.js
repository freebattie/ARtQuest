import React, { useContext, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    SafeAreaView,
    Button,
} from 'react-native';

import { Appcontext } from '../lib/AppContext';
export default function Login({ navigation }) {
    const [userName, setUserName] = useState('');
    const [password, sePassword] = useState('');
    const { login } = useContext(Appcontext);
    const handelLogin = async () => {
        try {
            await login({ userName, password });
            navigation.navigate('Home', { pass: password, user: userName });
        } catch (error) {
            console.log('handelLogin', error);
        }
    };
    return (
        <View style={styles.container}>
            <Text>Username</Text>
            <TextInput
                value={userName}
                onChangeText={(userName) => setUserName(userName)}
                placeholder={'UserName'}
                style={styles.input}
            />
            <Text>Password</Text>
            <TextInput
                value={password}
                onChangeText={(password) => sePassword(password)}
                placeholder={'Password'}
                style={styles.input}
            />
            <Button title="login" onPress={() => handelLogin()} />
            <Button title="create" />
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
});
