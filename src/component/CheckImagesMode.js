import React, {Component} from 'react';
import {
    View,
    Modal,
    StyleSheet,
    TouchableWithoutFeedback,
} from 'react-native'
import ImageView from '../widget/ImageView'
import Swiper from 'react-native-swiper';
import _ from 'lodash'

import PictureToolBar from './picture/PictureToolBar'
import Colors from "../utils/Colors";
import {windowHeight, windowWidth} from "../utils/utils";

export default class CheckImagesMode extends Component {

    constructor() {
        super()
        this.state = {
            modalVisible: false,
            images: [],
            index: 0,
            toolBarShow: false
        }
    }

    setModalVisible = (visible, images, index, toolBarShow) => {

        this.setState({
            modalVisible: visible,
            images: images ? images : [],
            index: index ? index : 0,
            toolBarShow: toolBarShow
        });
    }

    render() {
        const {images, index, modalVisible, toolBarShow} = this.state
        return (
            <Modal
                animationType={'none'}
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => this.setModalVisible(false)}
            >
                <TouchableWithoutFeedback accessible={false} onPress={() => this.setModalVisible(false)}>
                    <View style={styles.modalBackgroundStyle}>

                        {images.length > 0 && <Swiper loop={false}
                                                      index={index}
                                                      showsButtons={false}
                                                      dot={<View/>}
                                                      width={windowWidth}
                                                      height={windowHeight}
                                                      activeDot={<View/>}
                        >
                            {_.map(images, (image, index) =>
                                <View key={index} style={styles.imagesContainer}>

                                    <TouchableWithoutFeedback >
                                        <View>
                                            <ImageView
                                                key={index}
                                                source={image}
                                                style={{resizeMode: 'cover'}}
                                                auto={true}
                                            />
                                        </View>
                                    </TouchableWithoutFeedback>
                                </View>
                            )}
                        </Swiper>}
                        {toolBarShow && <PictureToolBar
                            selectImages={new Set()}
                            toolBarShow={true}
                        />}
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        )

    }
}
const styles = StyleSheet.create({
    modalBackgroundStyle: {
        backgroundColor: Colors.imagesModeBg,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    imagesContainer:{flex: 1, justifyContent: 'center',alignItems: 'center'}
})