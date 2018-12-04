import React, {Component} from 'react';
import { TextInput, View, TouchableHighlight, Text} from 'react-native';
import CustomFlatList  from './src/components/ResourcesList.js';
import StylesJS from './src/features/styles.js';

export default class App extends React.Component{
    constructor(props){
        super(props);
        
        this.handleChange = this.handleChange.bind(this);
        this.getResources = this.getResources.bind(this);

        this.state = {
            serverURL: '',
        }
    }

    handleChange(url){
        this.setState({
            serverURL: url.nativeEvent.text
        });
    }

    getResources(){
        let URL = `http://${this.state.serverURL}/api/data?ident=villages`;
        return fetch (URL)
            .then((data) => data.json())
                .then((res) => {this.setState({dataSource: res})});
    }

    render() {
        return(
            <View style={StylesJS.main}>
                <Text style={StylesJS.header}>Api bot helper</Text>
                <TextInput style={StylesJS.searchInput} placeholder="http://" onChange={this.handleChange}/>
                <TouchableHighlight style={StylesJS.button}  onPress={this.getResources}>
                    <Text style={StylesJS.buttonText}>Get resources</Text>
                </TouchableHighlight>

                <CustomFlatList itemList= {this.state.dataSource}/>
            </View>
        )
    }
}