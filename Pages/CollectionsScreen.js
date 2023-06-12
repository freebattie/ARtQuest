////////////////////////////////////////////////////////////////
//  Description: Collection Screen
//  Version: 1.0
//  Author: Michael
//  co-Author: Bjarte
///////////////////////////////////////////////////////////////
import React, { useContext, useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    Button,
} from 'react-native';
import { Appcontext } from '../lib/AppContext';
import GalleryImageView from '../components/item/GalleryImageView';
import designSystem from '../components/style/DesignSystem';
import CustomButton from '../components/style/CustomButton';

/**
 *
 * shows the users collected pictures and allow user to navigate to next picture
 *
 */
export default function Collections({ navigation }) {
    const { getAllUserRewards, getImageByName } = useContext(Appcontext);
    const [rewardsArray, setRewardsArray] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedReward, setSelectedReward] = useState({});
    const [isSelected, setIsSelected] = useState(false);

    // Functions
    /**
     * get all Pictures user has collected
     */
    const getUserRewards = async () => {
        const data = await getAllUserRewards();
        setLoading(false);
        setRewardsArray(data);
    };

    /**
     *  send the collected pictures id to the server to get information on picture
     * @param reward - colleted picture id
     * @returns
     */
    const selectImage = (reward) => {
        console.log('Selected: ', reward);
        return () => {
            setSelectedReward(reward);
            setIsSelected(true);
        };
    };

    useEffect(() => {
        getUserRewards();
    }, []);

    if (isSelected) {
        const image = getImageByName(selectedReward.filename);
        console.log('I am ', selectedReward.picturetitle);
        console.log('My histoy is ', selectedReward.picturedescription);
        return (
            <>
                <ScrollView>
                    <Text
                        style={[
                            designSystem().TEXT_STYLES.title,
                            {
                                paddingTop: '10%',
                                paddingEnd: '10%',
                                textAlign: 'right',
                                flex: 1,
                            },
                        ]}
                    >
                        {selectedReward.picturetitle}
                    </Text>
                    <Image
                        style={[
                            {
                                width: '75%',
                                height: undefined,
                                aspectRatio: 1,
                            },
                        ]}
                        source={image}
                    />
                    <Text
                        style={[
                            designSystem().TEXT_STYLES.text,
                            {
                                marginTop: '15%',
                                marginHorizontal: '15%',
                            },
                        ]}
                    >
                        Lorem ipsum dolor sit amet, qui minim labore adipisicing
                        minim sint cillum sint consectetur cupidatat. Lorem
                        ipsum dolor sit amet, qui minim labore adipisicing minim
                        sint cillum sint consectetur cupidatat. Lorem ipsum
                        dolor sit amet, qui minim labore adipisicing minim sint
                        cillum sint consectetur cupidatat. Lorem ipsum dolor sit
                        amet, qui minim labore adipisicing minim sint cillum
                        sint consectetur cupidatat. Lorem ipsum dolor sit amet,
                        qui minim labore adipisicing minim sint cillum sint
                        consectetur cupidatat. Lorem ipsum dolor sit amet, qui
                        minim labore adipisicing minim sint cillum sint
                        consectetur cupidatat. Lorem ipsum dolor sit amet, qui
                        minim labore adipisicing minim sint cillum sint
                        consectetur cupidatat. Lorem ipsum dolor sit amet, qui
                        minim labore adipisicing minim sint cillum sint
                        consectetur cupidatat. Lorem ipsum dolor sit amet, qui
                        minim labore adipisicing minim sint cillum sint
                        consectetur cupidatat. Lorem ipsum dolor sit amet, qui
                        minim labore adipisicing minim sint cillum sint
                        consectetur cupidatat. Lorem ipsum dolor sit amet, qui
                        minim labore adipisicing minim sint cillum sint
                        consectetur cupidatat. Lorem ipsum dolor sit amet, qui
                        minim labore adipisicing minim sint cillum sint
                        consectetur cupidatat. Lorem ipsum dolor sit amet, qui
                        minim labore adipisicing minim sint cillum sint
                        consectetur cupidatat. Lorem ipsum dolor sit amet, qui
                        minim labore adipisicing minim sint cillum sint
                        consectetur cupidatat. Lorem ipsum dolor sit amet, qui
                        minim labore adipisicing minim sint cillum sint
                        consectetur cupidatat. Lorem ipsum dolor sit amet, qui
                        minim labore adipisicing minim sint cillum sint
                        consectetur cupidatat.
                    </Text>
                </ScrollView>
                <CustomButton
                    title="Gallery"
                    onPress={() => setIsSelected(false)}
                    style={[
                        designSystem().STYLING.primaryButton,
                        {
                            position: 'absolute',
                            bottom: 0,
                        },
                    ]}
                />
            </>
        );
    }

    if (loading) {
        console.log('I am loading');
        return (
            <View style={[designSystem().CONTAINERS.container]}>
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

    return (
        <View style={[designSystem().CONTAINERS.container]}>
            <ScrollView
                style={[
                    {
                        display: 'flex',
                    },
                ]}
            >
                {rewardsArray.map((reward, index) => {
                    console.log('displaing reward: ', reward);
                    return (
                        <GalleryImageView
                            key={index}
                            reward={reward}
                            onNavigate={selectImage(reward)}
                            style={[
                                {
                                    flex: 1,
                                },
                            ]}
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
