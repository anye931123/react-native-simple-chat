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
"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525606198244&di=ff00cc54f82e25492c8bf723342f8c08&imgtype=0&src=http%3A%2F%2Fpic.qiantucdn.com%2F58pic%2F22%2F06%2F55%2F57b2d98e109c6_1024.jpg"
,"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525606198240&di=c8529a840a830c98e277bd5cd5f032ef&imgtype=0&src=http%3A%2F%2Fa3.topitme.com%2F1%2F21%2F79%2F1128833621e7779211o.jpg","https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525606198242&di=3ee8fb34a0348f83989f2556f3722672&imgtype=0&src=http%3A%2F%2Fpic1.16pic.com%2F00%2F57%2F58%2F16pic_5758899_b.jpg","https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525606198243&di=8e821bd939fb384d125042fd0dd49c76&imgtype=0&src=http%3A%2F%2Ffd.topitme.com%2Fd%2Fa8%2F1d%2F11315383988791da8do.jpg",
    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525606198244&di=f35260bb2c2e2311d8bc606e720e236d&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F13%2F60%2F27%2F72h58PICgzY_1024.jpg"]
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
    _checkImageFn=(images,index)=>{

        this.refs.CheckImagesMode.setModalVisible(true,images,index)
    }

    renderRow = ({item, index}) => {
        let {selectImages} = this.state
        const {checkImageFn}=this.props
        return <PictureItem
            imagesTotal={data}
            imageIndex={index}
            data={item}
            selectImages={selectImages}
            selectImageFun={this.selectImageFun}
            checkImageFn={checkImageFn}

        />

    }

    render() {
        const {selectImages} = this.state
         const {sendImageMessagesFn}=this.props
        return (<View style={[styles.container,{alignItems:'flex-start'}]}>
            <View style={{width:windowWidth}}>
            <FlatListView
                horizontal={true}
                data={_.clone(data)}
                renderItem={this.renderRow}
                numColumns={1}

            />
            </View>
            <PictureToolBar
                gotoAlbum={() => {
                }}
                selectImages={selectImages}
                sendImageMessagesFn={sendImageMessagesFn}
            />

            <CheckImagesMode ref={'CheckImagesMode'} toolBarShow={true}/>
        </View>)
    }
}


