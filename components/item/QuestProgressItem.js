import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

/**
 *
 * @param {*} quest : object
 * @param {*} setShowQuestProgress : useState hook to control the state of showing this modal
 * @returns a modal with object information
 */
export default function QuestProgressItem({quests, activeItem, setShowQuestProgress}) {
    const [isPressed, setIsPressed] = useState(false);
    console.log("questitem ",quests);
    console.log("test",activeItem);
    const quest = quests.get(activeItem);
    const { name, size, collected } = quest;
    console.log(name);
    console.log(size);
    console.log(collected.length);
    const onPressInHandler = () => {
        setIsPressed(true);
        console.log(isPressed);
        // Remove display of object modal, *setter from parent*
        //setShowQuestProgress(false);
    };
    const onPressOutHandler = () => {
        setIsPressed(false);
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
            <Image 
                source={require('../../assets/images/rocks.png')} 
                style={styles.image}
            />
            <Text
                style={[
                    styles.containerText,
                    isPressed ? styles.containerTextPressed : null,
                ]}
            >
                QuestProgressItem
            </Text>
            <Text style={styles.containerText}>
                {size}/{collected.length}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '70%',
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: '#0f2335',
    },
    containerPressed: {
        flex: 1,
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
    }
});
