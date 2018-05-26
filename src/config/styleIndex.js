import {LayoutAnimation} from "react-native";
import Colors from "../utils/Colors";

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
                property: LayoutAnimation.Properties.opacity,
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
    animation: layoutAnimationConfigs[1],
    messageContainerStyle:{
      paddingTop:10,
    },
    leftAvatarStyle: {
        imageAvatarStyle: {
            width:40,
            height:40,
            borderRadius:20
        },
        textAvatarStyle: {},
        textAvatarContainerStyle: {
            width:40,
            height:40,
            borderRadius:20,
            backgroundColor:Colors.blue
        }

    },
    rightAvatarStyle: {
        imageAvatarStyle: {},
        textAvatarStyle: {},
        textAvatarContainerStyle: {
            width:40,
            height:40,
            borderRadius:20,
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
    popDialogStyle:{},
    footerStyle: {
        footerContainer:{
            flexDirection: 'row',
            alignItems: 'flex-end',
            padding: 7,
            backgroundColor: Colors.bg
        },
        textInputStyle:{
            maxHeight: 124,
        },
        sendPressStyle:{

        },
        sendUnPressStyle:{backgroundColor:Colors.gray},
        sendTextStyle:{

        },
        messageToolContainerStyle:{}

    }
}

export const JDStyle={
    chatStyle:{flex:1, backgroundColor:Colors.bg},
    animation: layoutAnimationConfigs[1],
    messageContainerStyle:{
        paddingTop:10,
    },
    leftAvatarStyle: {
        imageAvatarStyle: {
            width:40,
            height:40,
            borderRadius:20
        },
        textAvatarStyle: {},
        textAvatarContainerStyle: {
            width:40,
            height:40,
            borderRadius:20,
            backgroundColor:Colors.blue
        }

    },
    rightAvatarStyle: {
        imageAvatarStyle: {},
        textAvatarStyle: {},
        textAvatarContainerStyle: {
            width:40,
            height:40,
            borderRadius:20,
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
    popDialogStyle:{},
    footerStyle: {
        footerContainer:{
            flexDirection: 'row',
            alignItems: 'flex-end',
            padding: 7,
            backgroundColor: Colors.bg
        },
        textInputStyle:{
            maxHeight: 124,
        },
        sendPressStyle:{

        },
        sendUnPressStyle:{backgroundColor:Colors.gray},
        sendTextStyle:{

        },
        messageToolContainerStyle:{},
        addStyle:{

        },
        addIcon:{}

    }
}


