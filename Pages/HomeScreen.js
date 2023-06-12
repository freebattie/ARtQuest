////////////////////////////////////////////////////////////////
//  Description: Home screen
//  Version: 1.0
//  Author: Bjarte
//  co-Author: Rolf, Rebekka, Jack, Michael, Gabriel
///////////////////////////////////////////////////////////////
import React, { useState } from 'react';
import {
   StyleSheet,
   Text,
   View,
   Image
} from 'react-native';
import CustomButton from '../components/style/CustomButton';
import designSystem from '../components/style/DesignSystem';

/**
 * shows the main menu
 * @param navigation used to navigate between pages
 *
 */
export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Main Menu</Text>
            <Button
                title="Play"
                onPress={() => navigation.navigate('CameraScreen')}
            />
            <CustomButton
                title="Quests"
                onPress={() => navigation.navigate('QuestsScreen')}
            />
            <CustomButton
                title="Show Collections"
                onPress={() => navigation.navigate('CollectionsScreen')}
            />
            <CustomButton
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
