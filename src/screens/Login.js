import React, {useState} from 'react';
import {Keyboard, SafeAreaView, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View} from 'react-native';
import styles from '../styles/Login.stylesheet';
import {AsyncStorage} from "react-native-web";

const DismissKeyboard = ({children}) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
);

export default function Login({navigation}) {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    let senhaInput;

    /**
     * Login function
     */
    const login = async () => {
        try {
            await AsyncStorage.getItem(email, (err, result) => {
                if (result !== senha) {
                    alert("E-mail e senha não condizem");
                } else {
                    navigation.navigate("Home");
                }
            });
        } catch (e) {
            throw new Error("Erro ao logar: " + e);
        }
    };

    return (
        <DismissKeyboard>
            <SafeAreaView style={styles.background}>
                <View style={styles.container}>
                    <Text style={styles.mainTitle}>Async Storage</Text>

                    <Text style={styles.subTitle}>Hybrid Mobile App Development</Text>
                </View>

                <TextInput
                    style={styles.input}
                    placeholder="Digite seu e-mail..."
                    autoCorrect={false}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    returnKeyType="next"
                    onChangeText={(email) => setEmail(email)}
                    defaultValue={email}
                    onSubmitEditing={() => senhaInput.focus()}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Digite sua senha..."
                    autoCorrect={false}
                    autoCapitalize="none"
                    returnKeyType="go"
                    secureTextEntry
                    onChangeText={(senha) => setSenha(senha)}
                    defaultValue={senha}
                    ref={(input) => (senhaInput = input)}
                    onSubmitEditing={() => login()}
                />

                <TouchableOpacity
                    style={styles.submit}
                    activeOpacity={0.8}
                    onPress={login}>
                    <Text style={styles.submitText}>ENTRAR</Text>
                </TouchableOpacity>

                <View style={styles.bottom}>
                    <TouchableOpacity style={styles.submit} activeOpacity={0.8} onPress={() => navigation.push("Register")}>
                        <Text style={{color: '#DE3232', fontSize: 24}}>criar minha conta</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </DismissKeyboard>
    );
};
