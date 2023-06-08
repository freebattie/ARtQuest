import React, { useContext, useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
} from 'react-native';
import { Appcontext } from '../lib/AppContext';
import GalleryImageView from '../components/item/GalleryImageView';

export default function Collections({ navigation }) {
    const { getAllUserRewards, getImageByName } = useContext(Appcontext);
    // Steps
    // 1. Retrieve all collections from database
    // 2. display all rewards as an array of imageviews
    const [rewardsArray, setRewardsArray] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedReward, setSelectedReward] = useState({});
    const [isSelected, setIsSelected] = useState(false);

    // Functions
    const getUserRewards = async () => {
        const data = await getAllUserRewards();
        setLoading(false);
        setRewardsArray(data);
    };

    const selectImage = (reward) => {
        console.log("Selected: ", reward);
        return () => {
            setSelectedReward(reward);
            setIsSelected(true);
        }
    };

    useEffect(() => {
        getUserRewards();
    }, []);



    if (isSelected) {
        const image = getImageByName(selectedReward.filename);
        console.log("I am ", selectedReward.picturetitle);
        console.log("My histoy is ", selectedReward.picturedescription)
        return (
            <ScrollView>
                <Image
                    source={image}
                />
                <Text>{selectedReward.picturetitle}</Text>
                <Text>{selectedReward.picturedescription}</Text>
            </ScrollView>
        );
    }

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
                    console.log("displaing reward: ", reward);
                    return (
                        <GalleryImageView
                            key={index}
                            reward={reward}
                            onNavigate={selectImage(reward)}
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
