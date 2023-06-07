import React, { useCallback } from 'react';
import {
    View,
    Text,
    Dimensions,
    SafeAreaView,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import DesignSystem from './style/DesignSystem';

export default function AppHeader() {
    const screenWidth = Dimensions.get('window').width;

    /* // Functionality for loading fonts
    const [fontsLoaded] = useFonts({
        'GirottMunch-Bold': require('../../assets/fonts/GirottMunch-Bold.ttf'),
        'GirottMunch-BoldBackslant': require('../../assets/fonts/GirottMunch-BoldBackslant.ttf'),
        'GirottMunch-BoldSlant': require('../../assets/fonts/GirottMunch-BoldSlant.ttf'),
        Montserrat: require('../../assets/fonts/Montserrat-VariableFont_wght.ttf'),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    } */

    return (
        <View >
            <TouchableOpacity style={DesignSystem.logoContainer}>
                <Text style={DesignSystem.appHeaderTitleFont}> MUNCH</Text>
            </TouchableOpacity>
            <Text style={DesignSystem.appHeaderSubtitle}>ARtQuest</Text>
        </View>
    );
}

