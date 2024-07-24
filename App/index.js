// Filename: index.js
// Combined code from all files

import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Button, ScrollView } from 'react-native';

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

export default function App() {
    const [currentLetterIndex, setCurrentLetterIndex] = useState(0);

    const nextLetter = () => {
        setCurrentLetterIndex((prevIndex) => (prevIndex + 1) % letters.length);
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <View style={styles.letterContainer}>
                    <Text style={styles.letter}>{letters[currentLetterIndex]}</Text>
                </View>
                <Button 
                    title="Next Letter" 
                    onPress={nextLetter} 
                    style={styles.button}
                />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    },
    scrollView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    letterContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 300,
        width: 300,
        margin: 20,
        borderWidth: 2,
        borderColor: '#000',
        borderRadius: 10,
    },
    letter: {
        fontSize: 100,
        fontWeight: 'bold',
    },
    button: {
        marginTop: 20,
    },
});