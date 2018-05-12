import React,{PureComponent} from 'react';
import {
    View,
    TouchableOpacity,
    Image,
    Text,
    StyleSheet
} from 'react-native'
import ImageView from "./ImageView";
import Colors from "../utils/Colors";

export default class DialogPopButton extends PureComponent{

    constructor(){
        super()
    }


    render(){
        const {icon,text,onPress,style={},PopDialogButtonProps}=this.props
        const {iconStyle,textStyle}=style
        return(<TouchableOpacity
        onPress={onPress}
        style={styles.container}
        {...PopDialogButtonProps}
        >
                <ImageView source={icon} style={[styles.icon,iconStyle]}/>
                <Text style={[styles.text,textStyle]}>{text}</Text>
        </TouchableOpacity>)
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        padding:5,
        justifyContent:'center',
        alignItems:'center'
    },


    icon:{
        width:14,
        height:14,
        resizeMode:'cover'
    },
    text:{
        marginTop:4,
        fontSize:10,
        color:Colors.white
    }


})