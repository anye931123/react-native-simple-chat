import React, {PureComponent} from 'react';
import {
    View,
    StyleSheet,
    Text,
    Dimensions,
    TouchableOpacity
} from 'react-native';

import PureText from './textBubble/PureText'
export default class TextBubble extends PureComponent {

    render() {

        const { messageData,showDialogFn} = this.props


        return (
            <TouchableOpacity style={{padding:2}}  onLongPress={()=>showDialogFn(messageData)}>
            <PureText {...this.props}/>
            </TouchableOpacity>
        )
    }


}

