import React,{Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
    ScrollView
} from 'react-native';
import HomeMenuItem from 'HomeMenuItem';
import PageControl from 'react-native-page-control';
type Props = {
    menuInfos:Array<Object>,
    onMenuSelected:Function
}
type State = {
    currentPage:number
}
class HomeMenuView extends Component<Props,State>{

    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            currentPage:0
        };
      }

    render() {
          let {menuInfos,onMenuSelected} = this.props
        let menuItems = menuInfos.map(
            (info,i) => (
                <HomeMenuItem key={info.title}
                              title={info.title}
                              icon={info.icon}
                              onPress={onMenuSelected ** onMenuSelected(i)}
                />
            )
        )

        return(
            <View></View>

        )
    }

}

export default HomeMenuView