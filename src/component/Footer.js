import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    KeyboardAvoidingView,
    Platform,
    TouchableOpacity,
} from 'react-native';
import _ from 'lodash';

import Colors from '../utils/Colors';
import InputTool from './InputTool';
import Send from './Send';
import MessageTools from './MessageTools';

export default class Footer extends Component {
    constructor() {
        super()
        this.state = {
            message: '',
        }
    }


    _onChangedText = (text) => {
        console.log(text.length)
        const {message} = this.state

            this.setState({
                message: text
            })

    }

    _onFocus=()=>{
        this.refs.MessageTools.resetButton()
    }

    render() {
        const {message,} = this.state
        const {sendPress, textInputStyle, textInputProps, animationType,keyboardHide} = this.props
        return (
            <KeyboardAvoidingView
                behavior={Platform.select({
                    android: 'padding',
                    ios: 'position'
                })}

            >
                <View>
                    <View style={[styles.container]}
                    >
                        <InputTool

                            onTextChanged={this._onChangedText}
                            onInputSizeChanged={() => {
                            }}
                            multiline={true}
                            text={message}
                            textInputStyle={[textInputStyle, {maxHeight: 124}]}

                            textInputProps={_.assign({onFocus:this._onFocus},textInputProps)}

                        />
                        <Send
                            sendPress={() => {
                                sendPress(message)
                                this.setState({
                                    message: '',
                                    layoutStatus: false
                                })

                            }}
                            sendStatus={!_.isEmpty(message)}
                        />
                    </View>
                    <MessageTools ref={'MessageTools'} keyboardHide={keyboardHide} animationType={animationType}/>
                </View>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        padding: 7,
        backgroundColor: Colors.bg
    },

})