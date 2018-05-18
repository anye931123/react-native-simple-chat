import React, {Component} from 'react';

import ModeView from '../../src/widget/ModeView'
import {stylesVoice} from './styles/index'
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

