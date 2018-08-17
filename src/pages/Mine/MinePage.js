import React,{Component} from 'react';
import {
    View,
    StyleSheet,
    SectionList,
    Image

} from 'react-native';
import Color from "../../widget/Color";
import NavigationItem from '../../widget/NavigationItem';
import GroupItem from "../../widget/GroupItem";
import {Heading2, Paragraph} from "../../widget/Text";

export  default class MinePage extends Component{
    static navigationOptions = ({navigation}:any) => ({
        headerRight:(
            <View style={{flexDirection:'row'}}>
                <NavigationItem icon={require('../../images/mine/icon_navigation_item_set_white.png')} />
                <NavigationItem icon={require('../../images/mine/icon_navigation_item_message_white.png')} />
            </View>

        ),
        headerStyle:{
            backgroundColor:Color.primary,
            borderBottomWidth:0
        }
    })
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            data:[],
            refreshing:false
        };
    }

    componentDidMount() {
        this.setState({
            data:[
                {key:0,data:[
                        {title: '我的钱包', subtitle: '办信用卡', image: require('../../images/mine/icon_mine_wallet.png')},
                        {title: '余额', subtitle: '￥95872385', image: require('../../images/mine/icon_mine_balance.png')},
                        {title: '抵用券', subtitle: '63', image: require('../../images/mine/icon_mine_voucher.png')},
                        {title: '会员卡', subtitle: '2', image: require('../../images/mine/icon_mine_membercard.png')}
                    ]},
                {key:1,data:[
                        {title: '好友去哪', image: require('../../images/mine/icon_mine_friends.png')},
                        {title: '我的评价', image: require('../../images/mine/icon_mine_comment.png')},
                        {title: '我的收藏', image: require('../../images/mine/icon_mine_collection.png')},
                        {title: '会员中心', subtitle: 'v15', image: require('../../images/mine/icon_mine_membercenter.png')},
                        {title: '积分商城', subtitle: '好礼已上线', image: require('../../images/mine/icon_mine_member.png')}
                    ]},
                {key:2,data:[
                        {title: '客服中心', image: require('../../images/mine/icon_mine_customerService.png')},
                        {title: '关于美团', subtitle: '我要合作', image: require('../../images/mine/icon_mine_aboutmeituan.png')}
                    ]}
            ]
        })
    }

    renderItem = ({item,index,section:{key,data}}) => {
        return (
            <GroupItem title={item.title}
                       subtitle={item.subtitle}
                       image={item.image}
                       key={index}
            />
        )
    }
    renderSectionHeader = () => {
        return(
            <View style={{height:10,backgroundColor:Color.paper}}></View>
        )
    }
    renderHeader = () => {
        return(
            <View style={styles.header}>
                <Image style={styles.avatar} source={require('../../images/mine/avatar.png')} />
                <View>
                    <View style={{flexDirection: 'row', alignItems: 'center',}}>
                        <Heading2 style={{color: 'white'}}>素敌</Heading2>
                        <Image style={{marginLeft: 4}} source={require('../../images/mine/beauty_technician_v15.png')} />
                    </View>
                    <Paragraph style={{color: 'white', marginTop: 4}}>个人信息 ></Paragraph>
                </View>
            </View>
        )
    }

    render(){
        return(
            <SectionList sections={this.state.data}
                         extraData={this.state}//如需用setState来更新页面 需要设置
                         renderItem={this.renderItem}
                         renderSectionHeader={this.renderSectionHeader}
                         // SectionSeparatorComponent={this.renderSectionHeader}
                         keyExtractor={(item,index) => index}
                         ListHeaderComponent={this.renderHeader}
                         showsVerticalScrollIndicator={false}
            />
        );
    }

}

const styles = StyleSheet.create({
    header: {
        backgroundColor: Color.primary,
        paddingBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        padding:10
    },
    avatar: {
        width: 50,
        height: 50,
        marginRight: 10,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: '#51D3C6'
    }
});

