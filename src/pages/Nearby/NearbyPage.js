import React,{Component} from 'react';
import {
    View,
    TouchableOpacity,
    Image,
    Text,
    StyleSheet
} from 'react-native';

type Props = {
    navigation: any,
}

import Color from "../../widget/Color";
import screen from "../../common/screen";
import {Paragraph} from "../../widget/Text";
import ScrollableTabView,{DefaultTabBar,ScrollableTabBar} from 'react-native-scrollable-tab-view'
import NearListScene from './NearListScene';

export  default class NearbyPage extends Component<Props>{
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
        let titles = ['享美食','住酒店','爱玩乐','全部']
        let types = [
            ['热门', '面包甜点', '小吃快餐', '川菜', '日本料理', '韩国料理', '台湾菜', '东北菜'],
            ['热门', '商务出行', '公寓民宿', '情侣专享', '高星特惠'],
            ['热门', 'KTV', '足疗按摩', '洗浴汗蒸',  '电影院', '美发', '美甲'],
            []
        ]
        return(
            <ScrollableTabView style={styles.container}
                               renderTabBar={() => <DefaultTabBar />}
                               tabBarUnderlineStyle={styles.tabBarUnderline}
                               tabBarActiveTextColor='#fe566d'
                               tabBarInactiveTextColor='#555555'
                               tabBarBackgroundColor='white'
            >
                {titles.map((title,i) => (
                    <NearListScene tabLabel={titles[i]}
                                   key={i}
                                   types={types[i]}
                                   navigation={this.props.navigation}
                    />
                ))}
            </ScrollableTabView>
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
    },
    tabBarUnderline:{
        backgroundColor:'#fe566d',
        width:screen.width/4,
        height:screen.onePixel

    },
    textStyle: {
        flex: 1,
        fontSize:20,
        textAlign:'center',
    }
})