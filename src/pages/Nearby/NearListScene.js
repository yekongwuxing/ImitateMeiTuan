import React,{Component} from 'react';
import {
    View,
    Text,
    StyleSheet

} from 'react-native';

import RefreshListView,{RefreshState} from 'react-native-refresh-list-view';
import RenderItem from '../../widget/RenderItem';
import api from "../../api";
import NearHeader from "./NearHeader";

type Props = {
    types:Array<string>,
    navigation:any
}

type State = {
    typeIndex:number,
    data:Array<Object>,
    refreshState:number

}
class NearListScene extends Component<Props,State>{
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            typeIndex:0,
            data:[],
            refreshState:RefreshState.Idle,
        };
      }

    componentDidMount() {
        this.requestHeaderRefresh()
    }
    requestData = async () => {
        let response = await fetch(api.recommend)
        let json = await response.json()

        console.log(JSON.stringify(json))

        let dataList = json.data.map((info) => {
            return {
                id: info.id,
                imageUrl: info.squareimgurl,
                title: info.mname,
                subtitle: `[${info.range}]${info.title}`,
                price: info.price
            }
        })

        // 偷懒，用同一个测试接口获取数据，然后打乱数组，造成数据来自不同接口的假象 >.<
        dataList.sort(() => {return 0.5 - Math.random()})

        return dataList
    }

    requestHeaderRefresh = async () => {
          try {
              this.setState({refreshState:RefreshState.HeaderRefreshing})
              let datalist= await this.requestData()
              this.setState({
                  data:datalist,
                  refreshState:RefreshState.Idle,
              })
          }catch (e) {
              this.setState({
                  refreshState: RefreshState.Failure,
              })
          }

    }
    requestFooterRefresh = async  () => {
          try {
              this.setState({refreshState:RefreshState.FooterRefreshing})
              let dataList = await  this.requestData()
              this.setState({
                  data:[...this.state.data,...dataList],
                  refreshState:this.state.data.length > 30 ? RefreshState.NoMoreData : RefreshState.Idle
              })

          }catch (error) {
              this.setState({
                  refreshState: RefreshState.Failure,
              })
          }

    }
    renderItem = ({item}) => {
        return (
            <RenderItem info={item} onPress={() => {
                this.props.navigation.navigate('HomeDetail',{info:item})
            }} />
        );
    }
    renderHeader = () => {
          return(
              <NearHeader
                  titles={this.props.types}
                  onSelected={(index) => {
                  if (index != this.state.typeIndex) {
                      this.setState({
                          typeIndex:index
                      })

                      this.requestData()

                  }
                  }}
                  selectedIndex={this.state.typeIndex}

              />
          )
    }

    render() {
        return(
            <RefreshListView data={this.state.data}
                             renderItem={this.renderItem}
                             keyExtractor={(item,index) => index}
                             refreshState={this.state.refreshState}
                             onHeaderRefresh={this.requestHeaderRefresh}
                             onFooterRefresh={this.requestFooterRefresh}
                             ListHeaderComponent={this.renderHeader}
            />

        );
    }

}
const styles = StyleSheet.create({

})


export default NearListScene