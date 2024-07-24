// Filename: index.js
// Combined code from all files

import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, ActivityIndicator } from 'react-native';

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

export default function App() {
    const [currentLetter, setCurrentLetter] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setCurrentLetter(letters[Math.floor(Math.random() * letters.length)]);
        setLoading(false);
    }, []);

    const handleNextLetter = () => {
        setLoading(true);
        setCurrentLetter(letters[Math.floor(Math.random() * letters.length)]);
        setLoading(false);
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Learn to Read</Text>
            <View style={styles.box}>
                {loading ? (
                    <ActivityIndicator size="large" color="#00ff00" />
                ) : (
                    <Text style={styles.letter}>{currentLetter}</Text>
                )}
            </View>
            <TouchableOpacity style={styles.button} onPress={handleNextLetter}>
                <Text style={styles.buttonText}>Next Letter</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        alignItems: 'center',
        backgroundColor: '#f0f8ff',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    box: {
        backgroundColor: '#FFD700',
        padding: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    letter: {
        fontSize: 100,
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: '#4682B4',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
    },
});