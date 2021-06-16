import React from "react";
import {
    StyleSheet,
    TextInput,
    View,
    Text,
    TouchableOpacity,
    Dimensions,
} from "react-native";

export default function LoginForm(props: any) {

    return (
        <View style={styles.container}>
            <View style={styles.fields}>
                <View style={styles.filler}></View>
                <TextInput
                    style={styles.input}
                    placeholder="Nome de usuário"
                    autoCapitalize="none"
                    allowFontScaling={true}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    secureTextEntry={true}
                    allowFontScaling={true}
                />
                <TouchableOpacity
                    style={styles.forgetPasswordLink}
                    onPress={() => alert("new")}
                >
                    <Text style={styles.accountActionText}>
                        Esqueci a senha
                    </Text>
                </TouchableOpacity>
                <View style={styles.filler}></View>
            </View>

            <View style={styles.actions}>
                <TouchableOpacity
                    onPress={() => props.navigation.navigate("Home")}
                    style={styles.btnLogin}
                >
                    <Text style={styles.btnLoginText}>Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => alert("Signup")}
                    style={styles.createAccountLink}
                >
                    <Text style={styles.accountActionText}>
                        Criar minha conta
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: "5%",
        paddingRight: "5%",
        display: "flex",
        flex: 10,
        flexDirection: "column",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: "#aaa",
        width: Dimensions.get("screen").width * 0.9,
        flex: 1.5,
    },
    filler: {
        flex: 1,
    },
    fields: {
        display: "flex",
        flex: 5,
        flexDirection: "column",
        justifyContent: "center",
    },
    actions: {
        flex: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
    },
    accountActionText: {
        color: "#00A6FF",
    },
    forgetPasswordLink: {
        flex: 1,
        marginTop: 5,
    },
    createAccountLink: {
        flex: 1,
        marginTop: 5,
    },
    btnLogin: {
        borderRadius: 3,
        backgroundColor: "#42B0BF",
        width: Dimensions.get("window").width * 0.9,
        height: Dimensions.get("screen").height * 0.08,
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
    },
    btnLoginText: {
        color: "#FFFFFF",
        fontSize: 16,
    },
});
