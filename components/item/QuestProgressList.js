/** #======================================================#
*  #    Program or program file : QuestProgressList.js
*  #    Description: List of quest progress
*  #    Author: Jack
*  #    Co-author: Bjarte
*  #    Date: 8 June 2023
*  #    Version 1.0
*  #======================================================#
* */
import {
   FlatList,
   View,
   StyleSheet,
   TouchableOpacity,
   Text,
} from 'react-native';
import { useContext, useEffect, useState } from 'react';
import QuestProgressCard from './QuestProgressCard';
import { Appcontext } from '../../lib/AppContext';
import designSystem from "../style/DesignSystem";

/**
 * Functional Component that will make a request to server to fetch necessarily data.
 * Then iterate through the data with map and for every item, assigning an unique key using UUID.
 * Finally display into a flat list that will render out items as cards.
 * Every card is clickable
 * @returns A lazy list that will only render visible cards
 */
export default function QuestProgressList() {
   // useGetAllQuest is refactoring data fetching logic into own component
   const { getAllQuest } = useContext(Appcontext);
   const [loading, setloading] = useState(false);
   const UsegetAllQuest = async () => {
      const data = await getAllQuest();

      setQuests(data);
      setloading(true);
   };
   const [quests, setQuests] = useState([]);
   useEffect(() => {
      UsegetAllQuest();
   }, []);
   if (loading) {
      <Text>LOADING..</Text>;
   }
   return (
      <View style={designSystem().CONTAINERS.container}>
         <FlatList
            data={quests}
            renderItem={({ item }) => {
               const divide = item.galleryname.split(': ');
               const artist = divide[1].split(' ')[0];
               const theme = divide[1].split(' ')[1].padStart(2);

               return (
                  <TouchableOpacity activeOpacity={0.75}>
                     <QuestProgressCard
                        key={1}
                        artist={artist}
                        theme={' '.concat(theme)}
                        size={item.size}
                        collected={item.collected.length}
                     />
                  </TouchableOpacity>
               );
            }}
         />
      </View>
   );
}

