import React,{Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
    FlatList,
    StatusBar

} from 'react-native';
import Color from "../../widget/Color";
import NavigationItem from "../../widget/NavigationItem";
import screen from '../../common/screen';
import api from '../../api';

import RenderItem from './RenderItem';
import HomeMenuView from './HomeMenuView';
import {Heading3} from "../../widget/Text";
import SpacingView from './SpacingView';
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
            .catch((error) => {
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
            <RenderItem info={item} onPress={this.onCellSelected}/>
        );
    }

    onCellSelected = ({item}) => {
        StatusBar.setBarStyle('default', false)
        this.props.navigation.navigate('HomeDetail',{info:item})
    }

    keyExtractor = (item: Object, index: number) => {
        return item.id
    }
    renderHeader = () => {
        return(
            <View>
                <HomeMenuView menuInfo={api.menuInfo} onMenuSelected={this.onMenuSelected}/>
                <SpacingView />
                <View style={styles.recommendHeader}>
                    <Heading3>猜你喜欢</Heading3>
                </View>
            </View>
        )

    }
    onMenuSelected = (index) => {
        alert(index)
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
                    ListHeaderComponent={this.renderHeader}

                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Color.paper
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
    },
    recommendHeader:{
        height:35,
        justifyContent:'center',
        borderWidth:screen.onePixel,
        borderColor:Color.border,
        paddingVertical:8,
        paddingLeft:20,
        backgroundColor:'white'
    }

})
export default HomePage