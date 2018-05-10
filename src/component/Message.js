import React, {Component} from 'react';
import {
    View,
    Image,
    StyleSheet,
    Text
} from 'react-native';
import BubbleView from './bubble/BubbleView';
import Avatar from './Avatar';

import Colors from '../utils/Colors';
import  TimeLabel from './TimeLabel'
export default class Message extends Component {

    constructor() {
        super()
    }


    render() {
        const {data, bubbleColor, myId, avatarStyle,userNameShow,myNameShow,timeStyle,timeTextStyle,timeShow,
            checkImageFn,rowId,showDialogPopFn
        } = this.props

        const {
            avatarImg,
            userId,
            userName,
            time,
        } = data

        let position = userId == myId //ture:right

        let nameShow=false
        if(position&&myNameShow){
            nameShow=true
        }else if(!position&&userNameShow){
            nameShow=true
        }


        return (
            <View style={{ marginTop: 10,transform: [{rotateX: '180deg'}]}}>
                {timeShow&&<TimeLabel timeStyle={timeStyle}  timeTextStyle={timeTextStyle} time={time} />}
            <View style={[styles.container, position && {justifyContent: 'flex-end'}]}>
            {!position && <Avatar avatarStyle={avatarStyle.left} avatar={avatarImg} userName={userName}/>}
            <View style={{alignItems: position ? 'flex-end' : 'flex-start'}}>
                {nameShow&&<Text style={[styles.userName, position ? {marginRight: 10} : {marginLeft: 10}]}>{userName}</Text>}
                <BubbleView checkImageFn={checkImageFn}
                            position={position}
                            bubbleColor={bubbleColor}
                            nameShow={nameShow}
                            messageData={data}
                            rowId={rowId}
                            showDialogPopFn={showDialogPopFn}
                />
            </View>
            {position && <Avatar avatarStyle={avatarStyle.right} avatar={avatarImg} userName={userName}/>}
        </View>
            </View>

                )
    }
}


const styles = StyleSheet.create({
    container: {
        marginLeft: 10,
        marginRight: 10,
        flexDirection: 'row',
    },
    userName: {
        fontSize: 12,
        color: Colors.gray,
        marginBottom: 5,
    }
})