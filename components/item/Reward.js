import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    SafeAreaView,
    Button,
} from 'react-native';

export default function Reward({ setShowReward }) {
    const [allRewards, doNotUse] = useState([
        {
            src: require('../assets/images/scream1.png'),
            type: 'common',
            quest: 1,
        },
        {
            src: require('../assets/images/scream2.png'),
            type: 'silver',
            quest: 1,
        },
        {
            src: require('../assets/images/scream3.png'),
            type: 'gold',
            quest: 1,
        },
    ]);

    return (
        <TouchableOpacity style={styles.container}>
            <Text>quest Munch is Done</Text>
            <Image
                source={scannedImage['src']}
                style={{ width: 150, height: 150 }}
            />
            <Button title="Back" onPress={() => setShowReward(true)} />
        </TouchableOpacity>
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
