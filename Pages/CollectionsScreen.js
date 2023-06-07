import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    SafeAreaView,
    Button,
} from 'react-native';

export default function CollectionsScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Collections Menu</Text>
            <Button title="Back" onPress={() => navigation.pop()} />
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
