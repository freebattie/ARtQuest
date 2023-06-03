import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    SafeAreaView,
    Button,
} from 'react-native';

export default function Home({ navigation }) {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    return (
        <View style={styles.container}>
            <Text>Main Menu</Text>
            <Button
                title="Play"
                onPress={() => navigation.navigate('Camera')}
            />
            <Button
                title="Quests"
                onPress={() => navigation.navigate('Quests')}
            />
            <Button
                title="Collections"
                onPress={() => navigation.navigate('Collections')}
            />
            <Button
                title="Logout"
                onPress={() => navigation.navigate('Login')}
            />
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
