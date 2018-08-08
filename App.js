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

import Color from './src/widget/Color';
//页面切换动画插入器
import CardStackStyleInterpolator from 'react-navigation/src/views/StackView/StackViewStyleInterpolator';

const TabBar = createBottomTabNavigator({
    HomePage:{
        screen:HomePage,
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
        screen:NearbyPage,
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
        screen:OrderPage,
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
        screen:MinePage,
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

const App = createStackNavigator({
    TabBar:{
        screen:TabBar,
        navigationOptions:{
            gesturesEnabled:true,
            headerTitle:null

        }
    }
},{
    mode: 'card',// 页面切换模式, 左右是card(相当于iOS中的push效果), 上下是modal(相当于iOS中的modal效果)
    headerMode: 'none',//// 导航栏的显示模式, screen: 有渐变透明效果, float: 无透明效果, none: 隐藏导航栏
    transitionConfig: () => ({ //切换动画
        screenInterpolator: CardStackStyleInterpolator.forHorizontal //水平动画
    })

});

export default App
