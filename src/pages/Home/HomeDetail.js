import React,{Component} from 'react';
import {
    StyleSheet,
    View,
    Text

} from 'react-native';

class HomeDetail extends Component{
    static navigationOptions = ({navigation}:any) => ({
        headerTitle:'详情',
    })
    render() {
        return(
            <Text>详情</Text>
        )
    }
}

const styles = StyleSheet.create({

});

export default HomeDetail