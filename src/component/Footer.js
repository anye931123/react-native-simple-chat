import React,{Component} from'react';
import {
    View,
    StyleSheet,
    KeyboardAvoidingView,
    Platform,
    TouchableOpacity,
} from 'react-native';
import Colors from '../utils/Colors';
import InputTool from './InputTool';
import Send from './Send';
import MessageTools from './MessageTools';
export  default  class Footer extends Component{
    constructor(){
        super()
        this.state={
            message:'',
            sendStatus:false,
            layoutStatus:false
        }
    }



    _onChangedText=(text) => {

        if(text.isEmpty){
            this.setState({
                sendStatue:false,
            })

            return
        }
        this.setState({
            message: text,
            sendStatus:true
        })
    }

    render(){
        const {message,sendStatus,layoutStatus }=this.state
        const {sendPress,textInputStyle,textInputProps}=this.props
        return(
            <KeyboardAvoidingView
                behavior={Platform.select({
                android:'padding',
                ios:'position'
            })}

    >
                <View>
                <View style={[styles.container]}
                      onLayout={({nativeEvent: { layout: {x, y, width, height}}})=>{
                          if(height>=158&&!layoutStatus){
                              this.setState({
                                  layoutStatus:true
                              })
                          }else if(height<158&&layoutStatus) {
                              this.setState({
                                  layoutStatus:false
                              })

                          }

                      }}
                >
                <InputTool
                    onTextChanged={this._onChangedText}
                    onInputSizeChanged={()=>{}}
                    multiline={true}
                    text={message}
                    textInputStyle={[textInputStyle,layoutStatus&&{height:153}]}
                    textInputProps={textInputProps}
                />
                <Send
                    sendPress={()=>{
                        sendPress(message)
                        this.setState({
                            message:'',
                            sendStatus:false,
                            layoutStatus:false
                        })

                    }}
                    sendStatus={sendStatus}
                />
                </View>
                {/*<MessageTools/>*/}
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