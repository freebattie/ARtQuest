import { View, Image, StyleSheet, Text } from 'react-native';
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
            <View
                style={{
                    height: 120,
                    justifyContent: 'center',
                    flexDirection: 'column',
                }}
            >
                <Image
                    source={require('../../assets/logo/RGB/PNG/MUNCH_Logo_RGB_Red.png')}
                    style={{
                        marginLeft: -5,
                        width: 120,
                        height: 60,
                        resizeMode: 'contain',
                    }}
                />
                <Text
                    style={{
                        color: COLOR.MUNCH_GOLD,
                        fontSize: 32,
                        fontFamily: 'backslant',
                        textAlign: 'right',
                    }}
                >
                    ARtQuest
                </Text>
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

    return { COLOR, PRIMARY, STACK_NAV_HEADER, INPUT_FORM };
}
