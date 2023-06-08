// Native
import { SafeAreaProvider } from 'react-native-safe-area-context';

// EXPO
import { StatusBar } from 'expo-status-bar';

// Screens
import LoginScreen from './Pages/LoginScreen';
import SignUpScreen from './Pages/SignUpScreen';
import HomeScreen from './Pages/HomeScreen';
import CameraScreen from './Pages/CameraScreen';
import QuestsScreen from './Pages/QuestsScreen';
import CollectionsScreen from './Pages/CollectionsScreen';

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

export default function App() {
    const { COLOR, PRIMARY, STACK_NAV_HEADER } = DesignSystem();
    const options = STACK_NAV_HEADER;
    const isFontLoaded = useFont();
    const BottomTab = createBottomTabNavigator();

    ////////////////////////////////////////////////////////////////////////
    // Font has to be loaded before the app can be rendered
    if (isFontLoaded) {
        return (
            <SafeAreaProvider>
                <NavigationContainer>
                    <StatusBar hidden />
                    <RootNavigator options={options} />
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
function RootNavigator({ options }) {
    return (
        <Stack.Navigator headerShown={false} screenOptions={options}>
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={options}
            />
            <Stack.Screen
                name="CollectionsScreen"
                component={CollectionsScreen}
                options={options}
            />
            <Stack.Screen
                name="QuestsScreen"
                component={QuestsScreen}
                options={options}
            />
            <Stack.Screen
                name="SignUpScreen"
                component={SignUpScreen}
                options={options}
            />
            <Stack.Screen
                name="CameraScreen"
                component={BottomNavigator}
                options={options}
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
                name="1"
                component={CameraScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="home" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="2"
                component={CollectionsScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="home" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="3"
                component={QuestsScreen}
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
