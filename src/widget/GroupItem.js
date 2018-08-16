import React,{Component} from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    ViewPropTypes,
    Image


} from 'react-native';
import {Heading3, Paragraph} from "./Text";
import screen from "../common/screen";

type Props = {
    image?:any,
    style?:ViewPropTypes.style,
    title:string,
    subtitle:string
}
class GroupItem extends Component<Props>{
    render() {
        let icon = this.props.image && <Image style={styles.icon} source={this.props.image} />
        return(
            <View style={styles.container}>
                <TouchableOpacity>
                    <View style={[styles.content,this.props.style]}>
                        {icon}
                        <Heading3>{this.props.title}</Heading3>
                        <View style={{flex: 1}} />
                        <View style={styles.subtitleContainer}>
                            <Paragraph style={{color: '#999999'}}>{this.props.subtitle}</Paragraph>
                            <Image style={styles.arrow} source={require('../images/public/cell_arrow.png')}/>
                        </View>
                    </View>

                </TouchableOpacity>

            </View>

        );
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        borderBottomWidth:screen.onePixel,
        borderBottomColor:'#e5e5e5'

    },
    content:{
        flexDirection:'row',
        height:44,
        alignItems:'center',
        paddingLeft:15,
        paddingRight:10
    },
    icon: {
        width: 25,
        height: 25,
        marginRight: 10,
    },
    subtitleContainer:{
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    arrow: {
        width: 14,
        height: 14,
        marginRight:5,
    },
});
export default GroupItem