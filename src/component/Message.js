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
        const {data,
            myId,
            leftAvatarStyle,
            rightAvatarStyle,
            userNameShow,
            myNameShow,
            timeStyle,
            timeShow,
            checkImageFn,

            userNameStyle,
            rightUserNameStyle,
            leftUserNameStyle,
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

                {timeShow&&<TimeLabel {...timeStyle} time={time} />}
            <View style={[styles.container, position && {justifyContent: 'flex-end'}]}>
            {!position && <Avatar {...leftAvatarStyle} avatar={avatarImg} userName={userName}/>}

            <View style={{alignItems: position ? 'flex-end' : 'flex-start'}}>
                {nameShow&&<Text style={[styles.userName,userNameStyle, position ? rightUserNameStyle||leftUserNameStyle :leftUserNameStyle||rightUserNameStyle]}>{userName}</Text>}
                <BubbleView
                            position={position}
                            messageData={data}
                            {...this.props}
                />
            </View>
            {position && <Avatar {...rightAvatarStyle} avatar={avatarImg} userName={userName}/>}
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