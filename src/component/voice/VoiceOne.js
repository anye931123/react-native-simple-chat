import React, {Component} from 'react';

import {
    View,
    TouchableOpacity,
    Image,
    StyleSheet
} from 'react-native';
import {styles} from '../../styles/messageButtomTool'
import * as imgs from '../../images'
import Colors from '../../utils/Colors';

export default class VoiceOne extends Component {

    constructor() {
        super()
    }


    render() {
        const {onVoicePressIn, onVoicePressOut} = this.props
        return (
            <View style={styles.container}>

                <TouchableOpacity
                    style={stylesVoice.button}
                    onPressIn={() => {
                        if (onVoicePressIn) {
                            onVoicePressIn()
                        }
                    }}
                    onPressOut={()=>{
                        if(onVoicePressOut){
                            onVoicePressOut()
                        }
                    }}
                >

                    <Image source={imgs.voiceButton} style={stylesVoice.image}/>
                </TouchableOpacity>

            </View>
        )
    }
}


const stylesVoice = StyleSheet.create({

    button: {
        padding: 20,
        borderRadius: 50,
        backgroundColor: Colors.blue
    },
    image: {

        width: 40,
        height: 40,
        resizeMode: 'contain'

    }

})