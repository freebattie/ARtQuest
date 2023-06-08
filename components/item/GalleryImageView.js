import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Pressable } from 'react-native';
import { Appcontext } from '../../lib/AppContext';

export default function GalleryImageView({ reward, onNavigate }) {
   const { getImageByName } = useContext(Appcontext);
   console.log("GalleryImageView");
   console.log("reward: ", reward);

   console.log("Accessing ", reward.filename)
   const image = getImageByName(reward.filename);
   console.log("got: ", image);
   return (
      <Pressable onPress={() => onNavigate()}>
         <Image
            source={image}
         />
         <Text>{reward.title}</Text>
      </Pressable>
   );
}
