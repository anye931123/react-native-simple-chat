import React,{PureComponent} from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

import  moment from 'moment'
import Colors from '../utils/Colors'
moment.locale('zh-cn', {
    meridiem : function (hour, minute, isLowercase) {
        if (hour < 9) {
            return "早上";
        } else if (hour < 11 && minute < 30) {
            return "上午";
        } else if (hour < 13 && minute < 30) {
            return "中午";
        } else if (hour < 18) {
            return "下午";
        } else {
            return "晚上";
        }
    }
});

export default class TimeLabel extends PureComponent{

    constructor(){
        super()
        this.state={
            time:''
        }
    }

    componentWillMount() {
        const {time}=this.props

        let timeString=moment().calendar(time,{
            sameDay:'[今天]',
            lastDay:'[昨天]',
        })
        if(timeString==="今天"){
            this.setState({
                time:`今天 ${moment(time).format("a h:mm")}`
            })

        }else if(timeString==='昨天'){
            this.setState({
                time:`昨天 ${moment(time).format("a h:mm")}`
                }
            )
        }else {
            this.setState({
                time:moment(time).format('MM-DD ddd a h:mm')
            })
        }

        }



    render(){
        const {timeLabelContainerStyle,timeTextStyle}=this.props
        const {time} =this.state
        return (<View style={styles.container}>
            {time&&<View style={timeLabelContainerStyle}>
                <Text style={[styles.time,timeTextStyle]}>{time}</Text>
            </View>}
        </View>)

    }

}

const styles=StyleSheet.create({

    container:{
        flexDirection:'row',
        justifyContent:'center',

    },
    time:{
        fontSize:12,
        color:Colors.gray
    }
})

