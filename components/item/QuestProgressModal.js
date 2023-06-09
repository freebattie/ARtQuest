import React, {useEffect, useState} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

/**
 *
 * @param {*} quest : object
 * @param {*} setShowQuestProgress : useState hook to control the state of showing this modal
 * @returns a modal with object information
 */
export default function QuestProgressItem({
    quests,
    setActiveItem,
    activeItem,
    setShowQuestProgress,
    image,
}) {
    const [isPressed, setIsPressed] = useState(false);
    const [isReward, setIsReward] = useState(false);

    const quest = quests.get(activeItem);
    const { name, size, collected } = quest;
    console.log(quest);


    useEffect(() => {
        if (collected.length === size) {
            setIsReward(true);
        } else {
            setIsReward(false);
        }
    }, [collected.length, size])


    const onPressInHandler = () => {
        setIsPressed(true);
        console.log(isPressed);
        // Remove display of object modal, *setter from parent*
        //setShowQuestProgress(false);
    };
    const onPressOutHandler = () => {
        setIsPressed(false);
        setShowQuestProgress(false);
        setActiveItem('N/A');
        console.log(isPressed);
    };




    return (
        <TouchableOpacity
            style={[
                styles.container,
                isPressed ? styles.containerPressed : null,
            ]}
            activeOpacity={1}
            onPressIn={() => onPressInHandler()}
            onPressOut={() => onPressOutHandler()}
        >
            { isReward ?
                (
                    <>
                        <Image source={image['src']} style={styles.image} />
                        <Text
                            style={[
                                styles.containerText,
                                isPressed ? styles.containerTextPressed : null,
                            ]}
                        >
                            QuestProgressItem
                        </Text>
                        <Text style={styles.containerText}>
                            {collected.length}/{size}
                        </Text>
                    </>
                ) :
                (
                    <>
                        <Text>Reward</Text>
                    </>
                )

            }
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '60%',
        width: '70%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: '#0f2335',
    },
    containerPressed: {
        backgroundColor: '#ccc',
    },
    containerText: {
        flex: 1,
        color: 'white',
    },
    containerTextPressed: {
        flex: 1,
        color: 'black',
    },
    image: {
        flex: 1,
        borderColor: '#cce',
        //borderWidth: 1,
        borderRadius: 5,
        resizeMode: 'contain',
        aspectRatio: 0.75,
    },
});
