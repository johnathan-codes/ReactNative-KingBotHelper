import React, { Component } from 'react';
import { FlatList, View, Text } from 'react-native';
import StylesJS from '../features/styles';

const ServerList = ({ itemList }) => (
    <View style= {StylesJS.mainFlatList} >
        <FlatList 
            data={itemList} 
            renderItem={({item}) => 
                <View style= {{paddingBottom: 20}}>
                    <Text style={StylesJS.villageHeader}>URL: {item.key}</Text>
                </View> 
            }
            keyExtractor = {(item, index) => index.toString()}
        />
    </View>
);
export default ServerList;
