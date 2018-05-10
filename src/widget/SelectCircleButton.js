import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import Colors from "../utils/Colors";

export default class SelectCircleButton extends Component {


    render() {
        const {isSelected, children,selectCircleContainerStyle, commonStyle,selectedFalseStyle,selectedTrueStyle,textStyle,onPress,rightText,leftText} = this.props
        return (
            <TouchableOpacity
                onPress={onPress}
                style={selectCircleContainerStyle}
            >
                {leftText&&<Text style={textStyle}>{leftText}</Text>}
                <View style={[ commonStyle, isSelected ? selectedTrueStyle:selectedFalseStyle]}>
                {isSelected && children}
            </View>
                {rightText&&<Text style={textStyle}>{rightText}</Text>}
            </TouchableOpacity>
        )
    }
}
