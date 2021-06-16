import { StatusBar } from "expo-status-bar";
import React from "react";
import { Dimensions, Image, Platform, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import logo from "../../../assets/icon.png";

export default function Header() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="light" backgroundColor="#000" />
            <Text style={styles.title}>Calculadora IMC</Text>
            <Image source={logo} style={styles.logo} />
        </SafeAreaView>
    );
}

const STATUSBAR_DEFAULT_HEIGHT = 20;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ffffff",
        shadowColor: "#aaa",
        shadowOpacity: 0.8,
        shadowRadius: 1,
        shadowOffset: {
            height: 1,
            width: 1,
        },
        elevation: 2,

        paddingTop:
            Platform.OS === "ios"
                ? Dimensions.get("screen").width * 0.05
                : Dimensions.get("screen").width * 0.1,
        paddingBottom: Dimensions.get("screen").width * 0.1,

        display: "flex",
        flexDirection: "row",
        flex: 1,
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#aaa",
        borderTopWidth: Platform.OS === "ios" ? STATUSBAR_DEFAULT_HEIGHT : 0,
        borderTopColor: "#000000",
    },
    title: {
        marginLeft: Dimensions.get("screen").width * 0.05,
        fontSize: Dimensions.get("window").width * 0.07,
        height: Dimensions.get("screen").width * 0.1,
        flex: 5,
        color: "#000",
    },
    logo: {
        flex: 1,
        resizeMode: "contain",
        height: Dimensions.get("screen").height * 0.06,
        width: Dimensions.get("screen").height * 0.06,
    },
});
