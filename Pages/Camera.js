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
    const [activeItem, setActiveItem] = useState('N/A');
    const [prevItem, setPrevItem] = useState('');
    const { sendItem } = useContext(Appcontext);
    const [quests, setQuests] = useState(new Map(quests));

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
        let foundObject = null;
        try {
            foundObject = await JSON.parse(data);
        } catch (error) {
            console.log('scanned Wrong item ', error);
        }

        ////////////////////////////////////////////////////
        // Returning the current scanned image require ID
        ////////////////////////////////////////////////////
        if (foundObject) {
            console.log('not here? ', foundObject.name);
            setActiveItem(foundObject.name);
        } else {
            setScanned(false);
            setActiveItem('N/A');
            return;
        }

        // TODO: Modal or alert?
        //alert(`Bar code with type ${type}\nData ${data} has been scanned!`);

        let serverData = {};
        let currentQuests = new Map(quests);

        if (!currentQuests.has(foundObject.name)) {
            setScanned(true);
            console.log('get here? ', currentQuests);
            let collected = [];
            collected.push(foundObject.item);
            try {
                console.log(activeItem);
                currentQuests.set(foundObject.name, {
                    collected: collected,
                    quest: foundObject.quest,
                });
                console.log('sending ', foundObject.quest, foundObject.item);
                serverData = await sendItem({
                    quest: foundObject.quest,
                    item: foundObject.item,
                });
                console.log(serverData);
            } catch (error) {
                console.log('sendItem error ', error);
            }

            console.log('data is', serverData, 'current ', currentQuests);
            const tempQuest = currentQuests.get(foundObject.name);
            tempQuest.collected = serverData.collected;
            currentQuests.set(foundObject.name, tempQuest);
            setQuests(currentQuests);
        } else {
            const tmpQuest = currentQuests.get(foundObject.name);
            console.log('tmpQuest are', tmpQuest);

            const found = tmpQuest.collected.find(
                (item) => item == foundObject.item
            );
            console.log('found is', found);
            if (found) {
                setActiveItem('N/A');
            } else {
                setScanned(true);
                try {
                    console.log(foundObject.quest, 'SENDING', foundObject.item);
                    serverData = await sendItem({
                        quest: foundObject.quest,
                        item: foundObject.item,
                    });
                    const tempQuest = currentQuests.get(foundObject.name);
                    serverData.collected.push(foundObject.item);
                    tempQuest.collected = serverData.collected;
                    currentQuests.set(foundObject.name, tempQuest);
                } catch (error) {
                    console.log('handleBarCodeScanned', error);
                }
            }
        }
    };

    const scannedImage = allItemsFromAssets.find(
        (item) => item.name == activeItem
    );

    ////////////////////////////////
    // Conditional rendering
    ////////////////////////////////
    if (hasPermission === null) {
        return <Text>ARtQuest is asking for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>Permission denied</Text>;
    }

    return (
        <View style={styles.container}>
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
            />
            <TouchableOpacity
                onPress={() => {
                    setScanned(false);
                    setActiveItem('N/A');
                }}
                style={styles.itemContainer}
            >
                {activeItem != 'N/A' && scanned && (
                    <Image
                        source={scannedImage['src']}
                        style={{ width: 150, height: 150 }}
                    />
                )}
            </TouchableOpacity>
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
