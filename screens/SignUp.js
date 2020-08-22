import React, { useState } from 'react';
import { Keyboard, SafeAreaView, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import styles from './SignUp.stylesheet';
const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
);
export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let passwordInput;

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
                    onSubmitEditing={() => passwordInput.focus()}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Digite sua senha..."
                    autoCorrect={false}
                    autoCapitalize="none"
                    returnKeyType="go"
                    secureTextEntry
                    onChangeText={(password) => setPassword(password)}
                    defaultValue={password}
                    ref={(input) => (passwordInput = input)}
                    onSubmitEditing={() => ''}
                />
                <TouchableOpacity style={styles.submitLogin} activeOpacity={0.8}>
                    <Text style={styles.submitText}>CRIAR CONTA</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </DismissKeyboard>
    );
}
