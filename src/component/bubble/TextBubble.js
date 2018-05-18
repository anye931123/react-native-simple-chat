import React, {PureComponent} from 'react';
import {TouchableOpacity} from 'react-native';

import PureText from './textBubble/PureText'

export default class TextBubble extends PureComponent {

    render() {

        const { messageData,showDialogFn} = this.props


        return (
            <TouchableOpacity activeOpacity={0.8} style={{padding:2}}  onLongPress={()=>showDialogFn(messageData)}>
            <PureText {...this.props}/>
            </TouchableOpacity>
        )
    }


}

