// Native
import {StyleSheet} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

// EXPO
import {StatusBar} from 'expo-status-bar';

// Screens
import LoginScreen from './Pages/Login';
import HomeScreen from './Pages/Home';
import SignUpScreen from './Pages/SignUp';
import CameraScreen from './Pages/Camera';

// Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

// Design
import DesignSystem from './components/style/DesignSystem';
import useFont from './components/hooks/useFont';

// Navigators
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Tab Icon
import {FontAwesome} from '@expo/vector-icons';

export default function App() {
    const isFontLoaded = useFont();
    const {COLOR, PRIMARY, STACK_NAV_HEADER} = DesignSystem();
    const options = STACK_NAV_HEADER;
    const BottomTab = createBottomTabNavigator();

    ////////////////////////////////////////////////////////////////////////
    // Font has to be loaded before the app can be rendered
    if (isFontLoaded) {
        return (
            <SafeAreaProvider>
                <NavigationContainer>
                    <StatusBar hidden/>
                    <RootNavigator />
                    {/*<Stack.Navigator*/}
                    {/*    headerShown={false}*/}
                    {/*    screenOptions={options}*/}
                    {/*>*/}
                    {/*    <Stack.Screen name="Login" component={Login}/>*/}
                    {/*    <Stack.Screen*/}
                    {/*        name="Home"*/}
                    {/*        component={Home}*/}
                    {/*        options={options}*/}
                    {/*    />*/}
                    {/*    <Stack.Screen*/}
                    {/*        name="SignUp"*/}
                    {/*        component={SignUp}*/}
                    {/*        options={options}*/}
                    {/*    />*/}
                    {/*    <Stack.Screen*/}
                    {/*        name="Camera"*/}
                    {/*        component={CameraScreen}*/}
                    {/*        options={options}*/}
                    {/*    />*/}
                    {/*</Stack.Navigator>*/}
                </NavigationContainer>
            </SafeAreaProvider>
        );
    } else {
        return null;
    }
}

function RootNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Camera"
                component={BottomNavigator}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    )
}

function BottomNavigator() {
    return (
        <Tab.Navigator initialRouteName="Login">
            <Tab.Screen
                name="sdfasdfsdfsdfsafsdf"
                component={CameraScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({color, size}) =>
                        <FontAwesome name="home" size={size} color={color}/>
                }}
            />
        </Tab.Navigator>
    )
}

