import React,{Component} from 'react';
import {View} from 'react-native';

export  default class NearbyPage extends Component{
    static navigationOptions = ({navigation}:any) => ({
        headerTitle:'附近'
    })
    render(){
        return(
            <View style={{flex:1}}></View>
        );
    }

}