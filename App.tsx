import React from "react";

import { StyleSheet, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";

import Header from "./src/components/shared/Header.component";
import Login from "./src/components/login/Login.page";
import Home from "./src/components/home/Home.page";
import PersonContextProvider from "./src/contexts/Person.context";

export default function App() {
    const Stack = createStackNavigator();

    return (
        <SafeAreaProvider>
            <View style={styles.container}>
                <PersonContextProvider>
                    <NavigationContainer>
                        <Stack.Navigator
                            initialRouteName="Login"
                            headerMode="screen"
                            screenOptions={{
                                header: (props) => <Header />,
                            }}
                        >
                            <Stack.Screen name="Login" component={Login} />
                            <Stack.Screen
                                name="Home"
                                component={Home}
                                options={{
                                    header: (props) => (
                                        <Header
                                            title="Calculadora IMC"
                                            canReturn={true}
                                            navigation={props.navigation}
                                        />
                                    ),
                                }}
                            />
                        </Stack.Navigator>
                    </NavigationContainer>
                </PersonContextProvider>
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
});
