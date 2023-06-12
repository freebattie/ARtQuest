import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import DesignSystem from './DesignSystem';





const { STYLING } = DesignSystem();
////////////////////////////////////////////////////////////////
// If no props are provided, the default styles is applied
export default function CustomButton({ title, onPress, style }) {
    if (!style) {
        style = [STYLING.primaryButton]
    }
    return (
        <TouchableOpacity activeOpacity={0.4} style={[style]} onPress={onPress}>
            <Text style={[STYLING.primaryButton, style]}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

