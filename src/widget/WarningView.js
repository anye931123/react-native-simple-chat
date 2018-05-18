import React, {PureComponent} from 'react'
import {StyleSheet, Text, TouchableOpacity} from 'react-native'

export default class WarningView extends PureComponent{

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