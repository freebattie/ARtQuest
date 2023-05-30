// Dependencies
// https://reactnavigation.org/docs/stack-navigator/
// https://reactnavigation.org/docs/navigation-container/
// https://reactnavigation.org/docs/bottom-tab-navigator/
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


// Screens Components
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import QuestScreen from "../screens/QuestScreen";


export default function Navigation() {
    return (
        <NavigationContainer>
            <RootNavigator />
        </NavigationContainer>
    )
}

// Creating a Stack to populate the screens
// Keeping the screens in a Stack Navigator to allow for navigation between screens
const Stack = createNativeStackNavigator();
const InitialScreenAtLaunch = "Login";

function RootNavigator() {
    return (
        <Stack.Navigator initialRouteName={InitialScreenAtLaunch} >
            <Stack.Screen
                name="Login"
                component={LoginScreen}
            />
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    headerLeft: () => (
                        <></>
                    ),
                    headerTitle: "Onboarding screen"
                }}
            />
            <Stack.Screen
                name="Quest"
                component={QuestScreen}
            />
        </Stack.Navigator>
    )
}


const BottomTab = createBottomTabNavigator();
const InitialTabAtLaunch = "Home";
function BottomTabNavigator() {
    return (
        <BottomTab.Navigator initialRouteName={InitialTabAtLaunch} >
            <BottomTab.Screen
                name="Home"
                component={HomeScreen}
            />
        </BottomTab.Navigator>
    )
}