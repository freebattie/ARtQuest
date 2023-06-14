import React from 'react';
import { View, StyleSheet } from 'react-native';





export default function DashedLine() {
    return (
        <View style={styles.container}>
            <View style={styles.dashed} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 140,
    },
    dashed: {
        borderBottomWidth: 2,
        borderStyle: 'solid',
        borderColor: 'black',
        width: '80%'
    }
})