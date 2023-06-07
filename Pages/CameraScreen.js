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
    const [activQuest, setActivQuest] = useState('');
    const [activeItemId, setActiveItemId] = useState(0);
    const { sendItem, getAllQuest } = useContext(Appcontext);
    const [quests, setQuests] = useState(new Map());
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
        let data;
        try {
            data = await getAllQuest();
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
        getAllItems();
        setLoading(false);
    }, []);
    const noQRCode = () => {
        setScanned(false);
    };

    const handelUpdateImageLocation = async ({ bounds, data }) => {
        setImageX(bounds['origin'].x);
        setImageY(bounds['origin'].y);
        setImageHeight(bounds['size'].height);
        setImageWidth(bounds['size'].width);
        let foundObject = null;

        /* setTimeout(function () {
            setActiveItem('N/A');
            setScanned(false);
        }, 1000); */
        try {
            foundObject = await JSON.parse(data);
            if (foundObject) {
                setActiveItem(foundObject.name);
                setActivQuest(foundObject.quest);
                setActiveItemId(foundObject.item);
            }

            let currentQuests = new Map(quests);

            if (!currentQuests.get(foundObject.name)) {
            } else {
                console.log('here');
                let quest = currentQuests.get(foundObject.name);
                let found = quest.collected.find((item) => {
                    return item == foundObject.item;
                });
                console.log('here', found);
                if (found) {
                    console.log('got here');
                    setActiveItem('N/A');
                    setActivQuest('');
                    setActiveItemId(0);
                    setScanned(false);
                }
            }
        } catch (error) {
            console.log('scanned Wrong item ', error);
        }
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
        console.log(bounds);
        setScanned(true);
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
            setActiveItem(foundObject.name);
            setActivQuest(foundObject.quest);
            setActiveItemId(foundObject.item);
        } else {
            setScanned(false);
            setActiveItem('N/A');
            setActiveItemId(0);

            return;
        }

        // TODO: Modal or alert?
        //alert(`Bar code with type ${type}\nData ${data} has been scanned!`);
        setActiveItem(foundObject.name);
        let serverData = {};
        let currentQuests = new Map(quests);
        if (!currentQuests.get(foundObject.name)) {
        } else {
            let quest = currentQuests.get(foundObject.name);
            let found = quest.collected.find((item) => {
                item.name == foundObject.name;
            });
            if (found) {
                console.log('got here');
                setActiveItem('N/A');
                setActivQuest('');
                setActiveItemId(0);
                setScanned(false);
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
        <View style={styles.container}>
            <BarCodeScanner
                onBarCodeScanned={
                    scanned ? handelUpdateImageLocation : handleBarCodeScanned
                }
                style={StyleSheet.absoluteFillObject}
            />
            <TouchableOpacity
                onLayout={onLayout}
                onPress={async () => {
                    try {
                        const serverData = await sendItem({
                            quest: activQuest,
                            item: activeItemId,
                        });
                        let currentQuests = new Map(quests);
                        const tempQuest = currentQuests.get(activeItem);
                        tempQuest.collected = serverData.collected;
                        tempQuest.size = serverData.size;
                        currentQuests.set(activeItem, tempQuest);
                        setQuests(currentQuests);
                        setScanned(false);
                        setActiveItem('N/A');
                        setShowQuestProgress(true);
                        setActivQuest('');
                        setActiveItemId(0);
                    } catch (error) {
                        console.log('new EROROR', error);
                    }
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
                            left: imageX - imageXOffset,
                            top: imageY - imageYOffset,
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
