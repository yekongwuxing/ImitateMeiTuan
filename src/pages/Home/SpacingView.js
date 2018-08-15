import React,{Component} from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import Color from '../../widget/Color';

export default class SpacingView extends Component{
    render() {
        return(
            <View style={styles.container}></View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        height:14,
        backgroundColor:Color.paper
    }

});