import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import DesignSystem from './DesignSystem';





const { COLOR, STYLING } = DesignSystem();
////////////////////////////////////////////////////////////////
// If no props are provided, the default styles is applied
export default function CustomButton({ title, onPress, style }) {
    if (!style) {
        style = [STYLING.primaryButton, STYLING.primaryButtonText]
    }
    return (
        <TouchableOpacity activeOpacity={0.4} style={[STYLING.primaryButtonText, style]} onPress={onPress}>
            <Text style={[STYLING.primaryButton, style]}>
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
