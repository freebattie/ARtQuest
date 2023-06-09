import {
    StyleSheet,
    Text,
    View,
    TextInput,
    SafeAreaView,
    Button,
} from 'react-native';
import QuestProgressList from "../components/item/QuestProgressList";
import designSystem from "../components/style/DesignSystem";
import CustomButton from '../components/style/CustomButton';








export default function QuestsScreen({ navigation }) {


    return (
        <View style={[
            designSystem().CONTAINERS.container
        ]}>
            <QuestProgressList />
            <CustomButton
                title="Back"
                onPress={() => navigation.pop()}
                style={[
                    designSystem().STYLING.primaryButton
                ]}
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
