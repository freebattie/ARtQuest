import { View, Text, StyleSheet, Button } from "react-native";




export default function QuestScreen() {
    return (
        <View style={styles.container}>
            <Text>Quest screen</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: "center",
    }
})