import React, {Component} from 'react';
import {
    View,

    Text,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import {styles} from './styles/pureText'
import Colors from "../../../utils/Colors";


type TextBubbleStyle = {
    bubbleBgColor: {
        leftColor: String,//文字气泡左边背景颜色
        rightColor: String,//文字气泡右边背景颜色
    },
    textStyle: Object,//文字气泡文字样式
}
export default class PureText extends Component {


    render() {
        const {position,bubbleStyle={} , messageData, nameShow} = this.props
        const {textBubbleStyle={},textBubbleContainerBgStyle={}}=bubbleStyle
        const {left, right} = textBubbleStyle
        const {leftColor,rightColor}=textBubbleContainerBgStyle
        const {message} = messageData
        return (<View style={[styles.container, {
            justifyContent: position ? 'flex-end':'flex-start',
            paddingRight: nameShow ? 6 : 4,
            paddingLeft: nameShow ? 6 : 4
        }]}>
            <View style={[
                nameShow ? styles.triangle : styles.triangleNameFalse,
                position ? [
                    nameShow ? styles.triangleRight : styles.triangleNameFalse, rightColor && {
                        borderColor: rightColor,
                        backgroundColor: rightColor
                    }] : [{left: 0}, leftColor && {
                    borderColor: leftColor,
                    backgroundColor: leftColor
                }]]}/>
            <View
                style={[styles.textContainer, {backgroundColor: position ? rightColor : leftColor}]}>
                <Text style={[styles.textStyle, position?right||left:left||right]}>{message}</Text>
            </View>


        </View>)
    }
}