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
        const {position, textBubbleStyle = {}, messageData, nameShow} = this.props
        const {bubbleBgColor = {}, textStyle} = textBubbleStyle
        const {rightColor = Colors.blue, leftColor = Colors.blue} = bubbleBgColor
        const {message} = messageData
        return (<View style={[styles.container, position ? {
            justifyContent: 'flex-end',
            paddingRight: nameShow ? 6 : 4
        } : {justifyContent: 'flex-start', paddingLeft: nameShow ? 6 : 4}]}>
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
                <Text style={[styles.textStyle, textStyle]}>{message}</Text>
            </View>


        </View>)
    }
}