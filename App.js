import React, {Component} from 'react';
import ChatPage from './src/component/ChatPage';
import PictureGallery from "./src/component/picture/PictureGallery"
export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        };

        this.ws = new WebSocket("ws://192.168.1.165:8088")

        this.wsStatus = false
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
            messageState:0
        }

        data.unshift(myMessage)
        this.setState({
            data: data
        })

       if (this.wsStatus) {
            this.ws.send(JSON.stringify( myMessage))
         }
    }

    sendImageMessagesFn=(images)=>{
        const {data} = this.state
        let myMessage = {
            type:'user',
            userId:'000',
            userName: '小明',
            images: images,
            time:new Date(),
            messageState:-1

        }

        data.unshift(myMessage)
        this.setState({
            data: data
        })
    }
        render() {
        const {data} = this.state
        return <ChatPage
            sendFn={this.sendMessage}
            sendImageMessagesFn={this.sendImageMessagesFn}
            messages={data}
            myNameShow={false}
            userNameShow={true}
            myId={"0000"}         //我的id 用户id

        />
    }
}