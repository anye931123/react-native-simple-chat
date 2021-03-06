import React, {PureComponent} from 'react';
import {StyleSheet, Text, TouchableOpacity, View,Image} from 'react-native';

import Colors from '../utils/Colors';

export default class Send extends PureComponent{

    constructor(){
        super()
    }

    render(){
        const {sendStatus,sendStyle,sendTextStyle,sendUnPressStyle,sendPress,addPress,addStyle,addIcon}= this.props
        return(
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={()=>{
                        if(sendStatus){
                            sendPress()
                            return
                        }
                        addStyle&&addPress()
                    }}
                    style={!sendStatus&&addStyle?{}:[styles.sendBtn,sendStyle,!sendStatus&&sendUnPressStyle]}
                >
                    {!sendStatus&&addStyle? <Image style={addStyle} source={addIcon}/>:
                        <Text style={[styles.sendBtnText,sendTextStyle]}>发送</Text>
                    }
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
        paddingLeft:10,
        paddingRight:10,
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