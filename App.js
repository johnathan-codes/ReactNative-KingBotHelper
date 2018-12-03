import React, {Component} from 'react';
import {Alert, TextInput, View, TouchableHighlight, FlatList, Text, StyleSheet} from 'react-native';
import { getVillageInfo } from './features/FetchResources';

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
    getVillageInfo(URL).then((res) => {this.setState({dataSource: res})});
  }

  render() {
    return(
      <View style={styles.main}>
        <Text style={styles.header}>Api bot helper</Text>
        <TextInput style={styles.searchInput} placeholder="http://" onChange={this.handleChange}/>
        <TouchableHighlight style={styles.button}  onPress={this.getResources}>
          <Text style={styles.buttonText}>Get resources</Text>
        </TouchableHighlight>

            <FlatList 
              data={this.state.dataSource} 
              renderItem={({item}) => 
              <View>
                <Text style={{fontWeight: 'bold'}}>Village name: {item.data.name}</Text>
                <View style={{alignItems: 'center', flexDirection: 'column', flex: 1 }}>
                    <Text>Wood: {parseInt(item.data.storage[1])}</Text>
                    <Text>Clay: {parseInt(item.data.storage[2])}</Text>
                    <Text>Iron: {parseInt(item.data.storage[3])}</Text>
                    <Text>Wheat: {parseInt(item.data.storage[4])}</Text>
                    <Text>Warehouse capacity: {parseInt(item.data.storageCapacity[1])}</Text>
                    <Text>Granary capacity: {parseInt(item.data.storageCapacity[4])}</Text>                
                  </View>
              </View>} 
            />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 30,
    flexDirection: 'column',
    backgroundColor: '#2a8ab7'
  },
  header:{
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center',
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center'
  },
  searchInput: {
    height: 50,
    padding: 4,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: 'white'
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center'
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor:'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});