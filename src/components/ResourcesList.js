import React, { Component } from 'react';
import { FlatList, View, Text } from 'react-native';
import StylesJS from './src/features/styles';

const CustomFlatList = ({ itemList }) => (
    <View style= {StylesJS.mainFlatList} >
        <FlatList 
            data={itemList} 
            renderItem={({item}) => 
            <View style= {{paddingBottom: 20}}>
                <Text style={StylesJS.villageHeader}>Village name: {item.data.name}</Text>
                <View style={StylesJS.resourcesView}>
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
export default CustomFlatList;