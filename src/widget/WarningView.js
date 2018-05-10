import React,{Component} from 'react'
import {
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native'
import Colors from "../utils/Colors";

export default class WarningView extends Component{

    render(){

        const {warningContainerStyle,warningTextStyle}=this.props
        return(
            <TouchableOpacity
                style={warningContainerStyle}
            >
                <Text style={warningTextStyle}>!</Text>
            </TouchableOpacity>
        )
    }

}

const styles=StyleSheet.create({
    warning:{

    },

    waringText:{

    }
})