import { BarCodeScanner } from 'expo-barcode-scanner';
import { useState, useEffect, useContext } from 'react';
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
    const [reward, setReward] = useState('');
    const [showQuestProgress, setShowQuestProgress] = useState(false);

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
            console.log('fund object', foundObject.name);
        } else {
            setScanned(false);
            setActiveItem('N/A');
            setShowQuestProgress(true);
            return;
        }

        // TODO: Modal or alert?
        //alert(`Bar code with type ${type}\nData ${data} has been scanned!`);
        setActiveItem(foundObject.name);
        let serverData = {};
        let currentQuests = new Map(quests);

        if (!currentQuests.has(foundObject.name)) {
            setScanned(true);
            console.log('current quests are ', currentQuests);
            let collected = [];
            collected.push(foundObject.item);
            try {
                console.log(activeItem);
                currentQuests.set(foundObject.name, {
                    collected: collected,
                    quest: foundObject.quest,
                });
                console.log(
                    'sending first time only',
                    foundObject.quest,
                    foundObject.item
                );
                try {
                    serverData = await sendItem({
                        quest: foundObject.quest,
                        item: foundObject.item,
                    });
                } catch (error) {
                    console.log('new EROROR', error);
                }
            } catch (error) {
                console.log('sendItem error ', error);
            }
            const tempQuest = currentQuests.get(foundObject.name);
            tempQuest.collected = serverData.collected;
            tempQuest.size = serverData.size;
            currentQuests.set(foundObject.name, tempQuest);
            setQuests(currentQuests);
        } else {
            console.log('quest is there ');
            const tmpQuest = currentQuests.get(foundObject.name);
            console.log('collected is ', tmpQuest);
            const found = tmpQuest.collected.find(
                (item) => item == foundObject.item
            );

            if (found) {
                console.log('quest is there, and item is picked up ');
                setActiveItem('N/A');
            } else {
                console.log('quest is there, and item is not picked up ');
                setScanned(true);
                try {
                    console.log(foundObject.quest, 'SENDING', foundObject.item);
                    serverData = await sendItem({
                        quest: foundObject.quest,
                        item: foundObject.item,
                    });
                    console.log('testing', serverData);

                    const tempQuest = currentQuests.get(foundObject.name);
                    tempQuest.collected = serverData.collected;
                    console.log('tempquest is when setitng it', tempQuest);
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
    if (showQuestProgress) {
        let currentQuests = new Map(quests);
        const quest = currentQuests.get(activeItem);

        return (
            <TouchableOpacity
                onPress={() => {
                    setShowQuestProgress(false);
                    setActiveItem('N/A');
                }}
                style={styles.itemContainer}
            >
                <Text>You have Picked up </Text>
            </TouchableOpacity>
        );
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

                    setShowQuestProgress(true);
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
