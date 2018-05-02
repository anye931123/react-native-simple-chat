import React,{Component} from 'react';

import {
    View,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import Colors from '../utils/Colors'
export default class Avatar extends Component{
    constructor(){
        super()

    }

    setAvatarColor=()=>{
    const {userName=""}=this.props
        if(userName.length==1){
        
        }
    }

    renderAvatar=()=>{
        const {avatar,avatarStyle} =this.props
        if(typeof avatar==='string'){
            return <Image
                source={{uri:avatar}}
                style={[styles.avatarStyle,avatarStyle]}
            />
        }else if(typeof avatar==='number'){
            return <Image
                source={avatar}
                style={[styles.avatarStyle,avatarStyle]}
            />
        }
        return null;
    }
    render(){
        const {userName,avatar,avatarStyle,avatarPress} =this.props

        if(!userName&&!avatar){
            return(
                <View
                    style={[styles.avatarStyle,styles.avatarTransparent,avatarStyle]}
                />
            )
        }

        if(avatar){
            return (
                <TouchableOpacity
                    disabled={!avatarPress}
                    onPress={()=>{
                        if(avatarPress){
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

const styles=StyleSheet.create(
    {
        avatarStyle: {
            justifyContent: 'center',
            alignItems: 'center',
            width: 40,
            height: 40,
            borderRadius: 20,
        },
        avatarTransparent: {
            backgroundColor: Colors.transparent,
        },
    }
)