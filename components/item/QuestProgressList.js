import {FlatList, View, StyleSheet, Pressable} from 'react-native';
import useGetAllQuest from "../hooks/useGetAllQuest";
import QuestProgressCard from "./QuestProgressCard";
import { v4 as UUID } from 'uuid';
import dummy from './dummy.json'


export default function QuestProgressList() {

    //const quests = useGetAllQuest();

    return (
        <View style={styles.container}>
            <FlatList
                data={dummy}
                keyExtractor={item => item.UUID}
                renderItem={({item}) => {


                    const divide = item.galleryname.split(": ");
                    const artist = divide[1].split(" ")[0]
                    const theme = divide[1].split(" ")[1]


                    return (
                        <Pressable>
                            <QuestProgressCard
                                key={item.UUID}
                                artist={artist}
                                theme={theme}
                                size={item.size}
                                collected={item.collected.length}
                            />
                        </Pressable>
                    )
                }}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
