import React, {Component} from 'react';

import {Image, Text, TouchableOpacity, View,} from 'react-native';
import {styles} from '../../src/styles/messageButtomTool'
import * as imgs from '../images/index'
import {stylesVoice} from './styles/index'
import VoiceMode from './VoiceMode'

export default class VoiceOne extends Component {

    constructor() {
        super()
        this.state={
            visible:false
        }
    }


    _onVoicePressOut=()=>{
        const {onVoicePressOut}=this.props
    if(onVoicePressOut){
        onVoicePressOut()
    }

    this.setState({
        visible:false
    })
}
  _showMode=()=>{
        this.setState({
            visible:true
        })
  }
    render() {
        const {onVoicePressIn, onVoicePressOut} = this.props
        const {visible}=this.state
        return (
            <View style={styles.container}>
                <Text style={stylesVoice.title}>按住说话</Text>
                <TouchableOpacity
                    style={stylesVoice.button}
                    onPress={this._showMode}
                    onLongPress={this._showMode}
                    delayLongPress={0}

                >
                    <Image source={imgs.voiceButton} style={stylesVoice.image}/>
                </TouchableOpacity>
                <VoiceMode visible={visible}  onVoicePressIn={onVoicePressIn}  onVoicePressOut={this._onVoicePressOut}/>
            </View>
        )
    }
}


