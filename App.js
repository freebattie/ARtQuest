// Native
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// EXPO
import { StatusBar } from 'expo-status-bar';

// Screens
import LoginScreen from './Pages/LoginScreen';
import HomeScreen from './Pages/HomeScreen';
import SignUpScreen from './Pages/SignUpScreen';
import CameraScreen from './Pages/CameraScreen';
import CollectionScreen from './Pages/CollectionsScreen';
import QuestScreen from './Pages/QuestsScreen';

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Design
import DesignSystem from './components/style/DesignSystem';
import useFont from './components/hooks/useFont';

// Navigators
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Tab Icon
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Home from './Pages/HomeScreen';

export default function App() {
    const isFontLoaded = useFont();
    const { COLOR, PRIMARY, STACK_NAV_HEADER } = DesignSystem();
    const options = STACK_NAV_HEADER;
    const BottomTab = createBottomTabNavigator();

    ////////////////////////////////////////////////////////////////////////
    // Font has to be loaded before the app can be rendered
    if (isFontLoaded) {
        return (
            <SafeAreaProvider>
                <NavigationContainer>
                    <StatusBar hidden />
                    <Stack.Navigator
                        headerShown={false}
                        screenOptions={options}
                    >
                        <Stack.Screen
                            name="LoginScreen"
                            component={LoginScreen}
                        />
                        <Stack.Screen
                            name="HomeScreen"
                            component={HomeScreen}
                            options={options}
                        />
                        <Stack.Screen
                            name="SignUpScreen"
                            component={SignUpScreen}
                            options={options}
                        />
                        <Stack.Screen
                            name="CameraScreen"
                            component={CameraScreen}
                            options={options}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </SafeAreaProvider>
        );
    } else {
        return null;
    }
}

/**
 *
 * @returns a root navigator that will render the screen in chronological order
 */
function RootNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="LoginScreen"
                component={LoginScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="CameraScreen"
                component={BottomNavigator}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="SignUpScreen"
                component={SignUpScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}

/**
 *
 * @returns A bottom navigator with icons that routes to screen
 * It's crucial to use navigation.pop() to remove the screen for the active stack.
 * Otherwise, the bottom navigator will still be the active stack.
 */
function BottomNavigator() {
    return (
        <Tab.Navigator initialRouteName="LoginScreen">
            <Tab.Screen
                name="CameraScreen"
                component={CameraScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="home" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="CollectionScreen"
                component={CollectionScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="home" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="QuestScreen"
                component={QuestScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                            name="map-marker-question"
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}
