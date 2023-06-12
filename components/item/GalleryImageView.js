import React, { useState, useContext } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
    Pressable,
} from 'react-native';
import { Appcontext } from '../../lib/AppContext';

/**
 * show a singel picture and info
 * @param reward - the obj containing info on picture
 * @param onNavigate - used to navigate to next page
 */
export default function GalleryImageView({ reward, onNavigate }) {
    const { getImageByName } = useContext(Appcontext);
    console.log('GalleryImageView');
    const image = getImageByName(reward.filename);

    return (
        <Pressable onPress={() => onNavigate()}>
            <Image
                source={image}
                style={{
                    width: '100%',
                    height: undefined,
                    aspectRatio: 1,
                }}
            />
            <Text>{reward.title}</Text>
        </Pressable>
    );
}
