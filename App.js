import React, {Component} from 'react';
import {View} from 'react-native'
import {ChatPage,CheckImagesMode} from './src';
import * as imgs from "./appSrc/images";
import PopDialogButton from "./appSrc/PopDialogButton";
import _ from 'lodash'
import VoiceOne from "./appSrc/voice/VoiceOne";
import PictureGallery from "./appSrc/picture/PictureGallery";
import {windowWidth} from "./src/utils/utils";
import {styles} from "./src/styles/messageButtomTool";
import Colors from "./src/utils/Colors";

let DIALOG_POP_CONFIG = [{
    icon: imgs.copy,
    text: "复制",
    onPress: (message,rowId) => {
        console.log("HAHAHHAHA",message,rowId)
    }
},
    {
        icon: imgs.transpond,
        text: "转发",
        onPress: () => {
        }
    },
    {
        icon: imgs.collect,
        text: "收藏",
        onPress: () => {
        }
    },
    {
        icon: imgs.recall,
        text: "撤回",
        onPress: () => {
        }
    },
    {
        icon: imgs.deleteIcon,
        text: "删除",
        onPress: () => {
        }
    },
    {
        icon: imgs.multipleChoice,
        text: "多选",
        onPress: () => {
        }
    }
]


export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        };

        this.ws = new WebSocket("ws://192.168.1.165:8088")

        this.wsStatus = false

        this.messageTools = [{
            normalIcon: imgs.voice,
            selectedIcon: imgs.voiceSelect,
            messageToolView: <VoiceOne
                onVoicePressIn={() => {
                    console.log('voiceIn')
                }}
                onVoicePressOut={() => {
                    console.log("voiceOut")
                }}
            />
        },

            {
                normalIcon: imgs.picture,
                selectedIcon: imgs.pictureSelect,
                messageToolView: <PictureGallery
                    sendImageMessagesFn={this.sendImageMessagesFn}
                    checkImageFn={this._checkImageFn}
                    showToolBar={true}
                    {...{
                        galleryContainerStyle:[
                        styles.container,
                    {alignItems:'flex-start',width:windowWidth}
                        ],
                        galleryItemImageStyle:{
                        resizeMode: 'cover',
                        height:170,
                        width:80,},
                        selectCircleButtonStyle:{
                        selectCircleContainerStyle:{
                        position:'absolute',
                        top:4,
                        right:4,
                    },
                        commonStyle:{

                        alignItems: 'center',
                        marginRight: 5,
                        marginLeft: 5,
                        borderWidth: 1,
                        justifyContent: 'center',
                        width: 17,
                        height: 17,
                        borderRadius: 8.5
                    },
                        selectedFalseStyle: {
                        borderColor: Colors.gray,
                    },
                        selectedTrueStyle:{
                        borderColor: Colors.blue,
                        backgroundColor: Colors.blue
                    },
                        textStyle:{fontSize:12,
                        color:Colors.white}
                    }

                    }}
                />
            },
            {
                normalIcon: imgs.camera,
                selectedIcon: imgs.cameraSelect,

            },
            {
                normalIcon: imgs.emoticon,
                selectedIcon: imgs.emoticonSelect,
                messageToolView: <VoiceOne
                    onVoicePressIn={() => {
                        console.log('voiceIn')
                    }}
                    onVoicePressOut={() => {
                        console.log("voiceOut")
                    }}
                />
            },
            {
                normalIcon: imgs.add,
                selectedIcon: imgs.addSelect,
                messageToolView: <VoiceOne
                    onVoicePressIn={() => {
                        console.log('voiceIn')
                    }}
                    onVoicePressOut={() => {
                        console.log("voiceOut")
                    }}
                />
            }
        ]
    }


    componentDidMount() {
        console.log(this.ws)
        this.ws.addEventListener('open', (event) => {
            this.wsStatus = true
            console.log("webSocket连接成功！")
        })


        this.ws.addEventListener('message', (event) => {
            const {data} = this.state

            let message = {
                avatarImg:'http://dynamic-image.yesky.com/600x-/uploadImages/upload/20141120/qdyum2m0yqfpng.png',
                userName: '小花',
                userId: 3,
                message: event.data,
                time:new Date()
            }
            data.unshift(message)
            this.setState({
                data: data
            })

        })

        this.ws.addEventListener('close',(event)=>{
            let code=event.code;
            let reason=event.reason;
            let wasClean=event.wasClean
        })

        this.ws.addEventListener('error',(event)=>{

        })

    }

    componentWillUnmount() {

    }
    sendMessage = (message) => {

        const {data} = this.state
        let myMessage = {
            type:'user',
            userId:'000',
            userName: '小明',
            message: message,
            time:new Date(),
            messageState:0,
            rank:"群主"
        }

        data.unshift(myMessage)
        this.setState({
            data: data
        })

       if (this.wsStatus) {
            this.ws.send(JSON.stringify( myMessage))
         }
    }
    _checkImageFn = (images, index) => {

        this.refs.CheckImagesMode.setModalVisible(true, images, index)
    }

    sendImageMessagesFn=(images)=>{
        const {data} = this.state
        let myMessage = {
            type:'user',
            userId:'000',
            userName: '小明',
            images: images,
            time:new Date(),
            messageState:-1,
            rank:"群主"

        }

        data.unshift(myMessage)
        this.setState({
            data: data
        })
    }
        render() {
        const {data} = this.state
        return <View style={{flex:1}}>
            <ChatPage
                styleType={'QQ'}
                style={{
                    popDialogStyle:{
                        paddingTop:2,
                        paddingBottom:2
                    },
                    footerStyle:{
                        footerContainer:{
                            alignItems:"center",

                        },
                        messageToolContainerStyle:{
                            flexDirection: 'row',
                            paddingTop: 3,
                            paddingBottom: 5
                        },
                        // addIcon:imgs.add,
                        // addStyle:{
                        //     width:15,
                        //     height:15,
                        //     resizeMode:'contain'
                        // }
                    }
                }}
                popToolButtonsConfig={DIALOG_POP_CONFIG}
                popToolButton={PopDialogButton}
                messageTools={this.messageTools}
                sendFn={this.sendMessage}
                sendImageMessagesFn={this.sendImageMessagesFn}
                messages={data}
                myNameShow={true}
                userNameShow={true}
                myId={"000"}         //我的id 用户id
                inverted={true}

            />
            <CheckImagesMode ref={'CheckImagesMode'}/>
        </View>
    }
}