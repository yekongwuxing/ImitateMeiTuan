import React,{Component} from 'react';
import {
    View,
    TouchableOpacity,
    Image,
    Text,
    StyleSheet
} from 'react-native';

import NavigationItem from '../../widget/NavigationItem';
import Color from "../../widget/Color";
import screen from "../../common/screen";
import {Paragraph} from "../../widget/Text";

export  default class NearbyPage extends Component{
    static navigationOptions = ({navigation}:any) => ({
        headerLeft:(
            <TouchableOpacity style={styles.leftContainer}>
                <Image source={require('../../images/public/icon_food_merchant_address.png')}
                       style={{width:13,height:16,margin:5}}
                />
                <Text style={{fontSize:17,color:'#333333'}}>福州 鼓楼</Text>
            </TouchableOpacity>

        ),
        headerRight:(
            <TouchableOpacity style={styles.searchBar}>
                <Image source={require('../../images/home/search_icon.png')}
                       style={styles.searchIcon}
                />
                <Paragraph>找附近吃喝玩乐</Paragraph>

            </TouchableOpacity>
        ),
        headerStyle: {backgroundColor: 'white'},

    })
    render(){
        return(
            <View style={{flex:1}}></View>
        );
    }

}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Color.paper
    },
    leftContainer:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        padding:10

    },
    searchBar:{
        width:screen.width * 0.65,
        height:30,
        borderRadius:20,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#eeeeee',
        marginRight:20
    },
    searchIcon:{
        width:20,
        height:20,
        margin:5
    }
})