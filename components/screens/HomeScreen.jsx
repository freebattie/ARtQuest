import { View, Text, StyleSheet, Button } from "react-native";
import { useEffect } from "react";


// Navigate will return to the last top of the stack when navigating back
export default function HomeScreen({ navigation }) {
    useEffect(() => {
        return () => console.log("Logged out")
    }, [])

    return (
        <View style={styles.container}>
            <Text>Show quests</Text>
            <Button title="Quest" onPress={() => navigation.navigate("Quest")} />
            <Button title="Logout" onPress={() => navigation.replace("Login")} />
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