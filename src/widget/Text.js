import React,{Component} from 'react';
import {
    Text,
    StyleSheet
} from 'react-native';
import Color from './Color';

export function Heading1({style,...props}:Object) {
    return <Text style={[styles.h1,style]} {...props}></Text>
}

export function Heading2({style,...props}:Object) {
    return <Text style={[styles.h2,style]} {...props}></Text>
}
export function Heading3({style,...props}:Object) {
    return <Text style={[styles.h3,style]} {...props}></Text>
}

export function Paragraph({style,...props}:Object) {
    return <Text style={[styles.p,style]} {...props}></Text>
}

export function Tip({style,...props}:Object) {
    return <Text style={[styles.tip,style]} {...props}></Text>
}
const styles = StyleSheet.create({
    h1:{
        fontSize:40,
        color:Color.primary
    },
    h2:{
        fontSize:15,
        color:'#222222',
        fontWeight:'bold'
    },
    h3:{
        fontSize:14,
        color:'#222222'
    },
    p: {
        fontSize: 13,
        color: '#777777',
    },
    tip: {
        fontSize: 13,
        color: '#999999'
    }

})
