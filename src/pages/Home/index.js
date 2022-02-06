import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { Entypo } from '@expo/vector-icons'; 



export default function App() {
    return (
        <View style={styles.container}>
            <ImageBackground source={require("../../../assets/logo.png")} resizeMode="contain" style={styles.image} />
            <Text style={{fontSize: 24, color: "#B24BF3"}}>Inicie aqui</Text>
            <Entypo name="arrow-down" size={48} color="#B24BF3" />
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        flex: 1,
        justifyContent: "center",
        width: '100%'
    },
    text: {
        color: "white",
        fontSize: 42,
        lineHeight: 84,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000c0"
    }
});