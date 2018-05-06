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
export default class CheckImagesMode extends Component {

    constructor() {
        super()
        this.state = {
            modalVisible: false,
            images:[],
            index:0
        }
    }

    setModalVisible=(visible,images,index)=> {

        this.setState({
            modalVisible: visible,
            images:images?images:[],
            index:index?index:0
        });
    }

    render() {
        const {images,index,modalVisible} = this.state
        const {toolBarShow}=this.props
        return (
            <Modal
                animationType={'none'}
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => this.setModalVisible(false)}
            >
                <TouchableWithoutFeedback accessible={false} onPress={() => this.setModalVisible(false)}>
                <View style={styles.modalBackgroundStyle}>
                    <Swiper loop={false}
                            index={index}
                            showsButtons={false}
                            dot={<View/>}
                            activeDot={<View/>}
                    >
                        {_.map(images, (image, index) =>
                            <View  key={index} style={{flex:1,justifyContent:'center',alignItems:'center'}}>
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
                    </Swiper>
                    {<PictureToolBar
                        selectImages={new Set()}
                        toolBarShow={true}
                    />}
                </View>
                </TouchableWithoutFeedback>
            </Modal>
        )

    }
}
const styles=StyleSheet.create({
    modalBackgroundStyle: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
})