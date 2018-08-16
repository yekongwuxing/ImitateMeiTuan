import React,{Component} from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Image

} from 'react-native';
import {Heading3} from "../../widget/Text";
import screen from '../../common/screen';

type Props = {
    title:string,
    icon:any,
    onPress:Function
}
class OrderMenuItem extends Component<Props>{
    render() {
        return(
            <View style={styles.container}>
                <TouchableOpacity onPress={this.props.onPress}>
                    <Image source={this.props.icon} style={styles.icon}/>
                    <Heading3>{this.props.title}</Heading3>
                </TouchableOpacity>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        width:screen.width/4,
        height:screen.width/4

    },
    icon:{
        width:30,
        height:30,
        margin:5
    }
});

export default OrderMenuItem