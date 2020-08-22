import React, { useState } from 'react';
import { Keyboard, SafeAreaView, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import styles from './Register.stylesheet';
import { AsyncStorage } from "react-native-web";

const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
);

export default function Register({ navigation }) {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    let senhaInput;

    /**
     * Register function
     */
    const register = async (email, senha, callback = null) => {
        try {
            const emailCadastrado = await AsyncStorage.getItem(email, callback);

            if (emailCadastrado) {
                alert('E-mail já existe');
            }

            await AsyncStorage.setItem(email, senha, callback);

            navigation.navigate('Login');
        } catch (e) {
            alert('Erro ao cadastrar');
            throw new Error('Erro ao cadastrar');


        }
    }

    return (
        <DismissKeyboard>
            <SafeAreaView style={styles.background}>
                <View style={styles.containerTop}>
                    <Text style={styles.mainTitle}>Async Storage</Text>
                    <Text style={styles.subTitle}>Crie sua conta grátis</Text>
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
                    onSubmitEditing={() => ''}
                />

                <TouchableOpacity style={styles.submitLogin} activeOpacity={0.8}
                    onPress={() => register(email, senha)}
                >
                    <Text style={styles.submitText}>CRIAR CONTA</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </DismissKeyboard>
    );
}
