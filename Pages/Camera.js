import { BarCodeScanner } from 'expo-barcode-scanner';
import { useState, useEffect, useContext, useRef } from 'react';
import {
    Button,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image,
} from 'react-native';
import { Appcontext } from '../lib/AppContext';
import QuestProgressItem from '../components/item/QuestProgressModal';

export default function CameraScreen() {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [activeItem, setActiveItem] = useState('N/A');
    const { sendItem, getAllQuest } = useContext(Appcontext);
    const [quests, setQuests] = useState(new Map(quests));
    const [reward, setReward] = useState('');
    const [showQuestProgress, setShowQuestProgress] = useState(false);
    const [loading, setLoading] = useState(true);
    const [showReward, setShowReward] = useState(false);
    const [imageX, setImageX] = useState(0);
    const [imageY, setImageY] = useState(0);
    const [imageXOffset, setImageXOffset] = useState(0);
    const [imageYOffset, setImageYOffset] = useState(0);
    const [imageHeight, setImageHeight] = useState(0);
    const [imageWidth, setImageWidth] = useState(0);
    const textContainerRef = useRef < View > null;
    const textRef = useRef < Text > null;
    onLayout = (e) => {
        console.log(e.nativeEvent.layout.x);
        console.log(imageX);
        setImageXOffset(e.nativeEvent.layout.x);
        setImageYOffset(e.nativeEvent.layout.y);
    };
    /**
     * Hardcoded Values for images
     */
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
    const getAllItems = async () => {
        try {
            const data = await getAllQuest();
        } catch (error) {
            console.log(error);
        }

        const serverQuestItem = new Map();

        for (const item of data) {
            if (item.quest == 1) {
                serverQuestItem.set('scream', item);
            } else if (item.quest == 2) {
                serverQuestItem.set('rocks', item);
            }
        }
        setQuests(serverQuestItem);
    };
    useEffect(() => {
        //getAllItems();
        setLoading(false);
    }, []);
    const noQRCode = () => {
        setScanned(false);
    };
    /**
     *
     * @param {what type QR} type
     *  @param {Data in the QR code} data
     * @returns
     */
    const handleBarCodeScanned = async ({
        type,
        data,
        bounds,
        cornerPoints,
    }) => {
        setImageX(bounds['origin'].x);
        setImageY(bounds['origin'].y);
        setImageHeight(bounds['size'].height);
        setImageWidth(bounds['size'].width);
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
                    name: foundObject.name,
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
            if (!scanned) {
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
                        console.log(
                            foundObject.quest,
                            'SENDING',
                            foundObject.item
                        );
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
        }
    };

    const scannedImage = allItemsFromAssets.find(
        (item) => item.name == activeItem
    );

    if (loading) {
        return <Text>LOADINNG FROM SERVER</Text>;
    }
    ////////////////////////////////
    // Conditional rendering
    ////////////////////////////////
    if (hasPermission === null) {
        return <Text>ARtQuest is asking for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>Permission denied</Text>;
    }
    if (showReward) {
        return (
            <TouchableOpacity
                onPress={() => {
                    setShowReward(false);
                    setActiveItem('N/A');
                }}
                style={styles.itemContainer}
            >
                <Text>Your rewward is </Text>
            </TouchableOpacity>
        );
    }

    return (
        <View style={styles.container} onLayout={onLayout}>
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
                        style={{
                            width: imageWidth,
                            height: imageHeight,
                            position: 'absolute',
                            left: imageX - imageWidth - 10,
                            top: imageY - imageHeight - 100,
                        }}
                    />
                )}
            </TouchableOpacity>
            {showQuestProgress && (
                <QuestProgressItem
                    quests={quests}
                    setShowQuestProgress={setShowQuestProgress}
                    setActiveItem={setActiveItem}
                    activeItem={activeItem}
                    image={scannedImage}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
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
