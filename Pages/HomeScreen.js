import React, { useState } from 'react';
import {
   StyleSheet,
   Text,
   View,
   TextInput,
   SafeAreaView,
   Button,
} from 'react-native';
import CustomButton from '../components/style/CustomButton';
import designSystem from '../components/style/DesignSystem';

export default function HomeScreen({ navigation }) {
   const [userName, setUserName] = useState('');
   const [password, setPassword] = useState('');
   return (
      <View style={styles.container}>
         <View style={[
            {
               flexDirection: 'column'
            }
         ]}>
            <Text
               style={[
                  designSystem().TEXT_STYLES.title,
               ]}
            > Welcome
            </Text>
            <Text
               style={[
                  designSystem().TEXT_STYLES.title,
               ]}
            > to
            </Text>
            <Text
               style={[
                  designSystem().TEXT_STYLES.title,
               ]}
            > ARtQuest
            </Text>
         </View>
         <CustomButton
            title="Start Game"
            onPress={() => navigation.navigate('CameraScreen')}
            style={[
               designSystem().STYLING.primaryButton
            ]}
         />
         <CustomButton
            title="Quests"
            onPress={() => navigation.navigate('QuestsScreen')}
         />
         <CustomButton
            title="Show Collections"
            onPress={() => navigation.navigate('CollectionsScreen')}
         />
         <CustomButton
            title="Logout"
            onPress={() => navigation.navigate('LoginScreen')}
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
