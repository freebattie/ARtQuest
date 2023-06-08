import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    SafeAreaView,
    Button,
} from 'react-native';

export default function HomeScreen({ navigation }) {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    return (
        <View style={styles.container}>
            <Text>Main Menu</Text>
            <Button
                title="Play"
                onPress={() => navigation.navigate('CameraScreen')}
            />
            <Button
                title="Quests"
                onPress={() => navigation.navigate('QuestsScreen')}
            />
            <Button
                title="Collections"
                onPress={() => navigation.navigate('CollectionsScreen')}
            />
            <Button
                title="Logout"
                onPress={() => navigation.navigate('LoginScreen')}
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
