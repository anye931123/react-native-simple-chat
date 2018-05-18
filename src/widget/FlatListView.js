/**
 * Created by anye on 2017/6/25.
 */
import React, {PureComponent} from 'react';
import {Animated, FlatList,} from 'react-native';

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
const VIEWABILITY_CONFIG = {
    minimumViewTime: 1000,
    viewAreaCoveragePercentThreshold: 10,
    waitForInteraction: true,
};


export default class FlatListView extends PureComponent {

    _scrollPos = new Animated.Value(0);
    _scrollSinkX = Animated.event(
        [{nativeEvent: {contentOffset: {x: this._scrollPos}}}],
        {useNativeDriver: true},
    );
    _scrollSinkY = Animated.event(
        [{nativeEvent: {contentOffset: {y: this._scrollPos}}}],
        {useNativeDriver: true},
    );

    componentDidUpdate() {
        this._listRef.getNode().recordInteraction();
    }

    _keyExtractor = (item, index) => {
        const {horizontal} = this.props
        return horizontal ? index + 'h' : index + 'v'
    };

    _scrollToOffset=(offset)=>{
     this._listRef.getNode().scrollToOffset(offset)
    }

    render() {
        const {
            horizontal,
            viewabilityConfig,
            removeClippedSubviews,
        } = this.props;
        return (
            <AnimatedFlatList
                keyExtractor={this._keyExtractor}
                key={horizontal ? 'h' : 'v'}
                onScroll={horizontal ? this._scrollSinkX : this._scrollSinkY}
                onViewableItemsChanged={this._onViewableItemsChanged}
                ref={this._captureRef}
                viewabilityConfig={viewabilityConfig ? viewabilityConfig : VIEWABILITY_CONFIG}
                removeClippedSubviews={removeClippedSubviews}
                {...this.props}
            />

        )
    }


    _captureRef = (ref) => {
        this._listRef = ref;
    };
    _onViewableItemsChanged = (info: {
        changed: Array<{
            key: string,
            isViewable: boolean,
            item: any,
            index: ?number,
            section?: any,
        }>
    }) => {
        const {onViewableItemsChanged} = this.props
        if (onViewableItemsChanged) {
            onViewableItemsChanged(info)
        }

    };

    _listRef: AnimatedFlatList;

}