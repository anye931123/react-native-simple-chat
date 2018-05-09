import React, {Component} from "react";
import {
    View,
    Image,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import ToolsButton from './ToolsButton';
import AnimationContainer from './AnimationContainer';
import _ from 'lodash';
export default class MessageTools extends Component {

    constructor() {
        super()
        this.state = {
            onPressType: 0,
            messageToolView: null
        }
    }

    buttonPress = (type) => {
        const {keyboardHide, messageTools} = this.props
        const {onPressType} = this.state
        let messageToolView = messageTools[type-1].messageToolView
        if (keyboardHide) {
            keyboardHide()
        }

        if (type == onPressType) {
            this.setState({
                onPressType: onPressType == 0 ? type : 0,
                messageToolView: onPressType == 0 ? messageToolView : null
            })
        } else {
            this.setState({
                onPressType: type,
                messageToolView
            })
        }


    }

    resetButton = () => {
        this.setState({
            onPressType: 0,
            messageToolView: null
        })
    }

    render() {
        const {onPressType, messageToolView} = this.state
        const {animation, messageTools} = this.props
        return (
            <View>
                <View style={styles.container}>
                    {_.map(messageTools,
                        (value, index) => <ToolsButton key={index}
                                                       {...value}
                                                       selected={onPressType == index + 1}
                                                       onPress={() => this.buttonPress(index + 1)}
                    />)
                    }

                </View>
                <AnimationContainer animation={animation}>
                    {messageToolView}
                </AnimationContainer>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingTop: 3,
        paddingBottom: 5
    },
    toolBtn: {
        flex: 1
    }

})