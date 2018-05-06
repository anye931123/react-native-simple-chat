import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
    Dimensions
} from 'react-native';
import Colors from '../../utils/Colors'
import ImageView from "../../widget/ImageView";
import _ from 'lodash'
export default class TextBubble extends Component {
    constructor() {
        super()
    }


    render() {

        const {position, bubbleColor, messageData, nameShow} = this.props
        const {message}=messageData

        return (
            <View style={[styles.container, position ? {justifyContent: 'flex-end',paddingRight:nameShow?6:4} : {justifyContent: 'flex-start',paddingLeft:nameShow?6:4}]}>
                <View style={[
                    nameShow ? styles.triangle : styles.triangleNameFalse,
                    position ? [
                            nameShow ? styles.triangleRight : styles.triangleNameFalse, {
                                borderColor: bubbleColor.right,
                            backgroundColor:bubbleColor.right
                            }]
                        : {
                            left: 0,
                            borderColor: bubbleColor.left,
                            backgroundColor:bubbleColor.left
                        }]}/>
                <View
                    style={[styles.textContainer, position ? {backgroundColor: bubbleColor.right} : {backgroundColor: bubbleColor.left}]}>
                    <Text style={styles.textStyle}>{message}</Text>
                </View>


            </View>
        )
    }


}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    textContainer: {
        backgroundColor: Colors.blue,
        borderRadius: 10,
        padding: 10,
        justifyContent: 'center'


    },
    textStyle: {
        color: Colors.white,
        fontSize: 15,
    },
    triangle: {
        position: "absolute",
        top: 12,
        width: 0,
        height: 0,
        borderStyle: 'solid',
        borderLeftWidth: 18,
        borderRightWidth: 14,
        borderBottomWidth: 7,
        borderTopWidth: 3,
        borderBottomLeftRadius: 30,
    },
    triangleRight: {
        right: 0,
        borderRightWidth: 18,
        borderLeftWidth: 14,
        borderBottomWidth: 3,
        borderTopWidth: 7,
        borderBottomRightRadius: 30

    },

    triangleNameFalse: {
        position: "absolute",
        top: 14,
        height: 10,
        width: 10,
        transform: [{rotateZ: '45deg'}]
    },
    imagesContainer:{
        flexDirection:'row',
    }

})