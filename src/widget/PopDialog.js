import React, {Component} from 'react'
import {
    View,
    StyleSheet,

} from 'react-native';
import Colors from '../utils/Colors'
import {windowHeight, windowWidth} from '../utils/utils'
import ModeView from './ModeView'
import _ from 'lodash'
import PopDialogButton from './PopDialogButton'

export default class PopDialog extends Component {


    render() {
        const {popStyle, showDialogPopFn, triangleStyle, visible, PopDialogConfig, popDialogContainerStyle={},PopDialogButtonStyle} = this.props

        let pageX = triangleStyle.left
        let widthOffset = windowWidth - pageX
        let btnNum = PopDialogConfig.length
        let btnContainerWidth = btnNum * 45

        let position = {}
        if (widthOffset > btnContainerWidth) {
            console.log('position1')
            if (pageX >= btnContainerWidth) {
                position = {marginLeft: pageX - btnContainerWidth / 2 + 2}
            } else {
                position = {marginLeft: 20}

            }

        } else {
            position = {marginLeft: pageX - btnContainerWidth + widthOffset / 2}
            }

        return (


            <ModeView style={styles.container} visible={visible} modePress={() => showDialogPopFn(false)}>
                <View style={[styles.popContainer, popStyle, {top: popStyle.top - 40}]}>

                    <View style={[styles.btnContainer,popDialogContainerStyle, {width: btnContainerWidth}, position]}>
                        {_.map(PopDialogConfig, (value, index) => <PopDialogButton
                            style={PopDialogButtonStyle}
                            key={index}
                            icon={value.icon}
                            onPress={value.onPress}
                            text={value.text}
                        />)}
                    </View>

                    <View style={[styles.triangle,{backgroundColor: popDialogContainerStyle.backgroundColor||Colors.black,}, triangleStyle,{left: triangleStyle.left - 3}]}/>
                </View>
            </ModeView>

        )
    }
}

const styles = StyleSheet.create({

        container: {
            flex: 1,


        },
        popContainer: {
            position: 'absolute',
            width: windowWidth,
            paddingBottom: 5

        },

        triangle: {
            position: "absolute",
            bottom: 0,
            height: 10,
            width: 10,
            transform: [{rotateZ: '45deg'}],

        },
        btnContainer: {

            flexDirection: 'row',
            height: 35,
            backgroundColor: Colors.black,
            borderRadius: 4

        }
    }
)
