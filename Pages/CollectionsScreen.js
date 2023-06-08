import React, { useContext, useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    SafeAreaView,
    Button,
    ScrollView,
} from 'react-native';
import { Appcontext } from '../lib/AppContext';
import GalleryImageView from '../components/item/GalleryImageView';

export default function Collections({ navigation }) {
    const { getAllUserRewards } = useContext(Appcontext);
    // Steps
    // 1. Retrieve all collections from database
    // 2. display all rewards as an array of imageviews
    const [rewardsArray, setRewardsArray] = useState([]);
    const getUserRewards = async () => {
        const data = await getAllUserRewards();
        setLoading(false);
        setRewardsArray(data);
    };
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getUserRewards();
    }, []);

    const onNavigate = () => {
        navigation.navigate('RewardScreen');
    };

    console.log('rewardsArray: ', rewardsArray);

    if (loading) {
        console.log('I am loading');
        return (
            <View style={styles.container}>
                <Text
                    style={[
                        styles.container,
                        { color: 'magenta', backgroundColor: '#ff0000' },
                    ]}
                >
                    Loading...
                </Text>
            </View>
        );
    }
    console.log('i finished');
    return (
        <View>
            <ScrollView style={styles.scrollView}>
                {rewardsArray.map((reward, index) => {
                    return (
                        <GalleryImageView
                            key={index}
                            reward={reward}
                            onNavigate={onNavigate}
                        />
                    );
                })}
            </ScrollView>
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
    scrollView: {
        backgroundColor: 'magenta',
        marginHorizontal: 20,
    },
});
