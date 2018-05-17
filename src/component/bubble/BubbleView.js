import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
    Dimensions,
    PanResponder,
    ActivityIndicator
} from 'react-native';
import Colors from '../../utils/Colors'
import ImageView from "../../widget/ImageView";
import _ from 'lodash'
import TextBubble from './TextBubble';
import ImageBubble from './ImageBubble';
import Warning from '../../widget/WarningView'
import {messageStates} from '../../config'

export default class BubbleView extends Component {


    constructor() {
        super()
        this._panResponder = undefined
        this.gestureXY = {x: 0, y: 0}
    }

    componentWillMount() {
        this._panResponder = PanResponder.create({
            onStartShouldSetPanResponderCapture: (evt, gestureState) => {
                const {pageX, pageY} = evt.nativeEvent
                this.gestureXY = {x: pageX, y: pageY}
                return false
            },

        });
    }

    _showDialogPopFn = (message) => {
        const {showDialogPopFn} = this.props
        if (showDialogPopFn) {
            showDialogPopFn(message, this.gestureXY.x, this.gestureXY.y)
        }
    }

    _showMessageStateView = (messageState) => {
        const {
            loadingView,
            warningView,
            otherStateViewsFn,
            loadingColor,
            warningStyle
        } = this.props
        let widget = null
        switch (messageState) {
            case messageStates.sending:
                widget = (loadingView ? loadingView :
                    <ActivityIndicator animating={true} color={loadingColor ? loadingColor : Colors.blue}
                                       size={'small'}/>)
                break;
            case messageStates.sendSuccess:
                break;
            case messageStates.sendFail:
                widget = (warningView ? warningView : <Warning {...warningStyle}/>)
                break;
            default:
                widget = (otherStateViewsFn ? otherStateViewsFn(messageState) : null)
        }

        return widget
    }

    render() {
        const {
            position,
            messageData,
            nameShow,
            textBubbleFn,
            imageBubbleFn,
            voiceBubbleFn,
            bubbleViewsFn,
        } = this.props
        const {message, images, voice, messageState} = messageData
        let paddingNum = nameShow ? 6 : 4

        return (
            <View  {...this._panResponder.panHandlers} style={[styles.container, position ?
                {justifyContent: 'flex-end',paddingRight: paddingNum} : {justifyContent: 'flex-start',paddingLeft: paddingNum}]}>
                {position && this._showMessageStateView(messageState)}
                {images && (imageBubbleFn ? imageBubbleFn(images) :
                    <ImageBubble {...this.props} showDialogFn={this._showDialogPopFn}/>)}
                {message && (textBubbleFn ? textBubbleFn(message) :
                    <TextBubble {...this.props} showDialogFn={this._showDialogPopFn}/>)}
                {voice && (voiceBubbleFn ? voiceBubbleFn() : null)}
                {bubbleViewsFn && bubbleViewsFn(messageData)}
                {!position && this._showMessageStateView(messageState)}
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 6,
        marginRight: 6,
        width: Dimensions.get('window').width - 110
    },
    textContainer: {
        backgroundColor: Colors.blue,
        borderRadius: 10,
        padding: 10,
        justifyContent: 'center'


    },
    textStyle: {
        color: Colors.white,
        fontSize: 15,
    },
    triangle: {
        position: "absolute",
        top: 12,
        width: 0,
        height: 0,
        borderStyle: 'solid',
        borderLeftWidth: 18,
        borderRightWidth: 14,
        borderBottomWidth: 7,
        borderTopWidth: 3,
        borderBottomLeftRadius: 30,
    },
    triangleRight: {
        right: 0,
        borderRightWidth: 18,
        borderLeftWidth: 14,
        borderBottomWidth: 3,
        borderTopWidth: 7,
        borderBottomRightRadius: 30

    },

    triangleNameFalse: {
        position: "absolute",
        top: 14,
        height: 10,
        width: 10,
        transform: [{rotateZ: '45deg'}]
    },
    imagesContainer: {
        flexDirection: 'row',
    }

})