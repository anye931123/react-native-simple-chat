import React,{Component} from 'react'
import {
    Modal,
    TouchableWithoutFeedback,
    View,
} from 'react-native'

export default class ModeView extends Component{

    // constructor() {
    //     super()
    //     this.state = {
    //         modalVisible:false,
    //
    //     }
    // }
    //
    // setModalVisible=(visible)=> {
    //
    //     this.setState({
    //         modalVisible: visible,
    //     });
    // }
    render(){

        const {style,children,visible,modePress}=this.props
        return(<Modal
            animationType={'none'}
            transparent={true}
            visible={visible}
        >
            <TouchableWithoutFeedback onPress={modePress}>
                <View style={style}>
                    {children}
                </View>
            </TouchableWithoutFeedback>
        </Modal>)
    }
}

