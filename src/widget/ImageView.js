import React, {PureComponent} from 'react';

import {Image} from 'react-native';
import {getImageSource, windowWidth} from "../utils/utils";

export default class ImageView extends  PureComponent{


    constructor(props){
        super(props)
        const{width,height}=this.props

        this.state={
            width:width,
            height:height
        }
    }


    getAutoSize=(source)=>{
        const {auto,fixed,autoCallBack}=this.props
        const{width,height}=this.state

        if(!auto)return
        let wantWidth=width
        let wantHeight=height
        Image.getSize(source,(newWidth,newHeight)=>{
            let ratio=0
            switch (fixed){
                case "height":
                    ratio=newHeight/height
                    wantWidth=newWidth/ratio
                    break;
                case "width":
                    ratio=newWidth/width
                    wantHeight=newHeight/ratio
                    console.log('lallala',ratio,wantHeight)
                    break;
                default:
                    ratio=newWidth/windowWidth
                    wantWidth=windowWidth
                    wantHeight=newHeight/ratio

            }
            console.log(wantWidth,wantHeight)
            this.setState({
                width:wantWidth,
                height:wantHeight
            })

            if(autoCallBack){
                autoCallBack(wantWidth,wantHeight)
            }



        })
    }

    componentDidMount(){
        const {source}=this.props
        this.getAutoSize(source)
    }

    render(){
        const {width,height}=this.state
        const {style,source,imageProps,auto}=this.props
        let imageUri=getImageSource(source)
        return<Image
            style={[style,auto&&{width:width,height:height}]}
            source={imageUri}
            {...imageProps}
        />
    }

}