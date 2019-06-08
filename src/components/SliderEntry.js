import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity,StyleSheet} from 'react-native';
import {ParallaxImage} from 'react-native-snap-carousel';
import styles from './SliderEntry.style';
import DataHelper from "../helper/DataHelper";
import {AirbnbRating} from "react-native-ratings";
import {BlurView} from "expo";

export default class SliderEntry extends Component {

    get image() {
        const {data: {img}, parallax, parallaxProps, even} = this.props;

        return parallax ? (
            <ParallaxImage
                source={{uri: img}}
                containerStyle={[styles.imageContainer, even ? styles.imageContainerEven : {}]}
                style={styles.image}
                parallaxFactor={0.4}
                showSpinner={true}
                spinnerColor={even ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.25)'}
                {...parallaxProps}
            />
        ) : (
            <Image
                source={{uri: img}}
                style={styles.image}
            />
        );
    }


    _openStep = (index) => {
        const {navigation, data} = this.props;
        navigation.navigate('SampleScreen', {
            exam: data
        });
    };

    render() {
        const {data: {id, diff, img, title, step1, step2}, even} = this.props;

        const uppercaseTitle = title ? (
            <Text
                style={[styles.title, even ? styles.titleEven : {}]}
                numberOfLines={2}
            >
                {title.toUpperCase()}
            </Text>
        ) : false;

        const score = DataHelper._getStarScore(id);
        const scoreView = score ? (
            <View
                style={{
                    width: '100%',
                    position: 'absolute',
                    bottom: 0,
                }}
            >
                <BlurView tint="dark" intensity={50} >
                    <AirbnbRating
                        count={score}
                        defaultRating={score}
                        showRating={false}
                        isDisabled={true}
                        size={30}
                    />
                </BlurView>
            </View>

        ) : false;

        return (
            <TouchableOpacity
                activeOpacity={1}
                style={styles.slideInnerContainer}
                onPress={this._openStep}
            >
                <View style={styles.shadow}/>
                <View style={[styles.imageContainer, even ? styles.imageContainerEven : {}]}>
                    {this.image}
                    <View style={[styles.radiusMask, even ? styles.radiusMaskEven : {}]}/>
                    {scoreView}
                </View>
                <View style={[styles.textContainer, even ? styles.textContainerEven : {}]}>
                    {uppercaseTitle}
                </View>
            </TouchableOpacity>
        );
    }
}
