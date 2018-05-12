import {LayoutAnimation} from "react-native";
import Colors from "../utils/Colors";
import {styles} from '../styles/messageButtomTool'
import {windowWidth} from '../utils/utils'

const animations = {
    layout: {
        spring: {
            duration: 750,
            create: {
                duration: 300,
                type: LayoutAnimation.Types.easeInEaseOut,
                property: LayoutAnimation.Properties.opacity,
            },
            update: {
                type: LayoutAnimation.Types.spring,
                springDamping: 0.6,
            },
        },
        easeInEaseOut: {
            duration: 300,
            create: {
                type: LayoutAnimation.Types.easeInEaseOut,
                property: LayoutAnimation.Properties.scaleXY,
            },
            update: {
                delay: 100,
                type: LayoutAnimation.Types.easeInEaseOut,
            },
        },
    },
}
const layoutAnimationConfigs = [
    animations.layout.spring,
    animations.layout.easeInEaseOut,
];
export const QQStyle = {
    chatStyle:{flex:1, backgroundColor:Colors.bg},
    animation: layoutAnimationConfigs[0],
    messageContainerStyle:{
      paddingTop:10,
    },
    leftAvatarStyle: {
        imageAvatarStyle: {
            width:50,
            height:50,
            borderRadius:5
        },
        textAvatarStyle: {},
        textAvatarContainerStyle: {
            width:50,
            height:50,
            borderRadius:5,
            backgroundColor:Colors.blue
        }

    },
    rightAvatarStyle: {
        imageAvatarStyle: {},
        textAvatarStyle: {},
        textAvatarContainerStyle: {
            backgroundColor:Colors.blue
        }

    },
    rankAndNameStyle:{
        userNameStyle: {},
        leftUserNameStyle: {marginLeft: 5},
        rightUserNameStyle: {marginRight: 5},
        rankTextStyle:{
            color:Colors.white
        },
        rankContainerStyle:{
            marginLeft:10,
            backgroundColor:Colors.red,
            borderRadius:3,
            paddingLeft:2,
            paddingRight:2,

        }
    },

    bubbleStyle: {
        textBubbleStyle: {
            left: {},
            right: {}
        },
        textBubbleContainerBgStyle: {
            leftColor: Colors.blue,
            rightColor: Colors.blue
        },
        imageBubbleContainerStyle: {},
        imageBubbleStyle: {
            resizeMode: 'cover',
            height: 90,
            width: 40
        }

    },
    warningStyle:{
        warningContainerStyle:{
            width:20,
            height:20,
            backgroundColor:Colors.red,
            borderRadius:10,
            justifyContent:'center',
            alignItems:'center',
            marginRight:4,
            marginLeft:4,
        },
        warningTextStyle:{
            fontSize:10,
            fontWeight:'bold',
            color:Colors.white
        }

    },
    timeStyle: {
        timeLabelContainerStyle: {
            marginBottom:10
        },
        timeTextStyle: {}
    },
    popDialogStyle:{
        popDialogContainerStyle:{}

    },
    pictureGalleryStyle:{
        galleryContainerStyle:[styles.container,{alignItems:'flex-start',width:windowWidth}],
        galleryItemImageStyle:{resizeMode: 'cover',height:156, width:80,},
        selectCircleButtonStyle:{
            selectCircleContainerStyle:{
                position:'absolute',
                top:4,
                right:4,
            },
            commonStyle:{

                alignItems: 'center',
                marginRight: 5,
                marginLeft: 5,
                borderWidth: 1,
                justifyContent: 'center',
                width: 17,
                height: 17,
                borderRadius: 8.5
            },
            selectedFalseStyle: {
                borderColor: Colors.gray,
            },
            selectedTrueStyle:{
                borderColor: Colors.blue,
                backgroundColor: Colors.blue
            },
            textStyle:{fontSize:12,
                color:Colors.white}
        }

    },
    footer: {}
}


