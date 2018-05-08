
import {StyleSheet} from 'react-native'

import Colors from "../../../../utils/Colors";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
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