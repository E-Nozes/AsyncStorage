import React, {useState} from 'react';
import {Keyboard, SafeAreaView, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View} from 'react-native';
import styles from './styles';

const DismissKeyboard = ({children}) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
);

export default function App() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    /**
     * Login function
     */
    login = async () => {
        // TODO
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
                    style={styles.submitLogin}
                    activeOpacity={0.8}
                    onPress={login}>
                    <Text style={styles.submitText}>ENTRAR</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </DismissKeyboard>
    );
}
