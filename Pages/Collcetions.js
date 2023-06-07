import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    SafeAreaView,
    Button,
} from 'react-native';
import ImageView from '../components/item/ImageView';

export default function Collections({ navigation }) {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    return (
        <View style={styles.container}>
            <Text>Collections Menu</Text>

            <Button title="Back" onPress={() => navigation.goBack()} />
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
    rows: {},
});
