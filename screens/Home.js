import React from "react";

import { SafeAreaView, Text, TouchableWithoutFeedback } from "react-native"

const Home = ({ navigation }) => {
    return (
        <SafeAreaView>
            <TouchableWithoutFeedback onPress={() => {
                navigation.navigate("Login")
            }}>
                <Text>Sign Out</Text>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    )
}

export default Home;