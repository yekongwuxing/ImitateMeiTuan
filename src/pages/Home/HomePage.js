import React,{Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
    FlatList

} from 'react-native';
import Color from "../../widget/Color";
import NavigationItem from "../../widget/NavigationItem";
import screen from '../../common/screen';
import api from '../../api';

import RenderItem from './RenderItem';

type Props = {
    navigation:any
}

type State = {
    discounts:Array<Object>,
    dataList:Array<Object>,
    refreshing:boolean

}
class HomePage extends Component<Props,State>{
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
    constructor(props: Props) {
        super(props)

        this.state = {
            discounts: [],
            dataList: [],
            refreshing: false,
        }
    }

    componentDidMount() {
        this.requestData()
    }

    requestData = () => {
        this.setState({refreshing: true})

        this.requestDiscount()
        this.requestRecommend()
    }

    requestRecommend = () => {
        fetch(api.recommend)
            .then((response) => response.json())
            .then((jsonData) => {
                let dataList = jsonData.data.map(
                    (info) => {
                        return {
                            id: info.id,
                            imageUrl: info.squareimgurl,
                            title: info.mname,
                            subtitle: `[${info.range}]${info.title}`,
                            price: info.price
                        }
                    }
                )
                this.setState({
                    dataList: dataList,
                    refreshing: false,
                })

            })
            .catch((event) => {
                this.setState({refreshing: false})

            });
    }
    requestDiscount = () => {
        fetch(api.discount)
            .then((response) => response.json())
            .then((jsonData) => {
                this.setState({
                    discounts:jsonData.data
                })
            })
            .catch((error) => {
                alert(error)
            })
    }
    renderCell = ({item}) => {
        return (
            <RenderItem info={item} />
        );
    }

    onCellSelected = (info: Object) => {
        StatusBar.setBarStyle('default', false)
    }

    keyExtractor = (item: Object, index: number) => {
        return item.id
    }


    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.dataList}
                    renderItem={this.renderCell}
                    keyExtractor={this.keyExtractor}
                    onRefresh={this.requestData}
                    refreshing={this.state.refreshing}
                />
            </View>
        )
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
    },
    item:{
        padding:10

    },
    itemTitle:{
        fontSize:18,
        fontWeight:'bold'
    },
    itemYear:{
        fontSize:16
    }

})
export default HomePage