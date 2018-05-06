import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
    Dimensions
} from 'react-native';
import Colors from '../../utils/Colors'
import ImageView from "../../widget/ImageView";
import _ from 'lodash'
import TextBubble from './TextBubble';
import ImageBubble from './ImageBubble';
export default class BubbleView extends Component{




    constructor(){
        super()
    }



    render(){
        const {position, bubbleColor, messageData, nameShow,} = this.props
        const {message,images}=messageData
        return(
            <View style={[styles.container, position ? {justifyContent: 'flex-end',paddingRight:nameShow?6:4} : {justifyContent: 'flex-start',paddingLeft:nameShow?6:4}]}>

                {images&&<ImageBubble {...this.props}/>}
                {message&&<TextBubble {...this.props}/>}
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',

        marginLeft: 6,
        marginRight: 6,
        width: Dimensions.get('window').width - 110
    },
    textContainer: {
        backgroundColor: Colors.blue,
        borderRadius: 10,
        padding: 10,
        justifyContent: 'center'


    },
    textStyle: {
        color: Colors.white,
        fontSize: 15,
    },
    triangle: {
        position: "absolute",
        top: 12,
        width: 0,
        height: 0,
        borderStyle: 'solid',
        borderLeftWidth: 18,
        borderRightWidth: 14,
        borderBottomWidth: 7,
        borderTopWidth: 3,
        borderBottomLeftRadius: 30,
    },
    triangleRight: {
        right: 0,
        borderRightWidth: 18,
        borderLeftWidth: 14,
        borderBottomWidth: 3,
        borderTopWidth: 7,
        borderBottomRightRadius: 30

    },

    triangleNameFalse: {
        position: "absolute",
        top: 14,
        height: 10,
        width: 10,
        transform: [{rotateZ: '45deg'}]
    },
    imagesContainer:{
        flexDirection:'row',
    }

})