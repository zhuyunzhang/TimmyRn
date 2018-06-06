import React, {Component} from 'react';
import {
    Text,
    View,
    Button,
} from 'react-native';

export  default class WeatherTabPage extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>天气!</Text>
            </View>
        );
    }
}