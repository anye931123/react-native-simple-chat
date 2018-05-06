import {
    StyleSheet
} from 'react-native'
import Colors from "../../../utils/Colors";

export const styles = StyleSheet.create({
    container: {
        padding: 7,
        paddingLeft: 12,
        paddingRight: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderTopWidth: 0.5,
        borderTopColor: Colors.lnColor,
        backgroundColor: Colors.bgSecondary
    },

    radioContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: "center",
    },
    radioBtn: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        fontSize: 13,
        color: Colors.blue
    },

    container1: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
    },
    centerBtn: {
        alignItems:'center',
        flexDirection:'row',
        marginLeft: 60
    },
    sendBtn: {
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: Colors.gray,
        borderRadius: 3,
        height:25,
        paddingLeft: 7,
        paddingRight: 7
    },
    sendText: {
        fontSize: 13,
        color: Colors.white
    },

    rightIcon:{
        marginTop:4,
        borderLeftWidth:1,
        borderBottomWidth:1,
        height:4,
        width:8,
        borderColor:Colors.white,
        transform:[{rotateZ:"-45deg"}]
    }

})