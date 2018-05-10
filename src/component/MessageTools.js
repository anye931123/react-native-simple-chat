import React, {Component} from "react";
import {
    View,
    Image,
    TouchableOpacity,
    StyleSheet,
    Keyboard
} from 'react-native';
import ToolsButton from './ToolsButton';
import AnimationContainer from './AnimationContainer';
import _ from 'lodash';
export default class MessageTools extends Component {

    constructor() {
        super()
        this.state = {
            onPressType: 0,
            messageToolView: null
        }
        this.type=0
        this.isExecute=false
        this.isShow=false
    }

    buttonPress = (type) => {
        this.type=type
        this.isExecute=true
        Keyboard.dismiss()
        if(this.isShow){
            return
        }
       this.showMessageTool()


    }

    showMessageTool=()=>{
        const { messageTools,showMessageTool} = this.props
        const {onPressType} = this.state
        let messageToolView = messageTools[this.type-1].messageToolView
        if (this.type == onPressType) {
            this.setState({
                onPressType: onPressType == 0 ? this.type : 0,
                messageToolView: onPressType == 0 ? messageToolView : null
            })
            if(onPressType == 0 ){

                if(showMessageTool){
                    showMessageTool(messageToolView)
                }
            }else {

                if(showMessageTool){
                    showMessageTool(null)
                }
            }
        } else {
            this.setState({
                onPressType: this.type,
                messageToolView
            })

            if(showMessageTool){
                showMessageTool(messageToolView)
            }

        }




        this.isExecute=false
    }
    _keyboardDidShow=()=>{
        this.isShow=true
    }
    _keyboardDidHide=()=>{
        this.isShow=false
        if(!this.isExecute){
            return
        }
        this.showMessageTool()



    }
    componentWillMount() {
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
    }

    componentWillUnmount() {
        this.keyboardDidHideListener.remove()
        this.keyboardDidShowListener.remove()
    }
    resetButton = () => {
        this.setState({
            onPressType: 0,
            messageToolView: null
        })
    }

    render() {
        const {onPressType, messageToolView} = this.state
        const {animation, messageTools} = this.props

        return (
            <View>
                <View style={styles.container}>
                    {_.map(messageTools,
                        (value, index) => <ToolsButton key={index}
                                                       {...value}
                                                       selected={onPressType == index + 1}
                                                       onPress={() => this.buttonPress(index + 1)}
                    />)
                    }

                </View>
                <AnimationContainer animation={animation}>
                    {messageToolView}
                </AnimationContainer>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingTop: 3,
        paddingBottom: 5
    },
    toolBtn: {
        flex: 1
    }

})