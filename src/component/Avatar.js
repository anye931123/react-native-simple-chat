import React, {Component} from 'react';

import {
    View,
    Image,
    StyleSheet,
    TouchableOpacity,
    Text
} from 'react-native';
import Colors from '../utils/Colors'

export default class Avatar extends Component {
    constructor() {
        super()

    }

    setAvatarColor = () => {
        const {userName = ""} = this.props
        if (userName.length == 1) {

        }
    }

    renderAvatar = () => {
        const {avatar, avatarStyle, userName} = this.props
        if (typeof avatar === 'string') {
            return <Image
                source={{uri: avatar}}
                style={[styles.avatarStyle,avatarStyle]}
            />
        } else if (typeof avatar === 'number') {
            return <Image
                source={avatar}
                style={[styles.avatarStyle,avatarStyle]}
            />
        } else if (userName !== '') {

            return (<View style={[styles.avatarStyle, avatarStyle]}>
                <Text style={{fontSize: 20, color: Colors.white}}>
                    {userName.substr(userName.length - 1, 1)}
                </Text>
            </View>)
        }
        return null;
    }

    render() {
        const {userName, avatar, avatarStyle, avatarPress} = this.props

        if (!userName && !avatar) {
            return (
                <View
                    style={[styles.avatarStyle, styles.avatarTransparent, avatarStyle]}
                />
            )
        }

        if (avatar||userName) {
            return (
                <TouchableOpacity
                    disabled={!avatarPress}
                    onPress={() => {
                        if (avatarPress) {
                            avatarPress(this.props)
                        }
                    }}
                >
                    {this.renderAvatar()}
                </TouchableOpacity>
            )
        }


    }
}

const styles = StyleSheet.create(
    {
        avatarStyle: {
            justifyContent: 'center',
            alignItems: 'center',
            width: 40,
            height: 40,
            borderRadius: 20,
            overflow:'hidden'
        },
        avatarTransparent: {
            backgroundColor: Colors.transparent,
        },
    }
)