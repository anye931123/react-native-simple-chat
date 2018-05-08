import {StyleSheet} from 'react-native'
import Colors from "../../../utils/Colors";
import {windowWidth} from '../../../utils/utils'
export const stylesVoice = StyleSheet.create({

    container:{
        flex:1,
        justifyContent:"flex-end",
        backgroundColor:"rgba(0,0,0,0.5)"
    },
    title:{
        fontSize:14,
        color:Colors.minorTextColor
    },
    button: {
        marginTop:10,
        padding: 20,
        borderRadius: 50,
        backgroundColor: Colors.blue
    },
    image: {

        width: 40,
        height: 40,
        resizeMode: 'contain'
    },
    dashedLine:{
        width:25,
        height:0,
        borderWidth:0.8,
        borderColor:Colors.red,
        borderStyle:'dashed',
        borderRadius:0.1
    },
    countDownContainer:{
        justifyContent:'center',
        alignItems:"center",
        flexDirection:'row'
    },
    arcContainer:{
        position:'absolute',
        justifyContent:'center',
        alignItems:'center',
        top:80,
        width:windowWidth-100,
        height:50,
        overflow:"hidden"
    },
    arc:{
        position:'absolute',
        top:-200,
        width:300,
        height:300,
        borderColor:Colors.gray,
        borderBottomLeftRadius:300,
        borderBottomWidth:1,
          transform:[{rotateZ:"-45deg"}],
        borderLeftWidth:1,
    },
    btnContainer:{
        width:windowWidth,
        position:'absolute',
        top:40,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    btnCircle:{
        borderColor:Colors.gray,
        borderWidth:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:Colors.white

    },
    btnCircleContainer:{
        width:75,
        height:75,
        justifyContent:'center',
        alignItems:'center',

    },
    btnIcon:{
        width:20,
        height:20,
        resizeMode:'cover'
    }

})