import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Pressable } from 'react-native';

export default function GalleryImageView({ reward, onNavigate }) {
   console.log("GalleryImageView");
   console.log("reward: ", reward);
   const [rewardImages, _] = useState([
      {
         name: "Scream",
         data: require("../../assets/images/scream.png"),
      },
      {
         name: "The Girls on the Bridge",
         data: require("../../assets/images/rocks.png"),
      }
   ]);

   console.log("Accessing ", reward.filename)
   const image = rewardImages.find((image) => image.name == reward.filename);
   return (
      <Pressable onPress={() => onNavigate()}>
         <Image
            source={image["data"]}
         />
         <Text>{reward.title}</Text>
      </Pressable>
   );
}
