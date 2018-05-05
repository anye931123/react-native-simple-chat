import React,{Component} from "react";
import {
    View,
    Image,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import * as imgs from '../images';
import ToolsButtom from './ToolsButtom';
export default class MessageTools extends Component{

    constructor(){
        super()
        this.state={

        }
    }

    render(){
        // const {}=this.props
        return(<View style={styles.container}>
            <ToolsButtom normalIcon={imgs.voice} selectedIcon={imgs.voiceSelect} />
            <ToolsButtom normalIcon={imgs.picture} selectedIcon={imgs.pictureSelect} />
            <ToolsButtom normalIcon={imgs.camera} selectedIcon={imgs.cameraSelect} />
            <ToolsButtom normalIcon={imgs.emoticon} selectedIcon={imgs.emoticonSelect} />

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