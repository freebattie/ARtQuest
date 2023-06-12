import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

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
