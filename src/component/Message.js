import React, {PureComponent} from 'react';
import {
    View,
    Image,
    StyleSheet,
    Text
} from 'react-native';
import BubbleView from './bubble/BubbleView';
import Avatar from './Avatar';

import Colors from '../utils/Colors';
import TimeLabel from './TimeLabel'

import RankAndName from './RankAndName'

export default class Message extends PureComponent {

    constructor() {
        super()
    }


    render() {
        const {
            data,
            myId,
            leftAvatarStyle,
            rightAvatarStyle,
            userNameShow,
            myNameShow,
            timeStyle,
            timeShow,
            rankAndNameStyle,
            messageContainerStyle
        } = this.props

        const {
            avatarImg,
            userId,
            userName,
            time,
            rank
        } = data

        let position = userId == myId //ture:right

        let nameShow = false
        if (position && myNameShow) {
            nameShow = true
        } else if (!position && userNameShow) {
            nameShow = true
        }


        return (
            <View style={messageContainerStyle}>

                {timeShow && <TimeLabel {...timeStyle} time={time}/>}
                <View style={[styles.container, position && {justifyContent: 'flex-end'}]}>

                    {!position && <Avatar {...leftAvatarStyle} avatar={avatarImg} userName={userName}/>}

                    <View style={{alignItems: position ? 'flex-end' : 'flex-start'}}>

                        {nameShow &&<RankAndName {...rankAndNameStyle}  messageData={data}/>}

                        <BubbleView
                            position={position}
                            messageData={data}
                            {...this.props}
                            nameShow={nameShow}
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

})