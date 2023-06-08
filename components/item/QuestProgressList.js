import {
    FlatList,
    View,
    StyleSheet,
    TouchableOpacity,
    Text,
} from 'react-native';
import { useContext, useEffect, useState } from 'react';
import useGetAllQuest from '../hooks/useGetAllQuest';
import QuestProgressCard from './QuestProgressCard';
import dummy from './dummy.json';
import { v4 as ID } from 'uuid';






/**
 * Functional Component that will make a request to server to fetch necessarily data.
 * Then iterate through the data with map and for every item, assigning an unique key using UUID.
 * Finally display into a flat list that will render out items as cards.
 * Every card is clickable
 * @returns A lazy list that will only render visible cards
 */
export default function QuestProgressList() {
    
    // useGetAllQuest is refactoring data fetching logic into own component
    const quests = useGetAllQuest();

    return (
        <View style={styles.container}>
            <FlatList
                data={quests}
                keyExtractor={() => ID()}
                renderItem={({ item }) => {
                    const divide = item.galleryname.split(': ');
                    const artist = divide[1].split(' ')[0];
                    const theme = divide[1].split(' ')[1].padStart(2);

                    return (
                        <TouchableOpacity activeOpacity={0.75}>
                            <QuestProgressCard
                                key={() => ID()}
                                artist={artist}
                                theme={" ".concat(theme)}
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
