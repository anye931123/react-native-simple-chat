import React, {Component} from 'react';
import {KeyboardAvoidingView, View,} from 'react-native';
import _ from 'lodash';
import InputTool from './InputTool';
import Send from './Send';
import MessageTools from './MessageTools';


export default class Footer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message: '',
        }

    }


    _onChangedText = (text) => {
        this.setState({
            message: text
        })

    }

    _onFocus = () => {
        this.refs.MessageTools.resetButton()
    }

    render() {
        const {message} = this.state
        const {sendMessageFn, textInputProps, animation, showMessageTool, footerStyle = {},messageTools} = this.props
        const {footerContainer,textInputStyle, sendStyle, sendTextStyle,sendUnPressStyle,messageToolContainerStyle} = footerStyle
        return (
            <KeyboardAvoidingView
                behavior={'position'}
            >
                <View style={footerContainer}>
                    <InputTool
                        onTextChanged={this._onChangedText}
                        onInputSizeChanged={() => {
                        }}
                        multiline={true}
                        text={message}
                        textInputStyle={textInputStyle}
                        textInputProps={_.assign({onFocus: this._onFocus}, textInputProps)}

                    />
                    <Send
                        sendStyle={sendStyle}
                        sendTextStyle={sendTextStyle}
                        sendUnPressStyle={sendUnPressStyle}
                        sendPress={() => {
                            sendMessageFn&&sendMessageFn(message)
                            this.setState({
                                message: '',
                                layoutStatus: false
                            })

                        }}
                        sendStatus={!_.isEmpty(message)}
                    />
                </View>
                <MessageTools
                    ref={'MessageTools'}
                    animation={animation}
                    messageTools={messageTools}
                    showMessageTool={showMessageTool}
                    messageToolContainerStyle={messageToolContainerStyle}
                />

            </KeyboardAvoidingView>
        )
    }
}

