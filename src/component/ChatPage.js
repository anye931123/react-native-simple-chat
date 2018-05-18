import React, {Component} from 'react';
import {Keyboard, Platform, View} from 'react-native';
import Footer from './Footer';
import Message from './Message';
import CheckImagesMode from './CheckImagesMode'
import PopDialog from '../widget/PopDialog'
import FlatListView from '../widget/FlatListView';
import _ from 'lodash'
import {STYLES} from '../config'


let messagesAddress = new Set()
export default class ChatPage extends Component {

    constructor(props) {
        super(props)
        this.selectStyle=props.styleType&&STYLES[props.styleType]?STYLES[props.styleType]:STYLES['QQ']
        this.globalStyle=_.defaultsDeep(props.style,this.selectStyle)
        this.state = {
            keyboardHeight: 0,
            visible: false,
            dialogY: 0,
            dialogX: 0,
            isMessageToolShow:0,
            messages:props.messages,
            rowId:undefined,
            message:undefined
        }
    }


    _keyboardDidShow = (e) => {
        this.setState({
            isMessageToolShow:0
        })

    }

    _keyboardWillHide = (e) => {
        this.setState({
            keyboardHeight: 0,
        })

    }
    _keyboardWillShow=(e)=>{
        this.setState({
            keyboardHeight: e.endCoordinates.height,
        })
    }

    componentWillMount() {
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
        this.keyboardWillShowListener = Keyboard.addListener('keyboardWillShow', this._keyboardWillShow);
        this.keyboardwillHideListener = Keyboard.addListener('keyboardWillHide', this._keyboardWillHide);
    }
    componentWillUnmount() {
        this.keyboardDidShowListener.remove();
        this.keyboardwillHideListener.remove();
        this.keyboardWillShowListener.remove();
    }
    componentWillReceiveProps(nextProps) {
        const {messages} = nextProps

        messagesAddress.clear()

        let messagesLength = messages.length
        while ((messagesLength = messagesLength - 7) > 0) {
            messagesAddress.add(messagesLength)
        }

        this.setState({
            messages:nextProps.messages
        })
    }



    showPopDialog = (message,rowId, x, y) => {
        const {popToolButtons,onPopToolShowFn}=this.props
        if(!popToolButtons||popToolButtons.length==0){
            return
        }
        if (message) {
            this.setState({
                dialogY: y,
                dialogX: x,
                visible: true,



            })

            onPopToolShowFn&&onPopToolShowFn( message, rowId)
        } else {
            this.setState({
                visible: false
            })
        }

    }

    renderRow = ({item, index}) => {
        const {
            messages,
            myNameShow,  //是否显示自己的名字
            userNameShow,  //是否显示别人的名字
            myId,          //我的id 用户id
        } = this.props
        let messagesLength = messages.length
        let rowAddress = 1 + parseInt(index)
        let timeShow = false
        if (messagesLength == rowAddress) {
            timeShow = true
        } else {
            timeShow = messagesAddress.has(rowAddress)

        }
        return <Message
            {...this.globalStyle}
            data={item}
            myId={myId}
            rowId={index}
            timeShow={timeShow}
            myNameShow={myNameShow}
            userNameShow={userNameShow}
            checkImageFn={this._checkImageFn}
            showDialogPopFn={this.showPopDialog}

        />
    }


    _checkImageFn = (images, index) => {

        this.refs.CheckImagesMode.setModalVisible(true, images, index)
    }

    sendPress = (message) => {
        const {sendFn} = this.props
        if (sendFn) {
            sendFn(message)
        }
        this.refs.messageList._scrollToOffset({y: 0, x: 0, animated: true})
    }
    sendImageMessagesFn = (images) => {
        const {sendImageMessagesFn} = this.props
        if (sendImageMessagesFn) {
            sendImageMessagesFn(images)
        }

        this.refs.messageList._scrollToOffset({y: 0, x: 0, animated: true})
    }

    showMessageTools = (view) => {
        if(view!=null){
            this.setState({ isMessageToolShow:0.1})
        }else {
            this.setState({ isMessageToolShow:0})
        }

    }

    render() {
        const {
            textInputProps,
            inverted=true,
            popToolButtons,
            messageTools
        } = this.props


        const {
            keyboardHeight,
            dialogX,
            dialogY,
            visible,
            isMessageToolShow,
            messages,
            message,
            rowId
        } = this.state

        return (
            <View style={this.globalStyle.chatStyle}>
                 <FlatListView
                        ref={'messageList'}
                        horizontal={false}
                        data={_.clone(messages)}
                        renderItem={this.renderRow}
                        numColumns={1}
                        inverted={inverted}

                    />
                <View style={{
                    marginBottom: Platform.select({
                        android:isMessageToolShow,
                        ios: keyboardHeight
                    })
                }}>
                    <Footer
                        ref={"footer"}
                        messageTools={messageTools}
                        textInputProps={textInputProps}
                        sendMessageFn={this.sendPress}
                        showMessageTool={this.showMessageTools}
                        {...this.globalStyle}

                    />
                </View>
                <PopDialog visible={visible}
                           popStyle={{top: dialogY}}
                           triangleStyle={{left: dialogX}}
                           showDialogPopFn={this.showPopDialog}
                           popToolButtons={popToolButtons}
                           {...this.globalStyle}


                />

                <CheckImagesMode ref={'CheckImagesMode'}/>
            </View>
        )
    }

}


