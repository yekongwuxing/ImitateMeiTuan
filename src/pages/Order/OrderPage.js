import React,{Component} from 'react';
import {View} from 'react-native';

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
        headerStyle:{backgroundColor:'red'},
    })
    render(){
        return(
            <View style={{flex:1}}></View>
        );
    }

}
export  default OrderPage