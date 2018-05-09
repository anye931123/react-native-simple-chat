import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import Colors from "../../utils/Colors";
import {styles} from './styles/pictureToolBar'
import SelectCircleButton from '../../widget/SelectCircleButton'

export default class PictureToolBar extends Component {


    constructor() {
        super()
        this.state = {
            radioSelected: false
        }
    }


    render() {
        const {gotoAlbumFn, selectImages, sendImageMessagesFn, editImageFn, toolBarShow} = this.props
        const {radioSelected} = this.state
        let sendBtnState = selectImages.size > 0
        let editBtnState = selectImages.size == 1
        return (
            <View style={[styles.container, toolBarShow && {
                borderTopColor: Colors.transparent,
                backgroundColor: Colors.imagesModeBg
            }]}>
                <View style={styles.radioContainer}>
                    {gotoAlbumFn && <TouchableOpacity
                        onPress={gotoAlbumFn}
                    >
                        <Text style={[styles.text]}>相册</Text>
                    </TouchableOpacity>
                    }

                    <View style={styles.container1}>
                        {editImageFn && <TouchableOpacity
                            style={styles.centerBtn}
                            onPress={() => {
                                editBtnState && editImageFn(selectImages)
                            }
                            }
                        >
                            <Text style={[styles.text, !editBtnState && {color: Colors.gray}]}>编辑</Text>
                        </TouchableOpacity>}


                        <SelectCircleButton circleStyle={toolBarShow && {borderColor: Colors.white}}
                                            btnStyle={styles.centerBtn}
                                            onPress={() => {
                                                this.setState({
                                                    radioSelected: !radioSelected
                                                })
                                            }}
                                            isSelected={radioSelected}
                                            rightText={"原图"}
                                            textStyle={[styles.text]}>
                            <View style={styles.rightIcon}/>
                        </SelectCircleButton>


                    </View>

                    <TouchableOpacity
                        style={[styles.sendBtn, (toolBarShow || sendBtnState) && {backgroundColor: Colors.blue},]}
                        onPress={() => {
                            sendBtnState && sendImageMessagesFn(Array.from(selectImages))
                            this.setState({
                                selectImages: selectImages.clear()
                            })

                        }}
                    >
                        <Text style={styles.sendText}>发送{sendBtnState && `(${selectImages.size})`}</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}

