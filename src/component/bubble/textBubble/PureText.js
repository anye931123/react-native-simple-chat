import React, {PureComponent} from 'react';
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
export default class PureText extends PureComponent {


    getContainerStyle = () => {
        const {bubbleStyle} = this.props
        const {textBubbleStyle, textBubbleContainerBgStyle} = bubbleStyle
        let {left, right} = textBubbleStyle
        let {leftColor = Colors.blue, rightColor = Colors.blue} = textBubbleContainerBgStyle
        return{left,right,leftColor,rightColor}
    }

    getTriangleStyle=(leftColor,rightColor)=>{
        const {nameShow, position} = this.props
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

        return triangleStyle
    }
    render() {
        const {messageData,nameShow, position} = this.props
        const {message} = messageData

        let paddingNum = nameShow ? 6 : 4

        const {left, right,leftColor,rightColor}=this.getContainerStyle()

        let triangleStyle=this.getTriangleStyle(leftColor,rightColor)

        return (<View style={[styles.container, {
            justifyContent: position ? 'flex-end' : 'flex-start',
            paddingRight: paddingNum,
            paddingLeft: paddingNum
        }]}>
            <View style={triangleStyle}/>
            <View
                style={[styles.textContainer, {backgroundColor: position ? rightColor : leftColor}]}>
                <Text  style={[styles.textStyle, position ? right : left]}>{message}</Text>
            </View>


        </View>)
    }
}