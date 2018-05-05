import React,{Component} from 'react';
import {
    View,
    LayoutAnimation,
   UIManager
} from 'react-native';

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
export default class AnimationContainer extends Component{

    componentWillMount() {
        UIManager.setLayoutAnimationEnabledExperimental &&
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }

    containerChange=(animationType)=>{
        // if(!animationType){
        //     UIManager.setLayoutAnimationEnabledExperimental &&
        //     UIManager.setLayoutAnimationEnabledExperimental(false);
        //     return
        // }
        let config=layoutAnimationConfigs[animationType];
        LayoutAnimation.configureNext(config);
    }

    render(){
        const {children, animationType}=this.props
        this.containerChange(animationType)
        return (
            <View>
                {children}
            </View>
        )

    }
}

