import React, { useState } from 'react';
import { Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import designSystem from '../style/DesignSystem';

/**
 *
 * @param {*} quest : object
 * @param {*} setShowQuestProgress : useState hook to control the state of showing this modal
 * @returns a modal with object information
 */
export default function QuestProgressItem({
    quests,
    activeItem,
    setActiveItem,
    setShowQuestProgress,
    image,
}) {
    const [isPressed, setIsPressed] = useState(false);

    const quest = quests.get(activeItem);
    const { name, size, collected } = quest;
    console.log(quest);
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
                {
                    backgroundColor: designSystem().COLOR.MUNCH_NAVY
                },
                isPressed ? styles.containerPressed : null,
            ]}
            activeOpacity={1}
            onPressIn={() => onPressInHandler()}
            onPressOut={() => onPressOutHandler()}
        >
            <Image source={image['src']} style={styles.image} />
            <Text
                style={[
                    designSystem().TEXT_STYLES.headline,
                    styles.containerText,
                    isPressed ? styles.containerTextPressed : null,
                ]}
            >
                You found
            </Text>
            <Text
                style={[
                    designSystem().TEXT_STYLES.headline,
                    styles.containerText,
                    isPressed ? styles.containerTextPressed : null,
                ]}
            >
                an item!
            </Text>
            <Text style={[
                designSystem().TEXT_STYLES.text,
                styles.containerText
            ]}>
                {collected.length}/{size}
            </Text>
            <Text
                style={[
                    designSystem().TEXT_STYLES.text,
                    styles.containerText
                ]}
            >
                continue
            </Text>
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
