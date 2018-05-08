import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
    Dimensions,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import ImageView from "../../widget/ImageView";
import _ from 'lodash'
const MAXWIDTH=250
export default class ImageBubble extends Component{

    constructor(){
        super()
        this.state={
            scrollEnabled:false
        }

        this.width=0

    }

    autoCallBack=(width,height)=>{
        const {scrollEnabled}=this.props
        this.width+=width
        if(this.width>MAXWIDTH&&!scrollEnabled){
            this.setState({
                scrollEnabled:true
            })
        }
    }
    render(){
        const {scrollEnabled}=this.state
        const {messageData,checkImageFn,rowId,showDialogFn}=this.props
        const {images}=messageData
        return(
            <View  style={styles.imagesContainer}>
                <ScrollView
                    scrollEnabled={scrollEnabled}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                {_.map(images,(image,index)=>
                    <TouchableOpacity
                        key={rowId+index}
                    onPress={()=>{
                        if(checkImageFn)
                            checkImageFn(images, index)
                    }}
                        onLongPress={()=>{
                            if(showDialogFn){
                                showDialogFn(messageData)
                            }
                        }}
                    >
                    <ImageView
                        autoCallBack={this.autoCallBack}
                    style={{resizeMode:'cover'}}
                    auto={true}
                    height={90}
                    width={40}
                    fixed={'height'}
                    source={image}
                />
                    </TouchableOpacity>)}
                </ScrollView>
            </View>
        )
    }

}

const styles=StyleSheet.create({
    imagesContainer:{
        flexDirection:'row',
        borderRadius:7,
        overflow:'hidden'
    }
})