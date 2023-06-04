import React, { useContext, useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
} from 'react-native';
import designSystem from '../components/style/DesignSystem';
import { Appcontext } from '../lib/AppContext';
import CustomButton from '../components/style/CustomButton';





const { COLOR } = designSystem();

export default function Login({ navigation }) {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useContext(Appcontext);
    
    const handleLogin = async () => {
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
            marginBottom: 10,
        },
        button: {
            color: COLOR.MUNCH_BLACK,
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
            <Button title="create" onPress={() => handleCreateUser()} />
            <Button title="camera" onPress={() => handleOpenCamera()} />
        </View>
    );
}

