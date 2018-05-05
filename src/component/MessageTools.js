import React,{Component} from "react";
import {
    View,
    Image,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import * as imgs from '../images';
import ToolsButton from './ToolsButton';
import AnimationContainer from './AnimationContainer';
import VoiceOne from './voice/VoiceOne'
export default class MessageTools extends Component{

    constructor(){
        super()
        this.state={
            onPressType:0,
            messageToolView:null
        }
    }

    buttonPress=(type)=>{
        const {keyboardHide}=this.props
        const {onPressType}=this.state
        let messageToolView=null
        if(keyboardHide){
            keyboardHide()
        }
        switch (type){
            case 1:
                messageToolView=<VoiceOne/>
                break
        }

        if(type==onPressType){
            this.setState({
                onPressType:onPressType==0?type:0,
                messageToolView:onPressType==0?messageToolView:null
            })
        }else {
            this.setState({
                onPressType:type,
                messageToolView
            })
        }


    }

    resetButton=()=>{
        this.setState({
            onPressType:0,
            messageToolView:null
        })
    }
    render(){
         const {onPressType,messageToolView}=this.state
        const {animationType}=this.props
        return(
            <View>
            <View style={styles.container}>
            <ToolsButton normalIcon={imgs.voice} selectedIcon={imgs.voiceSelect} selected={onPressType==1} onPress={()=>this.buttonPress(1)}/>
            <ToolsButton normalIcon={imgs.picture} selectedIcon={imgs.pictureSelect} selected={onPressType==2} onPress={()=>this.buttonPress(2)}/>
            <ToolsButton normalIcon={imgs.camera} selectedIcon={imgs.cameraSelect} selected={onPressType==3} onPress={()=>this.buttonPress(3)}/>
            <ToolsButton normalIcon={imgs.emoticon} selectedIcon={imgs.emoticonSelect}  selected={onPressType==4} onPress={()=>this.buttonPress(4)}/>
            <ToolsButton normalIcon={imgs.add} selectedIcon={imgs.addSelect} selected={onPressType==5} onPress={()=>this.buttonPress(5)}/>
        </View>
                <AnimationContainer animationType={animationType}>
                    {messageToolView}
                </AnimationContainer>
            </View>
                )
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