import { Camera, CameraType } from 'expo-camera';
import { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';






export default function CameraScreen() {
    const [type, setType] = useState(CameraType.back);
    const [permission, setPermission] = Camera.useCameraPermissions();

    if (!permission) return <></>;

    if (!permission.granted) {
        return (
            <View>
                <Text>Grant ARtQuest access to your camera</Text>
                <Button title='grant' onPress={setPermission} />
            </View>
        )
    };

    const toggleCameraType = () => {
        setType(current => (
            current === CameraType.back ? CameraType.front : CameraType.back
        ));
    }

    return (
        <View style={styles.container}>
            <Camera
                style={styles.camera}
                type={type} ratio="16:9"
            />
            <View>
                <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
                    <Text style={styles.text}>Flip</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    camera: {
        flex: 1,
        height: '100%',
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'transparent',
        margin: 64,
    },
    button: {
        flex: 1,
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
});