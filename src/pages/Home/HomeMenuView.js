import React,{Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
    ScrollView
} from 'react-native';
import PageControl from 'react-native-page-control';
import HomeMenuItem from './HomeMenuItem';
import Color from "../../widget/Color";
import screen from '../../common/screen';
type Props = {
    menuInfo:Array<Object>,
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
        let {menuInfo,onMenuSelected} = this.props

        let menuItems = menuInfo.map(
            (info,i) => (
                <HomeMenuItem key={info.title}
                              title={info.title}
                              icon={info.icon}
                              onPress={() => {
                                  onMenuSelected && onMenuSelected(i)
                              }}
                />
            )
        )
        let menuViews = []
        let pageCount = Math.ceil(menuItems.length / 10)
        for (let i = 0; i < pageCount; i++) {
            let items = menuItems.slice(i * 10,i * 10 + 10)
            let menuView = (
                <View style={styles.itemsView} key={i}>
                    {items}
                </View>
            )
            menuViews.push(menuView)
        }
        return (
            <View style={styles.container}>
                <ScrollView horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            pagingEnabled={true}
                            onScroll={(e) => this.onScroll(e)}
                >
                    <View style={styles.menuContainer}>
                        {menuViews}
                    </View>
                </ScrollView>
                <PageControl style={styles.pageControl}
                             numberOfPages={pageCount}
                             currentPage={this.state.currentPage}
                             hidesForSinglePage={true}
                             pageIndicatorTintColor='gray'
                             currentPageIndicatorTintColor={Color.primary}
                             indicatorSize={{width:8,height:8}}

                />
            </View>

        );
    }

    onScroll(e:any){
        let x = e.nativeEvent.contentOffset.x //拿到偏移量
        let currentPage = Math.round(x / screen.width)//用偏移量/宽度得到当前页数

        console.log('onScroll  ' + e.nativeEvent.contentOffset.x + '  page ' + currentPage + '  current ' + this.state.currentPage)
        if (this.state.currentPage != currentPage) {
            this.setState({
                currentPage: currentPage
            })
        }
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white'
    },
    menuContainer:{
        flexDirection:'row'
    },
    itemsView:{
        flexDirection:'row',
        flexWrap:'wrap',
        width:screen.width
    },
    pageControl:{
        margin:10
    }

});
export default HomeMenuView