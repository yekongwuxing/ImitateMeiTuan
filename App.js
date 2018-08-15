/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
    createStackNavigator,
    createBottomTabNavigator

} from 'react-navigation';

import HomePage from './src/pages/Home/HomePage';
import NearbyPage from './src/pages/Nearby/NearbyPage';
import OrderPage from './src/pages/Order/OrderPage';
import MinePage from './src/pages/Mine/MinePage';
import TabBarItem from './src/widget/TabBarItem';
import HomeDetail from './src/pages/Home/HomeDetail';

import Color from './src/widget/Color';

const HomePageStack = createStackNavigator({
    HomePage:{
        screen:HomePage
    },
});

const NearbyPageStack = createStackNavigator({
    NearbyPage:{
        screen:NearbyPage
    }
});

const OrderPageStack = createStackNavigator({
    OrderPage:{
        screen:OrderPage
    }
});

const MinePageStack = createStackNavigator({
    MinePage:{
        screen:MinePage
    }
});

const TabBar = createBottomTabNavigator({
    HomePage:{
        screen:HomePageStack,
        navigationOptions:({navigation}) => ({
          tabBarLabel:'团购',
            tabBarIcon:({focused,tintColor}) => (
                <TabBarItem tintColor={tintColor}
                            focused={focused}
                            normalImage={require('./src/images/tabbar/tabbar_homepage.png')}
                            selectedImage={require('./src/images/tabbar/tabbar_homepage_selected.png')}
                />

            )
        })
    },
    NearbyPage:{
        screen:NearbyPageStack,
        navigationOptions:({navigation}) => ({
            tabBarLabel:'附近',
            tabBarIcon:({focused,tintColor}) => (
                <TabBarItem tintColor={tintColor}
                            focused={focused}
                            normalImage={require('./src/images/tabbar/tabbar_merchant.png')}
                            selectedImage={require('./src/images/tabbar/tabbar_merchant_selected.png')}
                />

            )
        })
    },
    OrderPage:{
        screen:OrderPageStack,
        navigationOptions:({navigation}) => ({
            tabBarLabel:'订单',
            tabBarIcon:({focused,tintColor}) => (
                <TabBarItem tintColor={tintColor}
                            focused={focused}
                            normalImage={require('./src/images/tabbar/tabbar_order.png')}
                            selectedImage={require('./src/images/tabbar/tabbar_order_selected.png')}
                />

            )
        })
    },
    MinePage:{
        screen:MinePageStack,
        navigationOptions:({navigation}) => ({
            tabBarLabel:'我的',
            tabBarIcon:({focused,tintColor}) => (
                <TabBarItem tintColor={tintColor}
                            focused={focused}
                            normalImage={require('./src/images/tabbar/tabbar_mine.png')}
                            selectedImage={require('./src/images/tabbar/tabbar_mine_selected.png')}
                />

            )
        })
    }
},{
    lazy:true,
    animationEnabled:false,
    tabBarOptions:{
        activeTintColor:Color.primary,
        inactiveTintColor:Color.gray,
        style:{backgroundColor:'#fff'}
    }
});

TabBar.navigationOptions = {
    // 从堆栈Navigator隐藏标题
    header:null
};

const AppNavigator = createStackNavigator({
    TabBar:{
        screen:TabBar
    },
    HomeDetail:{
        screen:HomeDetail
    }

},{
    navigationOptions: {
        headerBackTitle: null,
        headerTintColor: '#333333',
        showIcon: true,
    },

});

export default class  App extends Component{
    render(){
        return<AppNavigator />
    }
}
