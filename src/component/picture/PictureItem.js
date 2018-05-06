import React, {Component} from 'react';

import {
    View,
    Image,
    TouchableOpacity,
    StyleSheet,
    Text
} from 'react-native';

import Colors from '../../utils/Colors'
import SelectCircleButton from '../../widget/SelectCircleButton'
import {getImageSource} from '../../utils/utils'
const HEIGHT=156
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
        const {data,selectImageFun,selectImages,imagesTotal,checkImageFn,imageIndex} = this.props

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
                onPress={()=>checkImageFn(imagesTotal,imageIndex)}
                >
                <ImageView
                    style={styles.imageStyle}
                    auto={true}
                    fixed={'height'}
                    source={data}
                    height={156}
                    width={80}
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
                                    btnStyle={styles.radioBtn}
                                    circleStyle={styles.radio}
                                    isSelected={radioSelected}>
                    <Text style={styles.selectText}>{numLabel}</Text>
                </SelectCircleButton>

            </View>
        )
    }
}


const styles = StyleSheet.create({
    imageStyle: {
        resizeMode: 'cover'
    },

    radio: {
        justifyContent: 'center',
        width: 17,
        height: 17,
        borderRadius: 8.5
    },

    radioBtn:{
        position:'absolute',
        top:4,
        right:4

    },
    selectText:{
        fontSize:12,
        color:Colors.white
    }

})