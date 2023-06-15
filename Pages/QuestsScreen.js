////////////////////////////////////////////////////////////////
//  Description: Quest screen
//  Version: 1.0
//  Author: Bjarte
//  Co-author: Jack
///////////////////////////////////////////////////////////////
import { StyleSheet, View } from 'react-native';
import QuestProgressList from '../components/item/QuestProgressList';
import designSystem from '../components/style/DesignSystem';
import CustomButton from '../components/style/CustomButton';

/**
 * QuestScreen is rendering a typical List-item pattern in react.
 * A list is rendering all items from the server.
 * Item is a card view component.
 *
 * @param {*} navigation prop is provided by StackNavigator inside App.js in case you need to route forward.
 * @returns A Quest progression "page" that allows user to see their quests progression.
 */
export default function QuestsScreen({ navigation }) {
    return (
        <View style={[designSystem().CONTAINERS.container]}>
            <QuestProgressList />
            <CustomButton
                title="Back"
                onPress={() => navigation.pop()}
                style={[designSystem().STYLING.primaryButton]}
            />
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
