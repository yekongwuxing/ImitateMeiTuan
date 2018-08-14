import React,{Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
    TextInput,
    Image,
    TouchableOpacity,
    FlatList,
} from 'react-native';
import screen from '../../common/screen';
import {heading3} from '../../widget/Text';

type Props = {
    title:string,
    icon:any,
    onPress:Function

}
 class HomeMenuItem extends Component<Props>{
    render(){
        return(
            <TouchableOpacity style={styles.container}
                              onPress={this.props.onPress}>
                <Image style={styles.icon}
                       source={this.props.icon}
                       resizeMethod='contain'/>
                <heading3>
                    {this.props.title}
                </heading3>
            </TouchableOpacity>

        )
    }
}
const styles = StyleSheet.create({
    container:{
        width:screen.width/5,
        height:screen.height/5,
        justifyContent:'center',
        alignItems:'center',
    },
    icon:{
        width:screen.width/9,
        height:screen.height/9,
        margin:5

    }
})
export default HomeMenuItem