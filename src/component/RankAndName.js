import React, {PureComponent} from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import Colors from "../utils/Colors";

export default class RankAndName extends PureComponent {


    render() {

        const {userNameStyle, rightUserNameStyle,rankTextStyle,rankContainerStyle, leftUserNameStyle, position, messageData} = this.props
        const {userName, rank,rankState,rankColor} = messageData
        return (
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                {rank&&<View style={[rankContainerStyle,rankColor&&{backgroundColor:rankColor}]}>
                    <Text style={[styles.userName,rankTextStyle]}>{rank}</Text>
                </View>}
                <Text
                    style={[styles.userName, userNameStyle, position ? rightUserNameStyle || leftUserNameStyle : leftUserNameStyle || rightUserNameStyle]}>{userName}</Text>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    userName: {
        fontSize: 12,
        color: Colors.gray,

    }

})