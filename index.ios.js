/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, TextInput, Button, Alert} from 'react-native';
import Header from './src/components/header';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {text: '', loginSuccess: false};
    }

    _handlePress() {
        return (
            this.setState({loginSuccess: true})
        );
    }

    render() {
        if (this.state.loginSuccess) {
            return (
                <Header />
            );
        }
        else {
            return (
                <View style={styles.container}>
                    <Text>歡迎來到選課系統, {this.state.text}</Text>
                    <Text></Text>
                    <Text></Text>
                    <TextInput
                        style={{height: 40, margin: 20}}
                        placeholder="請輸入學號"
                        onChangeText={(text) => this.setState({text})}
                    />
                    <Button onPress={() => this._handlePress()} title="登入" color="#841584" accessibilityLabel="登入"/>
                </View>
            );
        }
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});


AppRegistry.registerComponent('theotherway', () => App);
