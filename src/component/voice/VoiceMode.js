import React, {Component} from 'react';

import ModeView from '../../widget/ModeView'
import {stylesVoice} from './styles'

import Swiper from 'react-native-swiper';
import VoiceView from './VoiceView'
export default class VoiceMode extends Component {



    render() {
        const {visible,VoiceFn,onVoicePressIn,onVoicePressOut} = this.props
        return (<ModeView style={stylesVoice.container} visible={visible} modePress={VoiceFn}>
            {/*<Swiper >*/}
            {visible&&<VoiceView
                    VoiceFn={VoiceFn}
                    onVoicePressIn={onVoicePressIn}
                    onVoicePressOut={onVoicePressOut}
                />}
            {/*</Swiper>*/}


        </ModeView>)
    }

}

