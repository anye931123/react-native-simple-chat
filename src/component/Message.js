import React,{Component} from 'react';
import {
    View,
    Image,
    StyleSheet,
    Text
} from 'react-native';
import Bubble from './Bubble';
import Avatar from './Avatar';

import Colors from '../utils/Colors';
export  default  class Message extends Component{

    constructor(){
        super()
    }



    render(){
        const {data,bubbleColor,myId}=this.props

        const {
            img,
            userId,
            message
        }=data

        let position=userId== myId //ture:right


        return(<View style={[styles.container,position&&{justifyContent:'flex-end'}]}>
            {!position&&<Avatar avatar={img}/>}
            <Bubble position={position} bubbleColor={bubbleColor} message={message}/>
            {position&&<Avatar avatar={img}/>}
        </View>)
    }
}


const styles=StyleSheet.create({
    container:{
        marginLeft:10,
        marginRight:10,
        marginTop:10,
        flexDirection:'row',
    }
})