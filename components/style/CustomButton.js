import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import DesignSystem from './DesignSystem';




const { COLOR } = DesignSystem();
export default function CustomButton({ title, onPress, style }) {
    return (
        <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
            <Text style={styles.buttonText}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: COLOR.MUNCH_RED,
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: COLOR.MUNCH_BLACK,
        fontSize: 16,
        fontWeight: 'bold',
    },
})