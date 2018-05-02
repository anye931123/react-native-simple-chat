import React,{Component} from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native';

import Colors from '../utils/Colors';
export default class Send extends Component{

    constructor(){
        super()
    }

    render(){
        const {sendStatus,sendStyle,sendTextStyle}= this.props
        return(
            <View style={styles.container}>
                <TouchableOpacity
                    style={[styles.sendBtn,sendStyle,sendStatus&&{backgroundColor:Colors.gray}]}
                >
                    <Text style={[styles.sendBtnText,sendTextStyle]}>发送</Text>
                </TouchableOpacity>
            </View>

        )
    }

}

const styles=StyleSheet.create({
    container:{
        marginLeft:5
    },
    sendBtn:{
        justifyContent:'center',
        alignItems:'center',
        padding:8,
        borderColor:Colors.transparent,
        borderWidth:1,
        borderRadius:5,
        backgroundColor:Colors.blue
    },
    sendBtnText:{
       fontSize:16,
       color:Colors.white
    }
})