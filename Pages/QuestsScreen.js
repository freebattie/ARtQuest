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








export default function QuestsScreen({ navigation }) {


   return (
      <View style={[
         designSystem().CONTAINERS.container
      ]}>
         <QuestProgressList />
         <Button title="Back" onPress={() => navigation.pop()} />
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
