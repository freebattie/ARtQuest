import React, {useState} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    SafeAreaView,
    Button,
} from 'react-native';
import QuestProgressCard from "../components/item/QuestProgressCard";
import QuestProgressList from "../components/item/QuestProgressList";


export default function QuestsScreen({navigation}) {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    return (
        <View style={styles.container}>
            <Text>Quests Menu</Text>
                <QuestProgressList/>
            <Button title="Back" onPress={() => navigation.pop()}/>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
