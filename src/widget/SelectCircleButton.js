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
        const {isSelected,btnStyle, children,circleStyle,selectedStyle,onPress,textStyle,rightText,leftText} = this.props
        return (
            <TouchableOpacity
                onPress={onPress}
                style={btnStyle}
            >
                {leftText&&<Text style={textStyle}>{leftText}</Text>}
            <View style={[styles.radio,circleStyle, isSelected && (selectedStyle?selectedStyle:styles.radioSelect)]}>
                {isSelected && children}
            </View>
                {rightText&&<Text style={textStyle}>{rightText}</Text>}
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({

    radio: {
        alignItems: 'center',
        width: 16,
        height: 16,
        marginRight: 5,
        marginLeft: 5,
        borderColor: Colors.gray,
        borderWidth: 1,
        borderRadius: 8
    },
    radioSelect: {
        borderColor: Colors.blue,
        backgroundColor: Colors.blue
    },

})