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
import * as imgs from "../images";
import PictureGallery from './picture/PictureGallery'
import VoiceOne from './voice/VoiceOne'


export default class Footer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message: '',
        }
        this.messageTools = [{
            normalIcon: imgs.voice,
            selectedIcon: imgs.voiceSelect,
            messageToolView: <VoiceOne
                onVoicePressIn={() => {
                    console.log('voiceIn')
                }}
                onVoicePressOut={() => {
                    console.log("voiceOut")
                }}
            />
        },

            {
                normalIcon: imgs.picture,
                selectedIcon: imgs.pictureSelect,
                messageToolView: <PictureGallery
                    sendImageMessagesFn={props.sendImageMessagesFn}
                    checkImageFn={props.checkImageFn}
                    showToolBar={true}
                    {...props.pictureGalleryStyle}
                />
            },
            {
                normalIcon: imgs.camera,
                selectedIcon: imgs.cameraSelect,

            },
            {
                normalIcon: imgs.emoticon,
                selectedIcon: imgs.emoticonSelect,
                messageToolView: <VoiceOne
                    onVoicePressIn={() => {
                        console.log('voiceIn')
                    }}
                    onVoicePressOut={() => {
                        console.log("voiceOut")
                    }}
                />
            },
            {
                normalIcon: imgs.add,
                selectedIcon: imgs.addSelect,
                messageToolView: <VoiceOne
                    onVoicePressIn={() => {
                        console.log('voiceIn')
                    }}
                    onVoicePressOut={() => {
                        console.log("voiceOut")
                    }}
                />
            }
        ]
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
        const {sendPress, textInputStyle, textInputProps, animation,showMessageTool} = this.props
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
                    <MessageTools
                        ref={'MessageTools'}
                        animation={animation}
                        messageTools={this.messageTools}
                        showMessageTool={showMessageTool}
                    />
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