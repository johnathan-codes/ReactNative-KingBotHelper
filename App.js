import React, { Component } from 'react';
import {
    Alert,
    TextInput,
    View,
    TouchableHighlight,
    Text,
    AsyncStorage,
    Console
} from 'react-native';
import StylesJS from './src/features/styles.js';
import ServerList from './src/components/ServerList.js';

// dont store it here ! this is a bad practice, cause this data is unreachable for other components
// just keep them in the async storage, so every component is able to get the data out of there :)
//var urlsArray = [];

export default class App extends React.Component {
    constructor(props) {
        super(props);
        //no need for this because of the arrow function
        //this.handleChange = this.handleChange.bind(this);
        this.state = {
            serverURL: ''
        };
    }

    _storeData = async () => {
        let key = await AsyncStorage.getItem('@UrlsArray');
        // you can put objects into an if !! they are false if they are undefined or null
        if (!key) {
            await AsyncStorage.setItem('@UrlsArray', JSON.stringify([this.state.serverURL])); //store new array
            return;
        }
        var urlsArray = JSON.parse(key);

        urlsArray.push(this.state.serverURL);
        await AsyncStorage.setItem('@UrlsArray', JSON.stringify(urlsArray)); //store new array

        Alert.alert('Saved');
    };

    _retrieveData = async () => {
        let urlsArray = await AsyncStorage.getItem('@UrlsArray');

        if (!urlsArray) {
            Alert.alert('There are no saved urls.');
            return;
        }
        
        Alert.alert(urlsArray);
    };

    _clearData = async () => {
        await AsyncStorage.clear();
        Alert.alert("URLs deleted.");
    }

    handleChange = url => {
        this.setState({
            serverURL: url.nativeEvent.text
        });
    };

    render() {
        return (
            <View style={StylesJS.main}>
                <Text style={StylesJS.header}>Api bot helper</Text>
                <TextInput style={StylesJS.searchInput} placeholder="http://" onChange={this.handleChange}/>

                <TouchableHighlight style={StylesJS.button} onPress={this._storeData}>
                    <Text style={StylesJS.buttonText}>Add URL</Text>
                </TouchableHighlight>
                
                <TouchableHighlight style={StylesJS.button} onPress={this._retrieveData} >
                    <Text style={StylesJS.buttonText}>Retrieve URL list</Text>
                </TouchableHighlight>
            
                <TouchableHighlight style={StylesJS.button} onPress={this._clearData}>
                    <Text style={StylesJS.buttonText}>Clear saved URLs</Text>
                </TouchableHighlight>

                <ServerList itemList= {this.state.urlsArray}/>
            </View>
        );
    }
}