import React,{Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
    TextInput,
    Image

} from 'react-native';
import Color from "../../widget/Color";

type Props = {
    navigation:any
}

export  default class HomePage extends Component<Props>{
    // 构造
      constructor(props:Props) {
        super(props);
        // 初始状态
        this.state = {
            discount:[],
            dataList:[],
            refreshing:false
        };
      }

    render(){
        return(
            <View style={styles.container}>

            </View>
        );
    }

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Color.page
    }

});