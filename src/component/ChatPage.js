import React,{Component}from 'react';
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
import Colors from "../utils/Colors";
import CheckImagesMode from './CheckImagesMode'
import FlatListView from '../widget/FlatListView'
const listData=[{img:imgs.avatarImg,
    message:"额外佛微微服" ,
    userId:1
},{img:imgs.avatarImg,
    message:"额外佛微微服务收费为服务费卫生服务" ,
    userId:1
},{
    message:"额外佛微微服务收费为服务费卫生服放水电费水电费的说法是的范德萨发水电费水电费水电费水电费水电费水电费是的发送到" ,
    userId:2,
    userName:"小明"
},{img:imgs.avatarImg,
    message:"额外佛微为服务费卫生服务" ,
    userId:1
},{img:imgs.avatarImg,
    message:"额外佛微微服务收费为服务费卫生服务" ,
    userId:1
},{img:imgs.avatarImg,
    message:"额外佛微微服卫生服务" ,
    userId:1
},{img:imgs.avatarImg,
    message:"额" ,
    userId:1
},{img:imgs.avatarImg,
    message:"额外佛微微服务收费为服务费卫生服放水电费水电费的说法是的范德萨发水电费水电费水电费水电费水电费水电费是的发送到" ,
    userId:1
},{img:imgs.avatarImg,
    message:"额外" ,
    userId:1
},{
    message:"额外佛微微服务收费为服务费卫生服放水电费水电费的说法是的范德萨发水电费水电费水电费水电费水电费水电费是的发送到" ,
    userId:2,
    userName:"小明"
},{img:imgs.avatarImg,
    message:"额外佛微微服务收" ,
    userId:1
},{img:imgs.avatarImg,
    message:"额外佛微微服" ,
    userId:1
},{img:imgs.avatarImg,
    message:"额外佛微微服务收费为服务费卫生服务" ,
    userId:1
}]
let messagesAddress=new Set()
export default class ChatPage extends Component{

    constructor(){
        super()
        this.ds=new ListView.DataSource(
            {
                rowHasChanged: (r1, r2) => r1 !== r2
            })
        this.state={
            keyboardHeight:0,
        }
    }
    _keyboardDidShow=(e)=>{
        this.setState({
            keyboardHeight:e.endCoordinates.height,
        })
        this.refs.messageList.scrollTo({y:0,x:0,animated:false})
    }

    _keyboardHide=()=>{
        Keyboard.dismiss()
    }

    _keyboardWillHide=(e)=>{
        this.setState({
            keyboardHeight:0
        })

    }

    componentWillMount() {
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
        this.keyboardDidHideListener = Keyboard.addListener('keyboardWillHide', this._keyboardWillHide);
    }

    componentWillReceiveProps(nextProps) {

        const {messages}=nextProps
        messagesAddress.clear()
        let messagesLength=messages.length
        while ((messagesLength=messagesLength-7)>0){
            messagesAddress.add(messagesLength)
        }

        this.setState({
            data:nextProps.data
        })
    }

    componentWillUnmount() {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }
    renderRow =(data,sectionId,rowId)=>{
        const { messages,
            myNameShow,  //是否显示自己的名字
            userNameShow,  //是否显示别人的名字
            myId,          //我的id 用户id
            avatarStyle,    //头像样式  {left:{},right:{}} 左右头像样式
            bubbleColor ,      //气泡颜色{right:Colors.red,left:Colors.blue}
            timeStyle,         //时间标签容器样式
            timeTextStyle      //时间标签字体样式
        }=this.props
        let messagesLength=messages.length
        let rowAddress=1+parseInt(rowId)
        let timeShow=false
        if(messagesLength==rowAddress){
            timeShow=true
        }else {
            timeShow=messagesAddress.has(rowAddress)

        }
        return  <Message
            avatarStyle={avatarStyle}
            data={data}
            bubbleColor={bubbleColor}
            myId={myId}
            timeShow={timeShow}
            myNameShow={myNameShow}
            userNameShow={userNameShow}
            timeStyle={timeStyle?timeStyle:{}}
            timeTextStyle={timeTextStyle?timeTextStyle:{}}
            checkImageFn={this._checkImageFn}
        />
    }

    _checkImageFn=(images,index)=>{

        this.refs.CheckImagesMode.setModalVisible(true,images,index)
    }

    sendPress=(message)=>{
        const {sendFn}=this.props
        if(sendFn){
            sendFn(message)
        }
        this.refs.messageList.scrollTo({y:0,x:0,animated:true})
    }
    sendImageMessagesFn=(images)=>{
        const {sendImageMessagesFn}=this.props
        if(sendImageMessagesFn){
            sendImageMessagesFn(images)
        }

        this.refs.messageList.scrollTo({y:0,x:0,animated:true})
    }
    render(){
        const {
            messages,
            textInputStyle,
            textInputProps,
            animationType,
            sendImageMessagesFn
        }=this.props
        const {keyboardHeight}=this.state
        let dataSource = this.ds.cloneWithRows(messages)
        return(
            <View style={styles.container}>

                <View style={{flex:1,transform:[{rotateX: '180deg'}]}}>

                   <ListView
                       ref={'messageList'}
                       dataSource={dataSource}
                       renderRow={this.renderRow}
                       enableEmptySections={true}
                   />

                </View>
                <Animated.View style={{marginBottom: Platform.select({
                        android:0,
                        ios:keyboardHeight
                    })}}>
                <Footer textInputStyle={textInputStyle}
                        textInputProps={textInputProps}
                        animationType={animationType }
                        sendPress={this.sendPress}
                        keyboardHide={this._keyboardHide}
                        sendImageMessagesFn={sendImageMessagesFn}
                        checkImageFn={this._checkImageFn}

                />
                </Animated.View>
                <CheckImagesMode ref={'CheckImagesMode'}/>
            </View>
        )
    }

}
