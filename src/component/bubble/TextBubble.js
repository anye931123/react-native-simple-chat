import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import Colors from '../../utils/Colors'
import ImageView from "../../widget/ImageView";
import _ from 'lodash'
import PureText from './textBubble/PureText'
export default class TextBubble extends Component {
    constructor() {
        super()
    }


    render() {

        const { messageData,showDialogFn} = this.props


        return (
            <TouchableOpacity  onLongPress={()=>showDialogFn(messageData)}>
            <PureText {...this.props}/>
            </TouchableOpacity>
        )
    }


}

