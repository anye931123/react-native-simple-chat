import React, {Component} from 'react';

import {
    View,
    Image,
    TouchableOpacity,
    StyleSheet,
    Text
} from 'react-native';

import SelectCircleButton from '../../widget/SelectCircleButton'
import ImageView from '../../widget/ImageView'
export default class PictureItem extends Component {

    constructor() {
        super()
        this.state = {
            radioSelected:false
        }
    }

    componentWillReceiveProps(nextProps){
        const {selectImages}=nextProps

        if(selectImages.size==0){
            this.setState({
                radioSelected:false
            })
        }


    }


    render() {
        const {radioSelected} = this.state
        const {data,
            selectImageFun,
            selectImages,
            imagesTotal,
            checkImageFn,
            imageIndex,
            galleryItemImageStyle={},
            selectCircleButtonStyle={},
        } = this.props

        let numLabel=0
        if(radioSelected){
            for(let image of selectImages.values()){
                numLabel++
                if(image==data){
                    break
                }
            }
        }
        return (
            <View>
                <TouchableOpacity
                onPress={()=>checkImageFn(true,imagesTotal,imageIndex)}
                >
                <ImageView
                    style={galleryItemImageStyle}
                    auto={true}
                    fixed={'height'}
                    source={data}
                    height={galleryItemImageStyle.height}
                    width={galleryItemImageStyle.width}
                />
                </TouchableOpacity>
                <SelectCircleButton onPress={() => {
                    if (selectImageFun) {
                        selectImageFun(!radioSelected, data)
                    }
                    this.setState({
                        radioSelected: !radioSelected
                    })
                }}
                                    {...selectCircleButtonStyle}
                                    isSelected={radioSelected}>
                    <Text style={selectCircleButtonStyle.textStyle}>{numLabel}</Text>
                </SelectCircleButton>

            </View>
        )
    }
}


const styles = StyleSheet.create({


})