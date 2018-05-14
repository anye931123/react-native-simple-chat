import React, {Component} from 'react';
import {
    View,
    ListView,
    Keyboard,
    Animated,
    Platform
} from 'react-native';

import {styles} from '../styles/chatStyle';
import Footer from './Footer';
import Message from './Message';

import * as imgs from '../images';
import CheckImagesMode from './CheckImagesMode'
import PopDialog from '../widget/PopDialog'
import FlatListView from '../widget/FlatListView';
import _ from 'lodash'
import {QQStyle} from '../config/styleIndex'

const listData = [{
    img: imgs.avatarImg,
    message: "额外佛微微服",
    userId: 1
}, {
    img: imgs.avatarImg,
    message: "额外佛微微服务收费为服务费卫生服务",
    userId: 1
}, {
    message: "额外佛微微服务收费为服务费卫生服放水电费水电费的说法是的范德萨发水电费水电费水电费水电费水电费水电费是的发送到",
    userId: 2,
    userName: "小明"
}, {
    img: imgs.avatarImg,
    message: "额外佛微为服务费卫生服务",
    userId: 1
}, {
    img: imgs.avatarImg,
    message: "额外佛微微服务收费为服务费卫生服务",
    userId: 1
}, {
    img: imgs.avatarImg,
    message: "额外佛微微服卫生服务",
    userId: 1
}, {
    img: imgs.avatarImg,
    message: "额",
    userId: 1
}, {
    img: imgs.avatarImg,
    message: "额外佛微微服务收费为服务费卫生服放水电费水电费的说法是的范德萨发水电费水电费水电费水电费水电费水电费是的发送到",
    userId: 1
}, {
    img: imgs.avatarImg,
    message: "额外",
    userId: 1
}, {
    message: "额外佛微微服务收费为服务费卫生服放水电费水电费的说法是的范德萨发水电费水电费水电费水电费水电费水电费是的发送到",
    userId: 2,
    userName: "小明"
}, {
    img: imgs.avatarImg,
    message: "额外佛微微服务收",
    userId: 1
}, {
    img: imgs.avatarImg,
    message: "额外佛微微服",
    userId: 1
}, {
    img: imgs.avatarImg,
    message: "额外佛微微服务收费为服务费卫生服务",
    userId: 1
}]


let DIALOG_POP_CONFIG = [{
    icon: imgs.copy,
    text: "复制",
    onPress: () => {
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
let messagesAddress = new Set()
export default class ChatPage extends Component {

    constructor() {
        super()
        this.ds = new ListView.DataSource(
            {
                rowHasChanged: (r1, r2) => r1 !== r2
            })
        this.state = {
            keyboardHeight: 0,
            visible: false,
            dialogY: 0,
            dialogX: 0,
            isMessageToolShow:0
        }
    }


    _keyboardDidShow = (e) => {
        this.setState({
            keyboardHeight: e.endCoordinates.height,
            isMessageToolShow:0
        })

    }




    _keyboardWillHide = (e) => {
        this.setState({
            keyboardHeight: 0,
        })

    }

    componentWillMount() {
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
        this.keyboardWillShowListener = Keyboard.addListener('keyboardWillShow', this._keyboardWillShow);
        this.keyboardwillHideListener = Keyboard.addListener('keyboardWillHide', this._keyboardWillHide);
    }

    componentWillReceiveProps(nextProps) {

        const {messages} = nextProps
        messagesAddress.clear()
        let messagesLength = messages.length
        while ((messagesLength = messagesLength - 7) > 0) {
            messagesAddress.add(messagesLength)
        }

        this.setState({
            data: nextProps.data
        })
    }

    componentWillUnmount() {
        this.keyboardDidShowListener.remove();
        this.keyboardwillHideListener.remove();
        this.keyboardWillShowListener.remove();
    }

    showPopDialog = (message, x, y) => {
        if (message) {
            this.setState({
                dialogY: y,
                dialogX: x,
                visible: true

            })
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
            timeStyle,         //时间标签容器样式
            timeTextStyle      //时间标签字体样式
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
            {...QQStyle}
            data={item}
            myId={myId}
            timeShow={timeShow}
            myNameShow={myNameShow}
            userNameShow={userNameShow}
            checkImageFn={this._checkImageFn}
            showDialogPopFn={this.showPopDialog}

        />
    }


    _checkImageFn = (showToolBar, images, index) => {

        this.refs.CheckImagesMode.setModalVisible(true, images, index, showToolBar)
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
            messages,
            textInputStyle,
            textInputProps,
            sendImageMessagesFn
        } = this.props

        const {
            keyboardHeight,
            dialogX,
            dialogY,
            visible,
            isMessageToolShow
        } = this.state
        return (
            <View style={QQStyle.chatStyle}>

                <View style={{flex: 1,}}>

                    <FlatListView
                        ref={'messageList'}
                        horizontal={false}
                        data={_.clone(messages)}
                        renderItem={this.renderRow}
                        numColumns={1}
                        inverted={true}

                    />

                </View>
                <View style={{
                    marginBottom: Platform.select({
                        android:isMessageToolShow,
                        ios: keyboardHeight
                    })
                }}>
                    <Footer
                        ref={"footer"}
                        textInputStyle={textInputStyle}
                        textInputProps={textInputProps}
                        sendPress={this.sendPress}
                        sendImageMessagesFn={sendImageMessagesFn}
                        showMessageTool={this.showMessageTools}
                        checkImageFn={this._checkImageFn}
                        {...QQStyle}

                    />
                </View>
                <PopDialog visible={visible}
                           popStyle={{top: dialogY}}
                           triangleStyle={{left: dialogX}}
                           showDialogPopFn={this.showPopDialog}
                           PopDialogConfig={DIALOG_POP_CONFIG}

                />

                <CheckImagesMode ref={'CheckImagesMode'}/>
            </View>
        )
    }

}


