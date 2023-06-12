/** #======================================================#
*  #    Program or program file: QuestProgressCard.js
*  #    Description: Card view for quest progression
*  #    Author: Jack
*  #    Co-author: Bjarte
*  #    Date: 8. June 2023
*  #    Version 1.0
*  #======================================================#
* */
import { View, Text, StyleSheet, Image } from 'react-native';
import React, { useEffect, useState } from 'react';

/**
 * QuestProgressCard is destructuring a data object that will display as card view for flat list
 * If component is used with children, all the styling will be applied to children.
 * @param {artist, theme} - string
 * @param {size} - number
 * @param {collected} - array
 * @param {children} - FC.ReactNode ? is optional if QuestProgressCard is not used as self-closing component
 * @returns
 */
export default function QuestProgressCard({
    artist,
    theme,
    size,
    collected,
    children,
}) {
    // Dynamic image
    const image = 'scream';

    const [complete, setComplete] = useState(false);

    useEffect(() => {
        if (collected == size) {
            setComplete(true);
        }
    }, [complete]);

    console.log(complete);

    return (
        <View style={styles.container}>
            <View style={styles.detailsContainer}>
                <Text
                    style={[
                        styles.artistText,
                        complete ? { color: '#9b8250' } : { color: '#194641' },
                    ]}
                >
                    {artist ? artist : 'Artist'}
                </Text>
                <Text
                    style={[
                        styles.themeText,
                        complete ? { color: '#9b8250' } : { color: '#194641' },
                    ]}
                >
                    {theme ? theme : 'Theme'} :
                </Text>
            </View>
            <View style={styles.trackerContainer}>
                <Text
                    style={[
                        styles.progress,
                        complete ? { color: '#9b8250' } : { color: '#194641' },
                    ]}
                >
                    {collected ? collected : 0}/{size ? size : 0}
                </Text>
                <Image
                    source={require(`../../assets/images/${image ? image : 'question'
                        }.png`)}
                    style={styles.image}
                />
            </View>
            {React.Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child, {
                        style: [child.props.style, styles.child],
                    });
                }
                return child;
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f5f5f5',
        borderWidth: 0, // For debugging
        borderColor: 'black',
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: 100,
        width: '95%',
        margin: 5,
        padding: 15,
    },
    detailsContainer: {
        flex: 2,
        borderWidth: 0, // For debugging
        borderColor: 'crimson',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        height: '100%',
    },
    artistText: {
        fontSize: 15,
        fontWeight: 'bold',
        fontFamily: 'HelveticaNeue',
        color: 'crimson',
    },
    themeText: {
        fontSize: 28,
        fontFamily: 'Munch-Backslant',
        color: 'crimson',
        textAlign: 'center',
        position: 'relative',
        left: 10,
    },
    trackerContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 0, // For debugging
        borderColor: 'navy',
        height: '100%',
    },
    progress: {
        flex: 1,
        color: 'red',
        fontSize: 20,
    },
    image: {
        flex: 1,
        resizeMode: 'contain',
        width: '75%',
        height: '75%',
    },
});
