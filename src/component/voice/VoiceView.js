import React, {Component} from 'react';

import {
    View,
    StyleSheet,
    TouchableOpacity,
    Image,
    Text,
    PanResponder,
    Animated,
    LayoutAnimation
} from 'react-native'
import ModeView from '../../widget/ModeView'
import {styles} from '../../styles/messageButtomTool'
import {stylesVoice} from './styles'
import * as imgs from "../../images";
import {windowHeight,windowWidth} from '../../utils/utils'
import _ from 'lodash'
import Colors from "../../utils/Colors";
import {VOICE_MAX_SIZE,VOICE_MIN_SIZE}from './config'
export default class VoiceView extends Component {

    constructor() {
        super()
        this._panResponder = undefined
        this.state = {
            leftBtn: {
                width: VOICE_MIN_SIZE,
                height: VOICE_MIN_SIZE,
                oldOffset: 0
            },
            rightBtn: {
                width: VOICE_MIN_SIZE,
                height: VOICE_MIN_SIZE,
                oldOffset:0

            },
            pan: new Animated.ValueXY(),
            textTip:""

        }
        this.X = windowWidth/2
        this.Y = 87
        this.LEFT_X = 37.5
        this.LEFT_Y = 122.5
        this.RIGHT_X = windowWidth-37.5
        this.RIGHT_Y = 122.5
        this.distance=0
    }

    componentDidMount(){
        this.distance = Math.sqrt(Math.pow((this.LEFT_X - this.X), 2) + Math.pow((this.LEFT_Y - this.Y), 2)) - 40
        const {leftBtn,rightBtn}=this.state

        this.setState({
            leftBtn:_.assign(leftBtn,{oldOffset:this.distance}),
            rightBtn:_.assign(rightBtn,{oldOffset:this.distance})
        })
        Animated.spring(
            this.state.pan,         // Auto-multiplexed
            {
                duration: 750,
                create: {
                    duration: 300,
                    type: LayoutAnimation.Types.easeInEaseOut,
                    property: LayoutAnimation.Properties.opacity,
                },
                update: {
                    type: LayoutAnimation.Types.spring,
                    springDamping: 0.6,
                },
            }
        ).start();
    }

    componentWillMount() {
        this._panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
            onMoveShouldSetPanResponder: (evt, gestureState) => true,
            onMoveShouldSetPanResponderCapture: (evt, gestureState) => {
                return true
            },

            onPanResponderGrant: (evt, gestureState) => {
                // 开始手势操作。给用户一些视觉反馈，让他们知道发生了什么事情！

                // gestureState.{x,y} 现在会被设置为0
            },
            onPanResponderMove: (evt, gestureState) => {

                let R = 40
                let {pageX, pageY} = evt.nativeEvent


                let newPageY=windowHeight-pageY
                let xOffset = pageX - this.X
                let yOffset = newPageY - this.Y
                let newR = Math.sqrt(Math.pow(xOffset, 2) + Math.pow(yOffset, 2))
                let offset = 0
                if (newR > R) {
                    if (xOffset < 0) {

                        let{oldOffset,width,height}=this.state.leftBtn
                        let result=Math.sqrt(Math.pow((this.LEFT_X - pageX), 2) + Math.pow((this.LEFT_Y - newPageY), 2))
                        offset = oldOffset - result
                         let newWidth=width+offset/3
                        if(newWidth>=VOICE_MAX_SIZE||result<=VOICE_MAX_SIZE/2){
                            this.setState({
                                leftBtn:{width:VOICE_MAX_SIZE,
                                    height:VOICE_MAX_SIZE,
                                    oldOffset:result,
                                    backgroundColor:Colors.gray
                                },
                                textTip:"松手试听"
                            })
                        }else if(newWidth<=VOICE_MIN_SIZE) {

                            this.setState({
                                leftBtn: {
                                    width: VOICE_MIN_SIZE,
                                    height: VOICE_MIN_SIZE,
                                    oldOffset:this.distance,
                                    backgroundColor:Colors.white
                                },
                                textTip:""

                            })
                        }else {
                            this.setState({
                                leftBtn:{width:newWidth,
                                    height:newWidth,
                                    oldOffset:result,
                                    backgroundColor:Colors.white
                                },
                                textTip:""
                            })
                        }

                    } else {
                        let{oldOffset,width}=this.state.rightBtn
                        let result=Math.sqrt(Math.pow((this.RIGHT_X- pageX), 2) + Math.pow((this.RIGHT_Y - newPageY), 2))
                        offset = oldOffset - result
                        let newWidth=width+offset/3

                        console.log(newWidth)
                        // if(result>=resultR){

                        if(newWidth>=VOICE_MAX_SIZE||result<=VOICE_MAX_SIZE/2){
                            this.setState({
                                rightBtn:{width:VOICE_MAX_SIZE,
                                    height:VOICE_MAX_SIZE,
                                    oldOffset:result,
                                    backgroundColor:Colors.gray,
                                },
                                textTip:"松手取消发送"
                            })

                        }else if(newWidth<=VOICE_MIN_SIZE) {

                            this.setState({
                                rightBtn: {
                                    width: VOICE_MIN_SIZE,
                                    height: VOICE_MIN_SIZE,
                                    oldOffset:this.distance,
                                    backgroundColor:Colors.white
                                },
                                textTip:""
                            })
                        }else {
                            this.setState({
                                rightBtn:{width:newWidth,
                                    height:newWidth,
                                    oldOffset:result,
                                    backgroundColor:Colors.white
                                },
                                textTip:""
                            })
                        }


                    }
                }

            },
            onPanResponderTerminationRequest: (evt, gestureState) => true,
            onPanResponderRelease: (evt, gestureState) => {

                const {onVoicePressOut}=this.props
                this.setState({
                    leftBtn: {
                        width:VOICE_MIN_SIZE,
                        height: VOICE_MIN_SIZE,
                        oldOffset:this.distance,
                        backgroundColor:Colors.white
                    },
                    rightBtn: {
                        width: VOICE_MIN_SIZE,
                        height: VOICE_MIN_SIZE,
                        oldOffset:this.distance,
                        backgroundColor:Colors.white

                    }
                })

                if(onVoicePressOut){
                    onVoicePressOut()
                }
            },
            onPanResponderTerminate: (evt, gestureState) => {
                // 另一个组件已经成为了新的响应者，所以当前手势将被取消。
            },

        });
    }

    render() {
        const{
            leftBtn,rightBtn,pan,textTip
        } =this.state
        return (
            <View  {...this._panResponder.panHandlers} style={styles.container}>
                <View style={stylesVoice.arcContainer}>
                    <View style={stylesVoice.arc}/>
                </View>
                <View
                    style={stylesVoice.btnContainer}>
                    <View style={stylesVoice.btnCircleContainer}>
                        <TouchableOpacity
                        >
                            <View style={[stylesVoice.btnCircle,{width:leftBtn.width,height:leftBtn.height,borderRadius:leftBtn.height/2,backgroundColor:leftBtn.backgroundColor}]}>
                                <Image source={imgs.camera} style={stylesVoice.btnIcon}/>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={stylesVoice.btnCircleContainer}>
                        <TouchableOpacity
                        >
                            <View style={[stylesVoice.btnCircle,{width:rightBtn.width,height:rightBtn.height,borderRadius:rightBtn.height/2,backgroundColor:rightBtn.backgroundColor}]}>
                                <Image source={imgs.camera} style={stylesVoice.btnIcon}/>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                {_.isEmpty(textTip)&&<View style={stylesVoice.countDownContainer}>
                    <View style={stylesVoice.dashedLine}/>
                    <Text>0:00</Text>
                    <View style={stylesVoice.dashedLine}/>
                </View>}
                {!_.isEmpty(textTip)&&<View style={stylesVoice.countDownContainer}>

                    <Text>{textTip}</Text>

                </View>}
                <TouchableOpacity
                    activeOpacity={1}

                >
                    <Animated.View style={[stylesVoice.button,pan.getLayout()]}>

                    <Image source={imgs.voiceButton} style={stylesVoice.image}/>
                    </Animated.View>
                </TouchableOpacity>
            </View>)
    }
}