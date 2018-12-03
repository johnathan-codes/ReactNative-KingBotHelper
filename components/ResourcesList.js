import React, { Component } from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native';

const CustomFlatList = ({ itemList }) => (
    <View style= {styles.main} >
        <FlatList 
            data={itemList} 
            renderItem={({item}) => 
            <View>
                <Text style={styles.villageHeader}>Village name: {item.data.name}</Text>
                <View style={styles.resourcesView}>
                    <View>
                        <Text>Wood: {parseInt(item.data.storage[1])}</Text>
                        <Text>Clay: {parseInt(item.data.storage[2])}</Text>
                        <Text>Iron: {parseInt(item.data.storage[3])}</Text>
                        <Text>Wheat: {parseInt(item.data.storage[4])}</Text>
                    </View>
                    <View>
                        <Text>Percentage: {((parseInt(item.data.storage[1])/parseInt(item.data.storageCapacity[1]))*100).toFixed(2)}</Text>
                        <Text>Percentage: {((parseInt(item.data.storage[2])/parseInt(item.data.storageCapacity[1]))*100).toFixed(2)}</Text>
                        <Text>Percentage: {((parseInt(item.data.storage[3])/parseInt(item.data.storageCapacity[1]))*100).toFixed(2)}</Text>
                        <Text>Percentage: {((parseInt(item.data.storage[4])/parseInt(item.data.storageCapacity[4]))*100).toFixed(2)}</Text>
                    </View>            
                </View>
                   
                <Text style={{alignSelf: 'center'}} >Warehouse capacity: {parseInt(item.data.storageCapacity[1])}</Text>
                <Text style={{alignSelf: "center"}}>Granary capacity: {parseInt(item.data.storageCapacity[4])}</Text> 
            </View>  
            }
            keyExtractor = {(item, index) => index.toString()}
        />
    </View>
);

const styles = StyleSheet.create({
    main: {
      flex: 1,
      //padding: 30,
    },
    villageHeader: {
      fontSize: 18,
      fontWeight: 'bold',
      alignSelf: 'center'
    },
    resourcesView: {
        alignItems: 'center',
        flexDirection: 'row',
        flex: 1,
        justifyContent:'space-evenly'
    }
  });

  export default CustomFlatList;