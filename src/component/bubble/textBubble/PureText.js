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


    getContainerStyle = () => {
        const {bubbleStyle} = this.props
        const {textBubbleStyle, textBubbleContainerBgStyle} = bubbleStyle
        let {left, right} = textBubbleStyle
        let {leftColor = Colors.blue, rightColor = Colors.blue} = textBubbleContainerBgStyle
        return{left,right,leftColor,rightColor}
    }

    render() {
        const {messageData,nameShow, position} = this.props
        const {message} = messageData

        let paddingNum = nameShow ? 6 : 4

        const {left, right,leftColor,rightColor}=this.getContainerStyle()

        console.log("和研发是非得失第三方的",rightColor,leftColor)
        let triangleStyle={}
        if(position){
            if(nameShow){
                triangleStyle=[styles.triangle,styles.triangleRight,rightColor && {
                    borderColor: rightColor,
                    backgroundColor: rightColor
                }]
            }else {
                triangleStyle=[styles.triangleNameFalse,rightColor && {
                    borderColor: rightColor,
                    backgroundColor: rightColor
                }]
            }

        }else {
            if(nameShow){
                triangleStyle=[styles.triangle,{left: 0}, leftColor && {
                    borderColor: leftColor,
                    backgroundColor: leftColor
                }]
            }else {
                triangleStyle=[styles.triangleNameFalse,leftColor && {
                    borderColor: leftColor,
                    backgroundColor: leftColor
                }]
            }

        }

        return (<View style={[styles.container, {
            justifyContent: position ? 'flex-end' : 'flex-start',
            paddingRight: paddingNum,
            paddingLeft: paddingNum
        }]}>
            <View style={triangleStyle}/>
            <View
                style={[styles.textContainer, {backgroundColor: position ? rightColor : leftColor}]}>
                <Text style={[styles.textStyle, position ? right : left]}>{message}</Text>
            </View>


        </View>)
    }
}