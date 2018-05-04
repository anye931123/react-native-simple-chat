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
        this.state={
            message:'',
            sendStatus:false
        }
    }



    _onChangedText=(text) => {

        if(text.isEmpty){
            this.setState({
                sendStatue:false
            })

            return
        }
        this.setState({
            message: text,
            sendStatus:true
        })
    }

    render(){
        const {message,sendStatus }=this.state
        const {sendPress,textInputStyle,textInputProps}=this.props
        return(
            <KeyboardAvoidingView
                behavior={Platform.select({
                android:'padding',
                ios:'position'
            })}

    >
                <View style={styles.container}
                >
                <InputTool
                    onTextChanged={this._onChangedText}
                    onInputSizeChanged={()=>{}}
                    multiline={true}
                    text={message}
                    textInputStyle={textInputStyle}
                    textInputProps={textInputProps}
                />
                <Send
                    sendPress={()=>{
                        sendPress(message)
                        this.setState({
                            message:'',
                            sendStatus:false
                        })

                    }}
                    sendStatus={sendStatus}
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