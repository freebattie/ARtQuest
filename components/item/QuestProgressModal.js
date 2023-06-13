/** #======================================================#
 *  #    Program or program file : QuestProgressModal.js
 *  #    Description: Modal for displaying quest progression
 *  #    Author: Jack
 *  #    Date: 8. June 2023
 *  #    Version 1.0
 *  #======================================================#
 * */

import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import designSystem from '../style/DesignSystem';

/**
 *
 * @param  quest: object[] - an array of objects containing quest information
 * @param  activeItem : string - the name of the item that was scanned
 * @param  setActiveItem : useState hook to control the state of the active item
 * @param  setShowQuestProgress : useState hook to control the state of showing this modal
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
    const [size, setSize] = useState(0);
    const [collected, setCollected] = useState([]);
    useEffect(() => {
        let quest = null;
        quest = quests.get(activeItem);
        if (quest) {
            const { size, collected } = quest;
            setCollected(collected);
            setSize(size);
        }
    }, []);

    const onPressInHandler = () => {
        setIsPressed(true);
        console.log(isPressed);
        // Remove display of object modal, *setter from parent*
        setShowQuestProgress(false);
        setActiveItem('N/A');
    };
    const onPressOutHandler = () => {
        setActiveItem('N/A');
        console.log(isPressed);
        setIsPressed(false);
        setShowQuestProgress(false);
    };
    return (
        <TouchableOpacity
            style={[
                designSystem().CONTAINERS.modal,
                {
                    backgroundColor: designSystem().COLOR.MUNCH_NAVY,
                },
                isPressed ? designSystem().CONTAINERS.modalPressed : null,
            ]}
            activeOpacity={1}
            onPressIn={() => onPressInHandler()}
            onPressOut={() => onPressOutHandler()}
        >
            {isPressed && <Image source={image['src']} style={styles.image} />}
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
            <Text
                style={[designSystem().TEXT_STYLES.text, styles.containerText]}
            >
                {collected.length}/{size}
            </Text>
            <Text
                style={[designSystem().TEXT_STYLES.text, styles.containerText]}
            >
                continue
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    containerText: {
        flex: 1,
        color: designSystem().COLOR.MUNCH_WHITE,
    },
    containerTextPressed: {
        flex: 1,
        color: designSystem().COLOR.MUNCH_BLACK,
    },
});
