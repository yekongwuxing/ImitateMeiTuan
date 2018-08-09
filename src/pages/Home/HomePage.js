import React,{Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
    TextInput,
    Image,
    TouchableOpacity

} from 'react-native';
import Color from "../../widget/Color";
import NavigationItem from "../../widget/NavigationItem";
import screen from '../../common/screen';

type Props = {
    navigation:any
}

class HomePage extends Component<Props>{
    static navigationOptions = ({navigation}: any) => ({
        headerTitle: (
            <TouchableOpacity style={styles.searchBar}>
                <Image source={require('../../images/home/search_icon.png')} style={styles.searchIcon} />
                <Text>一点点</Text>
            </TouchableOpacity>
        ),
        headerRight: (
            <NavigationItem
                icon={require('../../images/mine/icon_navigation_item_message_white.png')}
                onPress={() => {

                }}
            />
        ),
        headerLeft: (
            <NavigationItem
                title='福州'
                titleStyle={{color: 'white'}}
                onPress={() => {

                }}
            />
        ),
        headerStyle: {backgroundColor: Color.primary},
    })
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
    },
    searchBar:{
        height:30,
        width:screen.width * 0.7,
        borderRadius:20,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff',
    },
    searchIcon:{
        width:20,
        height:20,
        margin:5
    }

})
export default HomePage