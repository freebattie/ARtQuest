// Native
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// EXPO
import { StatusBar } from 'expo-status-bar';

// Screens
import Login from './Pages/Login';
import Home from './Pages/Home';
import SignUp from './Pages/SignUp';
import CameraScreen from './Pages/Camera';

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Design
import DesignSystem from './components/style/DesignSystem';
import useFont from './components/hooks/useFont';

export default function App() {
    const isFontLoaded = useFont();
    const { COLOR, PRIMARY, STACK_NAV_HEADER } = DesignSystem();
    const Stack = createNativeStackNavigator();
    const options = STACK_NAV_HEADER;

    ////////////////////////////////////////////////////////////////////////
    // Font has to be loaded before the app can be rendered
    if (isFontLoaded) {
        return (
            <SafeAreaProvider>
                <NavigationContainer>
                    <Stack.Navigator screenOptions={options}>
                        <Stack.Screen name="Login" component={Login} />
                        <Stack.Screen
                            name="Home"
                            component={Home}
                            options={options}
                        />
                        <Stack.Screen
                            name="SignUp"
                            component={SignUp}
                            options={options}
                        />
                        <Stack.Screen
                            name="Camera"
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
