import React from "react";

import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";

import Header from "./src/components/shared/Header.component";

function Home() {
    return (
        <View style={styles.innerContainer}>
            <Text>This is the home!</Text>
        </View>
    );
}

function Login() {
    return (
        <View style={styles.innerContainer}>
            <Text>This is the login form!</Text>
        </View>
    );
}

export default function App() {
    const Stack = createStackNavigator();

    return (
        <SafeAreaProvider>
            <View style={styles.container}>
                <NavigationContainer>
                    <Stack.Navigator
                        initialRouteName="Login"
                        headerMode="screen"
                        screenOptions={{
                          header: (props) => <Header />
                        }}
                    >
                        <Stack.Screen name="Login" component={Login} />
                        <Stack.Screen name="Home" component={Home} />
                    </Stack.Navigator>
                </NavigationContainer>
            </View>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        flex: 1,
    },
    innerContainer: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
