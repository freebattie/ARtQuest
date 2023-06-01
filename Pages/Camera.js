import { BarCodeScanner } from 'expo-barcode-scanner';
import { useState, useEffect } from 'react';
import {
    Button,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image,
} from 'react-native';
import { Appcontext } from '../lib/AppContext';

export default function CameraScreen() {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [activeItem, setActiveItem] = useState(false);
    const [prevItem, setPrevItem] = useState('');
    const { sendItem } = useContext(Appcontext);
    const [quests, setQuests] = useState({});

    const [allItemsFromAssets, doNotUse] = useState([
        {
            src: require('../assets/images/rocks.png'),
            name: 'rocks',
        },
        {
            src: require('../assets/images/cheese.png'),
            name: 'cheese',
        },
        {
            src: require('../assets/images/scream.png'),
            name: 'scream',
        },
    ]);

    useEffect(() => {
        // Getting permission from user
        const getBarCodeScannerPermissions = async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        };
        // Side effect
        getBarCodeScannerPermissions();
    }, []);

    ////////////////////////////////
    // Handling user event
    ////////////////////////////////
    const handleBarCodeScanned = async ({ type, data }) => {
        setScanned(true);
        // TODO: Modal or alert?
        //alert(`Bar code with type ${type}\nData ${data} has been scanned!`);
        const foundObject = await JSON.parse(data);
        const serverData = {};
        const currentQuests = { ...quests };
        if (!currentQuests.has(foundObject.name)) {
            setActiveItem(foundObject.name);
            currentQuests.set(activeItem, {
                collected: [foundObject.item],
                quest: foundObject.quest,
            });
            try {
                serverData = await sendItem({
                    quest: foundObject.quest,
                    item: foundObject.item,
                });
            } catch (error) {
                console.log(error);
            }

            console.log('data is', serverData);
            const tempQuest = currentQuests.get(activeItem);
            tempQuest.collected = serverData.collected;
            currentQuests.set(activeItem);
            setQuests;
            setPrevItem(activeItem);
        } else {
            console.log('here');
            setActiveItem(foundObject.name);
            const quest = currentQuests.get(activeItem);
            console.log('quest ', quest);
            const found = quest.collected.find(
                (item) => item == foundObject.item
            );
            console.log('found is', found);
            if (found) {
                setActiveItem(foundObject.name);
                setPrevItem(activeItem);
            }
        }

        setPrevItem(activeItem);
        console.log(serverData);
    };

    ////////////////////////////////
    // Conditional rendering
    ////////////////////////////////
    if (hasPermission === null) {
        return <Text>ARtQuest is asking for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>Permission denied</Text>;
    }

    ////////////////////////////////////////////////////
    // Returning the current scanned image require ID
    ////////////////////////////////////////////////////
    const scannedImage = allItemsFromAssets.find(
        (item) => item.name == activeItem
    );
    console.log(scannedImage);
    console.log(prevItem);
    console.log(activeItem);
    return (
        <View style={styles.container}>
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
            />

            {prevItem != activeItem ? (
                scanned && (
                    <TouchableOpacity
                        onPress={() => setScanned(false)}
                        style={styles.itemContainer}
                    >
                        {activeItem != 'N/A' && (
                            <Image
                                source={scannedImage['src']}
                                style={{ width: 150, height: 150 }}
                            />
                        )}
                    </TouchableOpacity>
                )
            ) : scanned ? (
                <Button
                    title={'OK GOT IT!!'}
                    onPress={() => {
                        setPrevItem('');
                        setActiveItem('N/A');
                        setScanned(false);
                    }}
                ></Button>
            ) : (
                <></>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    itemContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    artifact: {
        backgroundColor: 'red',
        width: '50%',
        height: '50%',
    },
});
