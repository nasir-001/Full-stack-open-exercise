import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
    },
    text: {
        color: '#DDDDDD',
        fontSize: 15,
        fontWeight: 'bold',
    },
});

const AppBarTab = ({ text, path, cb }) => {
    <View style={styles.container}>
        <TouchableOpacity>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    </View>
}

export default AppBarTab;