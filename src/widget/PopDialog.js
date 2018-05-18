import React, {PureComponent} from 'react'
import {StyleSheet, View,} from 'react-native';
import Colors from '../utils/Colors'
import {windowWidth} from '../utils/utils'
import ModeView from './ModeView'


export default class PopDialog extends PureComponent {


    render() {
        const {popStyle, showDialogPopFn, triangleStyle,popToolButtons, visible, popDialogStyle={}} = this.props

        let pageX = triangleStyle.left
        let widthOffset = windowWidth - pageX
        let btnNum = popToolButtons.length
        let btnContainerWidth = btnNum * 45

        let position = {}
        if (widthOffset > btnContainerWidth) {
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

                    <View style={[styles.btnContainer,popDialogStyle, {width: btnContainerWidth}, position]}>
                        {popToolButtons}
                    </View>

                    <View style={[styles.triangle,{backgroundColor: popDialogStyle.backgroundColor||Colors.black,}, triangleStyle,{left: triangleStyle.left - 3}]}/>
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
            backgroundColor: Colors.black,
            borderRadius: 4

        }
    }
)
