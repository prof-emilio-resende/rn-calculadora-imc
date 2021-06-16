import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Calculator from "./tabs/Calculator.page";

function One() {
    return (<View style={styles.container}><Text>One...</Text></View>);
}

function Profile() {
    return (<View style={styles.container}>
        <Text>This is the home!</Text>
    </View>);
}

export default function Home(props: any) {
    const Tab = createBottomTabNavigator();
    
    return (
        <Tab.Navigator initialRouteName="Calculator">
            <Tab.Screen  
                name="One"
                component={One}
                options={{
                    tabBarLabel: "One",
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            <Ionicons
                                name="md-apps"
                                size={24}
                                color="#00AEDB"
                            />
                        ) : (
                            <Ionicons
                                name="md-apps"
                                size={24}
                                color="#8A8A8A"
                            />
                        ),
                }}
            />
            <Tab.Screen
                name="Calculator"
                component={Calculator}
                options={{
                    tabBarLabel: "Calculadora",
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            <Ionicons
                                name="md-calculator-outline"
                                size={24}
                                color="#00AEDB"
                            />
                        ) : (
                            <Ionicons
                                name="md-calculator-outline"
                                size={24}
                                color="#8A8A8A"
                            />
                        ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarLabel: "Perfil",
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            <Ionicons
                                name="person-circle-outline"
                                size={24}
                                color="#00AEDB"
                            />
                        ) : (
                            <Ionicons
                                name="person-circle-outline"
                                size={24}
                                color="#8A8A8A"
                            />
                        ),
                }}
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
