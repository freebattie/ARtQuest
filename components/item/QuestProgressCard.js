import {View, Text, StyleSheet, Image} from "react-native";
import React from "react";

export default function QuestProgressCard({artist, theme, size, collected, children}) {

    // Dynamic image
    const image = null;



    return (
        <View style={styles.container}>
            <View style={styles.detailsContainer}>
                <Text style={styles.artistText}>{artist ? artist : 'Artist'}</Text>
                <Text style={styles.themeText}>{theme ? theme : 'Theme'} :</Text>
            </View>
            <View style={styles.trackerContainer}>
                <Text style={styles.progress}>10/10</Text>
                <Image
                    source={require(`../../assets/images/${image ? image : 'question'}.png`)}
                    style={styles.image}
                />
            </View>
            {
                React.Children.map(children, (child) => {
                    if (React.isValidElement(child)) {
                        return React.cloneElement(child, {
                            style: [child.props.style, styles.child],
                        })
                    }
                    return child;
                })
            }
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f5f5f5',
        borderWidth: 1,
        borderColor: 'black',
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
        borderWidth: 1,
        borderColor: 'crimson',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        height: '100%',
    },
    artistText: {
        fontSize: 15,
        fontWeight: 'bold',
        fontFamily: 'sans-serif',
        color: 'crimson',
    },
    themeText: {
        fontSize: 28,
        fontFamily: 'backslant' ? 'backslant' : 'helvetica',
        color: 'crimson',
        textAlign: 'center',
        position: 'relative',
        left: 10,
    },
    trackerContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
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
    }
})