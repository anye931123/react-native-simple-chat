import React, {PureComponent} from 'react'
import {Text, TouchableOpacity, View} from 'react-native'

export default class SelectCircleButton extends PureComponent {


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
