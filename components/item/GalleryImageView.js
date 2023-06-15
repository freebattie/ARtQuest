/** #======================================================#
 *  #    Program or program file: GalleryImageView.js
 *  #    Description: View for displaying a single image in gallery
 *  #    Author: Michaël
 *  #    Date: 8. June 2023
 *  #    Version 1.0
 *  #======================================================#
 * */
import React, { useContext, useEffect, useState } from 'react';
import { Text, Image, Pressable } from 'react-native';
import { Appcontext } from '../../lib/AppContext';

/**
 * show a singel picture and info
 * @param reward - the obj containing info on picture
 * @param onNavigate - used to navigate to next page
 */
export default function GalleryImageView({ reward, onSelectImage }) {
    const { getImageByName } = useContext(Appcontext);
    const [activeImage, setActiveImage] = useState('');
    console.log('GalleryImageView');

    useEffect(() => {
        const image = getImageByName(reward.filename);
        setActiveImage(image);
    }, []);
    return (
        <Pressable onPress={() => onSelectImage(reward)}>
            <Image
                source={activeImage}
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
