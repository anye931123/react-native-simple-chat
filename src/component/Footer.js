import React,{Component} from'react';
import {
    View,
    TextInput,
    StyleSheet,
    Keyboard,
    KeyboardAvoidingView,
    Platform
} from 'react-native';
import Colors from '../utils/Colors';
import InputTool from './InputTool';
import Send from './Send';
export  default  class Footer extends Component{
    constructor(){
        super()
    }



    render(){
        return(
            <KeyboardAvoidingView behavior={Platform.select({
                android:'height',
                ios:'position'
            })}

    >
                <View style={styles.container}
                >
                <InputTool
                    onTextChanged={()=>{}}
                    onInputSizeChanged={()=>{}}
                    multiline={true}

                />
                <Send

                />
                </View>
            </KeyboardAvoidingView>
            )
    }
}

const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'flex-end',
        padding:7,
        backgroundColor:Colors.bg
    },

})