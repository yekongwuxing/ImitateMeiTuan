import React,{Component} from 'react';
import {
    View,
    TouchableOpacity,
    Image,
    Text,
    StyleSheet
} from 'react-native';
import screen from '../../common/screen';
import Color  from '../../widget/Color';
import {Paragraph} from '../../widget/Text';
type Props = {
    titles:Array<string>,
    onSelected:Function,
    selectedIndex:number,
}
class NearHeader extends Component<Props>{
    static defaultProps = {
        onSelected: () => {}
    }
    render() {
        return(
            <View style={styles.container}>
                {this.props.titles.map((title, i) => (
                    <TouchableOpacity
                        key={i}
                        style={[{backgroundColor: this.props.selectedIndex == i ? '#FE566D' : 'white'}, styles.item]}
                        onPress={() => this.props.onSelected(i)}>
                        <Paragraph style={{color: this.props.selectedIndex == i ? 'white' : '#555555'}}>
                            {title}
                        </Paragraph>
                    </TouchableOpacity>
                ))}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    item: {
        width: screen.width / 4 - 10,
        marginLeft: 8,
        marginTop: 5,
        marginBottom: 5,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        borderWidth: screen.onePixel,
        borderColor: Color.border,
    },
});

export default NearHeader