import React, {PureComponent} from 'react';
import {
    View,
    TextInput,
    StyleSheet,
    Platform
} from 'react-native';

import Colors from '../utils/Colors';
export default class InputTool extends PureComponent {

    constructor() {
        super()
        this.contentSize=undefined;
    }

    onContentSizeChange =(e)=> {
        const {onInputSizeChanged}=this.props;
        const {contentSize}=e.nativeEvent;
        if(!contentSize)return;
        if(
            !this.contentSize ||
            this.contentSize.width!==contentSize.width||
             this.contentSize.height!==contentSize.height){
            this.contentSize=contentSize;
            onInputSizeChanged(this.contentSize)
        }
    }

    onChangeText=(text) => {
        const {onTextChanged} =this.props
        onTextChanged(text)
    }

    render() {
        const {
            placeholder,
            placeholderTextColor,
            multiline,
            textInputAutoFocus,
            text,
            keyboardAppearance,
            textInputStyle,
            textInputProps
        } = this.props
        return (
            <TextInput
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor}
                multiline={multiline}
                onChange={this.onContentSizeChange}
                onContentSizeChange={this.onContentSizeChange}
                onChangeText={this.onChangeText}
                style={[styles.textInput,textInputStyle]}
                autoFocus={textInputAutoFocus}
                value={text}
                accessibilityLabel={text||placeholder}
                enablesReturnKeyAutomatically
                underlineColorAndroid={'transparent'}
                keyboardAppearance={keyboardAppearance}
                {...textInputProps}
            />
        )

    }
}

const styles = StyleSheet.create({
    textInput:{
        flex:1,
        fontSize:16,
        lineHeight:16,
        backgroundColor:Colors.white,
        borderColor:Colors.transparent,
        borderWidth:1,
        borderRadius:5,
        padding:4,
        paddingTop:Platform.select({
            ios:8,
            android:5
        }),
        paddingBottom:Platform.select({
            ios:8,
            android:5
        }),
    }
})
