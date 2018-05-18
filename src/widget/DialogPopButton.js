import React, {PureComponent} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import ImageView from "./ImageView";
import Colors from "../utils/Colors";

export default class DialogPopButton extends PureComponent{

    constructor(){
        super()
    }


    render(){
        const {icon,text,onPress}=this.props
        return(<TouchableOpacity
        onPress={onPress}
        style={styles.container}
        >
            <View style={styles.btnContainer}>
                <ImageView source={icon} style={styles.icon}/>
                <Text style={styles.text}>{text}</Text>
            </View>
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

    btnContainer:{
        justifyContent:'center',
        alignItems:"center"
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