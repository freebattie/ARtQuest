import { StyleSheet } from 'react-native';
import COLORS from './Colors';

const COLOR = StyleSheet.create(COLORS);

const DesignSystem = StyleSheet.create({
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
        backgroundColor: COLORS.MUNCH_BLACK,
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
        color: COLOR.WHITE,
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

export default DesignSystem;
