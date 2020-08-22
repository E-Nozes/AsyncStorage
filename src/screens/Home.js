import React from "react";
import {SafeAreaView, Text, TouchableWithoutFeedback} from "react-native";
import styles from '../styles/Home.stylesheet';

export default function Home({navigation}) {
    return (
        <SafeAreaView style={styles.background}>
            <TouchableWithoutFeedback onPress={() => {
                navigation.navigate("Login")
            }}>
                <Text>Sair</Text>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    )
};
