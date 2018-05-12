import React, {Component} from 'react'
import {
    View,
    StyleSheet,

} from 'react-native'
import PictureItem from './PictureItem';
import FlatListView from '../../widget/FlatListView';
import {styles} from '../../styles/messageButtomTool'
import PictureToolBar from './PictureToolBar'
import {windowWidth} from '../../utils/utils'
import _ from 'lodash'
import CheckImagesMode from '../CheckImagesMode'

const data=[
"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525606198244&di=ff00cc54f82e25492c8bf723342f8c08&imgtype=0&src=http%3A%2F%2Fpic.qiantucdn.com%2F58pic%2F22%2F06%2F55%2F57b2d98e109c6_1024.jpg",
    "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=668111488,2617632583&fm=27&gp=0.jpg",
    "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=259000056,216263875&fm=200&gp=0.jpg",
    "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3387604187,1975332677&fm=27&gp=0.jpg",
    "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2089250477,4143327651&fm=27&gp=0.jpg",
    "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2943299147,2485325577&fm=27&gp=0.jpg"




]
export default class PictureGallery extends Component {

    constructor() {
        super()
        this.state = {
            selectImages: new Set(),
        }
    }


    selectImageFun = (isSelected, image) => {
        let {selectImages} = this.state
        if (isSelected) {
            this.setState({
                selectImages: selectImages.add(image),
            })
        } else {
            selectImages.delete(image)
            this.setState({
                selectImages:selectImages,
            })
        }
    }

    renderRow = ({item, index}) => {
        let {selectImages} = this.state
        const {checkImageFn,
            galleryItemImageStyle,
            selectCircleButtonStyle}=this.props
        return <PictureItem
            imagesTotal={data}
            imageIndex={index}
            data={item}
            selectImages={selectImages}
            selectImageFun={this.selectImageFun}
            checkImageFn={checkImageFn}
            galleryItemImageStyle={galleryItemImageStyle}
            selectCircleButtonStyle={selectCircleButtonStyle}

        />

    }

    render() {
        const {selectImages} = this.state
         const {sendImageMessagesFn,showToolBar,galleryContainerStyle}=this.props
        return (<View style={galleryContainerStyle}>
            <FlatListView
                ref
                horizontal={true}
                data={_.clone(data)}
                renderItem={this.renderRow}
                numColumns={1}
                showsHorizontalScrollIndicator={false}
            />
            {showToolBar&&<PictureToolBar
                gotoAlbumFn={() => {}}
                selectImages={selectImages}
                sendImageMessagesFn={sendImageMessagesFn}
            />}
            </View>)
    }
}


