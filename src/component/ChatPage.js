import React,{Component}from 'react';
import {
    View,
  ListView
} from 'react-native';

import {styles} from '../styles/chatStyle';
import Footer from './Footer';
import Message from './Message';

import * as imgs from '../images';
import Colors from "../utils/Colors";

export default class ChatPage extends Component{

    constructor(){
        super()
        this.ds=new ListView.DataSource(
            {
                rowHasChanged: (r1, r2) => r1 !== r2
            })
        this.state={

        }
    }


    renderRow =(data)=>{
        return  <Message
            data={data}
            bubbleColor={{right:Colors.red,left:Colors.blue}}
            myId={2}
        />
    }

    sendPress=(message)=>{

    }
    render(){
        // const {listData}=this.props

       let listData=[{img:imgs.avatarImg,
           message:"额外佛微微服" ,
           userId:1
       },{img:imgs.avatarImg,
           message:"额外佛微微服务收费为服务费卫生服务" ,
           userId:1
       },{img:imgs.avatarImg,
           message:"额外佛微微服务收费为服务费卫生服放水电费水电费的说法是的范德萨发水电费水电费水电费水电费水电费水电费是的发送到" ,
           userId:2
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
    },{img:imgs.avatarImg,
           message:"额外佛微微服务收费为服务费卫生服放水电费水电费的说法是的范德萨发水电费水电费水电费水电费水电费水电费是的发送到" ,
           userId:2
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
        let dataSource = this.ds.cloneWithRows(listData)
        return(
            <View style={styles.container}>

                <View style={{flex:1}}>

                   <ListView
                       dataSource={dataSource}
                       renderRow={this.renderRow}
                       enableEmptySections={true}
                   />

                </View>

                <Footer sendPress={}/>

            </View>
        )
    }

}
