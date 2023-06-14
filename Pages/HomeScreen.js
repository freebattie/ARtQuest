////////////////////////////////////////////////////////////////
//  Description: Home screen
//  Version: 1.0
//  Author: Bjarte
//  co-Author: Rolf, Rebekka, Jack, Michael, Gabriel
///////////////////////////////////////////////////////////////
import React from 'react';
import {
   StyleSheet,
   Text,
   View,
   Image
} from 'react-native';
import CustomButton from '../components/style/CustomButton';
import designSystem from '../components/style/DesignSystem';


/**
 * shows the main menu
 * @param navigation used to navigate between pages
 *
 */
export default function HomeScreen({ navigation }) {
   return (
      <View style={styles.container}>
         <Image
            source={require('../assets/images/sunrise.jpg')}
            style={[
               {
                  flex: 1,
                  position: 'absolute',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '100%',
                  height: '100%',

               }
            ]}
         />
         <View>
            <View style={[
               {
                  flexDirection: 'column',
                  paddingBottom: '15%',
                  margin: 35,
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
      </View >
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      stifyContent: 'center',
   },
});






