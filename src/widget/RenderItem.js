import React ,{Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image

} from 'react-native';
import screen from "../common/screen";
import Color from "./Color";
import {Heading2,Paragraph} from './Text';
type Props={
    info:Object,
    onPress:Function

}
class RenderItem extends  Component <Props>{
    render() {
        const {info} = this.props
        const imageUrl = info.imageUrl.replace('w.h', '160.0')
        return(
            <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
                <Image source={{uri:imageUrl}} style={styles.icon}/>
                <View style={styles.rightContainer}>
                    <Heading2>{info.title}</Heading2>
                    <Paragraph numberOfLines={0} style={{marginTop: 8}}>{info.subtitle}</Paragraph>
                    <View style={{flex: 1, justifyContent: 'flex-end'}}>
                        <Heading2 style={styles.price}>{info.price}元</Heading2>
                    </View>
                </View>
            </TouchableOpacity>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: screen.onePixel,
        borderColor: Color.border,
        backgroundColor: 'white',
    },
    icon: {
        width: 80,
        height: 80,
        borderRadius: 5,
    },
    rightContainer: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 10,
    },
    price: {
        color: Color.primary
    }
});

export default RenderItem
