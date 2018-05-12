import React, {PureComponent} from 'react';

import {
    View,
    Image,
    StyleSheet,
    TouchableOpacity,
    Text
} from 'react-native';
import Colors from '../utils/Colors'
import ImageView from '../widget/ImageView'
import {avatarDefault} from "../images"
type avatarStyle={
    imageAvatarStyle:Object,
    textAvatarStyle:Object,
    textAvatarContainerStyle:Object
}

export default class Avatar extends PureComponent {
    constructor() {
        super()

    }

    setAvatarColor = () => {
        const {userName = ""} = this.props
        if (userName.length == 1) {

        }
    }

    renderAvatar = () => {
        const {avatar, imageAvatarStyle, textAvatarStyle,textAvatarContainerStyle, userName} = this.props
        if (avatar === 'string'||typeof avatar === 'number') {
            return <ImageView
                source={avatar}
                style={[styles.avatarStyle,imageAvatarStyle]}
            />
        }  else if (userName !== '') {

            return (<View style={[styles.avatarStyle, textAvatarContainerStyle]}>
                <Text style={[{fontSize: 20, color: Colors.white},textAvatarStyle]}>
                    {userName.substr(userName.length - 1, 1)}
                </Text>
            </View>)
        }else {
            return <ImageView
                source={avatarDefault}
                style={[styles.avatarStyle,imageAvatarStyle]}
            />
        }
    }

    render() {
        const {avatarPress} = this.props

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

const styles = StyleSheet.create(
    {
        avatarStyle: {
            justifyContent: 'center',
            alignItems: 'center',
            width: 40,
            height: 40,
            borderRadius: 20,
            overflow: 'hidden'
        },
    }
)