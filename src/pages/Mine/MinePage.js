import React,{Component} from 'react';
import {View} from 'react-native';

export  default class MinePage extends Component{
    static navigationOptions = ({navigation}:any) => ({
        headerTitle:'我的页面'
    })
    render(){
        return(
            <View style={{flex:1}}></View>
        );
    }

}