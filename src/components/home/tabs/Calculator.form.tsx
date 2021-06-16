import React, { useState } from "react";
import {
    Dimensions,
    Platform,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

// import { Picker } from "@react-native-picker/picker";

import { Ionicons } from "@expo/vector-icons";

export default function DropsCalculator() {
    const [dilution, setDilution] = useState(0.5);
    const [iosPickerOpen, setIosPickerOpen] = useState(false);

    function renderPickerIOS() {
        if (Platform.OS !== "ios") return null;
        return (
            <View style={{ flex: 1 }}>
                {!iosPickerOpen ? (
                    <View style={styles.pickerAreaIos} onTouchEnd={() => setIosPickerOpen(true)}>
                        <TextInput
                            style={[{ flex: 8 }, styles.pickerInputIos]}
                            placeholder="Diluição (ideal entre 0.5 e 3 %)"
                            autoCapitalize="none"
                            allowFontScaling={true}
                            value={`${dilution.toFixed(1)} %`}
                            editable={false}
                        />
                        <TouchableOpacity
                            style={{ flex: 1, alignSelf: "center" }}
                            onPress={() => setIosPickerOpen(true)}
                        >
                            <Ionicons
                                name="caret-down"
                                size={16}
                                color="#777"
                            />
                        </TouchableOpacity>
                    </View>
                ) : null}
                {/* {iosPickerOpen ? (
                    <Picker
                        style={[styles.input, styles.pickerIos]}
                        prompt="Diluição ios (ideal entre 0.5 e 3 %)"
                        mode="dialog"
                        selectedValue={dilution}
                        onValueChange={(value) => {
                            setIosPickerOpen(false);
                            setDilution(value);
                        }}
                    >
                        <Picker.Item value={0.5} label="0.5 %" />
                        <Picker.Item value={1.0} label="1.0 %" />
                        <Picker.Item value={2.0} label="2.0 %" />
                        <Picker.Item value={3.0} label="3.0 %" />
                        <Picker.Item value={4.0} label="4.0 %" />
                        <Picker.Item value={5.0} label="5.0 %" />
                    </Picker>
                ) : null} */}
            </View>
        );
    }

    function renderPickerAndroid() {
        if (Platform.OS === "ios") return null;
        return null;
        // return (
        //     <View style={[{flex: 1}, styles.pickerAndroid]}>
        //         <Picker
        //             style={styles.input}
        //             prompt="Diluição (ideal entre 0.5 e 3 %)"
        //             mode="dialog"
        //             selectedValue={dilution}
        //             onValueChange={(value) => setDilution(value)}
        //         >
        //             <Picker.Item value={0.5} label="0.5 %" />
        //             <Picker.Item value={1.0} label="1.0 %" />
        //             <Picker.Item value={2.0} label="2.0 %" />
        //             <Picker.Item value={3.0} label="3.0 %" />
        //             <Picker.Item value={4.0} label="4.0 %" />
        //             <Picker.Item value={5.0} label="5.0 %" />
        //         </Picker>
        //     </View>
        // );
    }

    return (
        <View style={styles.fields}>
            { !iosPickerOpen ? <TextInput
                style={styles.input}
                placeholder="Volume (ml)"
                autoCapitalize="none"
                allowFontScaling={true}
            /> : null }
            {renderPickerAndroid()}
            {renderPickerIOS()}
        </View>
    );
}

const styles = StyleSheet.create({
    fields: {
        display: "flex",
        flex: 2,
        flexDirection: "column",
        justifyContent: "center",
    },
    input: {
        width: Dimensions.get("screen").width * 0.9,
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: "#aaa",
    },
    pickerAreaIos: {
        flex: 1,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#aaa",
    },
    pickerInputIos: {
        ...Platform.select({
            android: {
                display: "none",
            },
        }),
    },
    pickerIos: {
        ...Platform.select({
            android: {
                display: "none",
            },
        }),
    },
    pickerAndroid: {
        borderBottomWidth: 1,
        borderBottomColor: "#aaa",
        ...Platform.select({
            ios: {
                display: "none",
            },
        }),
    },
});
