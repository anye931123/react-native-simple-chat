import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
    Dimensions
} from 'react-native';
import Colors from '../utils/Colors'

export default class Bubble extends Component {
    constructor() {
        super()
    }


    render() {

        const {position, bubbleColor,message} = this.props
        return (
            <View style={[styles.container, position ? {justifyContent: 'flex-end'} : {justifyContent: 'flex-start'}]}>

                <View
                    style={[styles.textContainer, position ? {backgroundColor: bubbleColor.right} : {backgroundColor: bubbleColor.left}]}>
                    <Text style={styles.textStyle}>{message}</Text>
                </View>
                <View style={[styles.triangle, position ? {right: 0, backgroundColor: bubbleColor.right} : {
                    left: 0,
                    backgroundColor: bubbleColor.left
                }]}/>
            </View>
        )
    }


}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingLeft: 5,
        paddingRight: 5,
        marginLeft: 6,
        marginRight: 6,
        width: Dimensions.get('window').width - 110
    },
    textContainer: {
        backgroundColor: Colors.blue,
        borderRadius: 10,
        padding: 10,
        justifyContent:'center'


    },
    textStyle: {
        color: Colors.white,
        fontSize: 13,
    },
    triangle: {
        position: "absolute",
        top: 16,
        height: 10,
        width: 10,
        backgroundColor: Colors.blue,
        transform: [{rotateZ: '45deg'}]
    }
})