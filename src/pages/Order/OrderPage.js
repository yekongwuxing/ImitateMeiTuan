import React,{Component} from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import RefreshListView, {RefreshState} from 'react-native-refresh-list-view'
import api from "../../api";
import RenderItem from '../../widget/RenderItem';
import OrderMenuItem from './OrderMenuItem';
import SpacingView from "../../widget/SpacingView";
import GroupItem from '../../widget/GroupItem';

type Props = {
    navigation: any,
}

type State = {
    data: Array<Object>,
    refreshState: number,
}

 class OrderPage extends Component<Props,State>{

    static navigationOptions = ({navigation}:any) => ({
        headerTitle:'订单',
        headerStyle:{backgroundColor:'white'},
    })

     // 构造
       constructor(props) {
         super(props);
         // 初始状态
         this.state = {
             data:[],
             refreshState:RefreshState.Idle
         };
       }

     componentDidMount() {
        this.requestData()
     }
     requestData = () => {
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
                 dataList.sort(() => {return 0.5 - Math.random()})
                 this.setState({
                     data: dataList,
                     refreshState:RefreshState.NoMoreData
                 })

             })
             .catch((error) => {
                 this.setState({refreshState: RefreshState.Failure})

             });
     }
     renderItem = ({item}) => {
        return(
            <RenderItem info={item} onPress={() => {
                this.props.navigation.navigate('HomeDetail',{info:item})
            }} />
        )
     }
     renderHeader = () => {
        return(
            <View style={styles.container}>
                <View>
                    <GroupItem title='我的订单' subtitle='全部订单' />
                </View>
                <View style={styles.itemContainer}>
                    <OrderMenuItem title='待付款' icon={require('../../images/order/order_tab_need_pay.png')}/>
                    <OrderMenuItem title='待使用' icon={require('../../images/order/order_tab_need_use.png')}/>
                    <OrderMenuItem title='待评价' icon={require('../../images/order/order_tab_need_review.png')}/>
                    <OrderMenuItem title='退款/售后' icon={require('../../images/order/order_tab_needoffer_aftersale.png')}/>
                </View>
                <SpacingView />
                <View>
                    <GroupItem title='我的收藏' subtitle='查看全部' />

                </View>
            </View>
        )

     }
    render(){
        return(
            <RefreshListView data={this.state.data}
                             renderItem={this.renderItem}
                             keyExtractor={(item,index) => index}
                             refreshState={this.state.refreshState}
                             onHeaderRefresh={this.requestData}
                             ListHeaderComponent={this.renderHeader}

            />
        );
    }

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    },
    itemContainer:{
        flexDirection:'row',

    }

});
export  default OrderPage