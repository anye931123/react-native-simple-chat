import React,{Component} from 'react';
import {
    View,
    LayoutAnimation,
   UIManager
} from 'react-native';

export default class AnimationContainer extends Component{

    componentWillMount() {
        UIManager.setLayoutAnimationEnabledExperimental &&
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }

    containerChange=()=>{
        const {animation}=this.props
        if(animation){
            LayoutAnimation.configureNext(animation);
        }else {
            UIManager.setLayoutAnimationEnabledExperimental &&
            UIManager.setLayoutAnimationEnabledExperimental(false);
        }

    }

    render(){
        const {children}=this.props
        this.containerChange()
        return (
            <View>
                {children}
            </View>
        )

    }
}

