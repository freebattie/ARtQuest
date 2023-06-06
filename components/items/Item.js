import {View, StyleSheet, Text} from "react-native";


export default function Item() {
    return (
        <View style={styles.container}>
            <Text style={styles.r}>1</Text>
            <Text style={styles.g}>2</Text>
            <Text style={styles.b}>3</Text>
        </View>
    )
}


/*
* To understand flexbox, we need to understand the main axis.
* The main axis is the flex direction, in web by default it's a row from left -> right.
* In Mobile, by default it's a column from top -> bottom.
*
* Then we have the cross axis, for web it will be crossing the main axis from top -> bottom.
* For mobile, it will be crossing the main axis from left -> right.
*
* Suppose the direction is row, then the main axis is from left -> right.
*
* +---------------------+
* |                     |
* |                     |
* |[1][2][3]------------| align the items in the center of main axis
* |                     |
* |                     |
* +---------------------+
*
* +---------------------+
* |                     |
* |                     |
* |----[1]--[2]--[3]----| Now, we want some space between the items, we can use justifyContent: 'space-between'
* |                     |
* |                     |
* +---------------------+
*
*
* Align items:
* */
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 200,
        width: 200,
        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: 1,
    },
    r: {
        flex: 1,
        color: 'white',
        backgroundColor: 'red',
    },
    g: {
        flex: 1,
        color: 'white',
        backgroundColor: 'green',
    },
    b: {
        flex: 1,
        color: 'white',
        backgroundColor: 'blue',
    }
})