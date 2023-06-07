import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import BackSlantText from './BackSlantText';

export default function designSystem() {
    ////////////////////////////////////////////////////////////////////////
    // Munch colour palette
    const COLOR = StyleSheet.create({
        MUNCH_RED: '#fe390f',
        MUNCH_BLACK: '#000000',
        MUNCH_PINK: '#eba398',
        MUNCH_GREEN: '#194641',
        MUNCH_NAVY: '#0f2335',
        MUNCH_GOLD: '#9b8250',
        MUNCH_WHITE: '#fff',
        MUNCH_DARK_GRAY: '#5A5A5A',

    });

    ////////////////////////////////////////////////////////////////////////
    // Colour palette combinations
    const PRIMARY = StyleSheet.create({
        CORE_BLACK_RED: {
            color: COLOR.MUNCH_BLACK,
            backgroundColor: COLOR.MUNCH_RED,
        },
        COLOUR_ON_COLOUR: {
            PINK_GREEN: {
                color: COLOR.MUNCH_PINK,
                backgroundColor: COLOR.MUNCH_GREEN,
            },
            RED_BLACK: {
                color: COLOR.MUNCH_RED,
                backgroundColor: COLOR.MUNCH_BLACK,
            },
            RED_NAVY: {
                color: COLOR.MUNCH_RED,
                backgroundColor: COLOR.MUNCH_NAVY,
            },
            BLACK_RED: {
                color: COLOR.MUNCH_BLACK,
                backgroundColor: COLOR.MUNCH_RED,
            },
            BLACK_PINK: {
                color: COLOR.MUNCH_BLACK,
                backgroundColor: COLOR.MUNCH_PINK,
            },
        },
    });

    ////////////////////////////////////////////////////////////////////////
    // Top navigation bar for all screens
    const STACK_NAV_HEADER = {
        headerStyle: {
            ...PRIMARY.COLOUR_ON_COLOUR.RED_BLACK,
        }, 
       
       
    
       
    
        headerTitle: () => (
            <View style={Styling.appHeaderContainer}>
            <TouchableOpacity style={Styling.logoContainer}>
                <Text style={Styling.appHeaderTitleFont}> MUNCH</Text>
            </TouchableOpacity>
            <Text style={Styling.appHeaderSubtitle}>ARtQuest</Text>
        </View>
        ),
        headerTitleStyle: {
            color: '#fff',
        },
        headerTintColor: '#fff', // set the back button arrow color to white
    };

    const INPUT_FORM = StyleSheet.create({
        input: {
            width: '50%',
            height: 40,
            borderColor: '#ccc',
            borderWidth: 1,
            borderRadius: 5,
            paddingHorizontal: 10,
            marginBottom: 10,
        },
    });
   

    const Styling = StyleSheet.create ({
       
        container: {
            flex: 1,
            backgroundColor: COLOR.WHITE,
            alignItems: 'center',
            justifyContent: 'center',
        },
    
        text: {
            fontFamily: 'Montserrat',
            fontWeight: 'bold',
            fontSize: 22,
        },
    
        /***** Input Section ******/
    
        /*******************
         *  Button Section
         *  ***************/
    
        primaryButton: {
            width: 'auto',
            backgroundColor: COLOR.MUNCH_RED,
            paddingHorizontal: 20,
            paddingVertical: 10,
            marginBottom: 10,
        },
        buttonText: {
            color: COLOR.WHITE,
            fontFamily: 'Montserrat',
            fontSize: 18,
            fontWeight: 'bold',
            textAlign: 'center',
        },
    
        /***********************
         *  Homepage Section
         *  ******************/
    
        homePageText: {
            fontFamily: 'Montserrat',
            fontSize: 28,
            margin: 5,
        },
        primaryButtonText: {
            color: COLOR.WHITE,
            fontFamily: 'Montserrat',
            fontSize: 18,
            fontWeight: 'bold',
            textAlign: 'center',
        },
    
        /***********************
         *  AppHeader Section
         *  ******************/
    
        appHeaderContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: COLOR.MUNCH_BLACK,
        },
        logoContainer: {
            flexDirection: 'row',
        },
    
        appHeaderTitleFont: {
            flex: 1,
            color: COLOR.MUNCH_RED,
            fontSize: 28,
            fontFamily: 'GirottMunch-BoldBackslant',
            paddingTop: 5,
            paddingLeft: 15,
        },
        appHeaderSubtitleContainer: {
            flexDirection: 'column',
            alignItems: 'center',
            marginLeft: 20,
        },
        appHeaderSubtitle: {
            flex: 1,
            fontFamily: 'GirottMunch-Bold',
            fontSize: 36,
            width: '100%',
            color: COLOR.MUNCH_WHITE,
            paddingStart: 15,
        },
        appHeaderBackBtn: {
            marginRight: 20,
            color: COLOR.MUNCH_RED,
            alignItems: 'flex-end',
        },
        appHeaderBackButtonText: {
            fontSize: 32,
            color: COLOR.WHITE,
        },
    
        /***********************
         *  Login Page Section
         *  *******************/
    
        safeAreaViewContainer: {
            flex: 1,
            justifyContent: 'flex-start',
            top: 25,
        },
        loginPageInput: {
            width: '80%',
            height: 40,
            borderWidth: 1,
            borderColor: COLOR.DARK_GRAY,
            margin: 5,
            fontFamily: 'Montserrat',
            fontWeight: '700',
        },
    
        loginPageTextInputContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            width: 250,
            marginTop: 50,
        },
        loginPagePasswordInput: {
            width: 150,
            height: 30,
            borderWidth: 0,
            borderColor: COLOR.WHITE,
            margin: 5,
            fontFamily: 'Montserrat',
            fontWeight: '700',
        },
    
        icon: {
            width: 32,
            height: 32,
        },
    
        dashedContainer: {
            justifyContent: 'center',
            alignItems: 'center',
            width: 140,
        },
        dashed: {
            borderBottomWidth: 2,
            borderStyle: 'solid',
            borderColor: 'black',
            width: '80%',
        },
    
        passwordInputContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            borderColor: COLOR.DARK_GRAY,
            borderWidth: 1,
            paddingHorizontal: 10,
            marginBottom: 10,
        },
    
        passwordIconContainer: {
            marginLeft: 'auto',
        },
    
        /**************************
         *  Signup Page Section
         *  *********************/
    
        signupPageTextInputContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            width: '80%',
        },
    
        signupPageEmailInput: {
            width: '95%',
            height: 40,
            borderWidth: 1,
            borderColor: COLOR.WHITE,
            marginBottom: 5,
            fontFamily: 'Montserrat',
            fontWeight: '700',
            paddingLeft: 15,
        },
    
        signupPagePasswordInput: {
            width: '80%',
            height: 30,
            borderWidth: 0,
            borderColor: COLOR.WHITE,
            margin: 5,
            fontFamily: 'Montserrat',
            fontWeight: '700',
        },


    });
    

    return { COLOR, PRIMARY, STACK_NAV_HEADER, INPUT_FORM };
}
