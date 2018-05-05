import React, {Component} from 'react';

import {
    TouchableOpacity,
    Image,
    View,
    StyleSheet
} from 'react-native'

export default class ToolsButton extends Component {

    constructor() {
        super()


    }


    render() {

        const {normalIcon, selectedIcon, onPress, selected } = this.props
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => {
                    this.setState({
                        selected: !selected
                    })
                    if (onPress) {
                        onPress()
                    }
                }}>
                    <Image source={selected ? selectedIcon : normalIcon} style={styles.image}
                    />
                </TouchableOpacity>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
    },
    image: {
        width: 20,
        height: 20,
        resizeMode: "contain"
    }

})