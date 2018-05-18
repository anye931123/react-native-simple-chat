import React, {PureComponent} from 'react';

import {Image, StyleSheet, TouchableOpacity, View} from 'react-native'

export default class ToolsButton extends PureComponent {

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