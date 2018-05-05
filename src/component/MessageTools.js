import React,{Component} from "react";
import {
    View,
    Image,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import * as imgs from '../images';
import ToolsButton from './ToolsButton';
export default class MessageTools extends Component{

    constructor(){
        super()
        this.state={
            onPressType:0,
        }
    }

    Button

    render(){
         const {onPressType}=this.state
        return(<View style={styles.container}>
            <ToolsButton normalIcon={imgs.voice} selectedIcon={imgs.voiceSelect} pressStatus={onPressType==1} onPress={}/>
            <ToolsButton normalIcon={imgs.picture} selectedIcon={imgs.pictureSelect} pressStatus={onPressType==2} />
            <ToolsButton normalIcon={imgs.camera} selectedIcon={imgs.cameraSelect} pressStatus={onPressType==3}/>
            <ToolsButton normalIcon={imgs.emoticon} selectedIcon={imgs.emoticonSelect}  pressStatus={onPressType==4}/>
            <ToolsButton normalIcon={imgs.add} selectedIcon={imgs.addSelect} pressStatus={onPressType==5}/>
        </View>)
    }

}

const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        paddingTop:3,
        paddingBottom:5
    },
    toolBtn:{
        flex:1
    }

})