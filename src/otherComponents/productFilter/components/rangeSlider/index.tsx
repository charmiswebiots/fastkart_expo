import React, { useState, useRef } from 'react';
import { View, Text, PanResponder, Dimensions } from 'react-native';
import styles from './styles';
import { useValues } from '../../../../utils/context';
import { useTheme } from '@react-navigation/native';

export function RangeSlider () {
  const {viewRtlStyle,isDark}=useValues()
  const {colors}=useTheme()
  const [range, setRange] = useState({ min: 0, max: 100 });
  const [lowValue, setLowValue] = useState(0);
  const [highValue, setHighValue] = useState(100);

  const sliderWidth = Dimensions.get('window').width - 78; 
  const minRangeDistance = 10;

  const lowThumbX = useRef((lowValue / range.max) * sliderWidth).current;
  const highThumbX = useRef((highValue / range.max) * sliderWidth).current;

  const panResponderLow = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gestureState) => {
        const newValue = Math.min(
          Math.max(0, lowThumbX + gestureState.dx),
          highThumbX - minRangeDistance
        );
        setLowValue(Math.round((newValue / sliderWidth) * range.max));
      },
    })
  ).current;

  const panResponderHigh = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gestureState) => {
        const newValue = Math.max(
          Math.min(sliderWidth, highThumbX + gestureState.dx),
          lowThumbX + minRangeDistance
        );
        setHighValue(Math.round((newValue / sliderWidth) * range.max));
      },
    })
  ).current;

  const lowThumbStyle = {
    left: (lowValue / range.max) * sliderWidth -15, 
  };

  const highThumbStyle = {
    left: (highValue / range.max) * sliderWidth - 0, 
  };

  return (
    <View style={styles.container}>
      <View style={styles.sliderContainer}>
        <View style={styles.track} />
        <View
          style={[
            styles.highlight,
            {
              left: (lowValue / range.max) * sliderWidth,
              width: ((highValue - lowValue) / range.max) * sliderWidth,
            },
          ]}
        />
        <View
          {...panResponderLow.panHandlers}
          style={[styles.thumb, lowThumbStyle]}
        />
        <View
          {...panResponderHigh.panHandlers}
          style={[styles.thumb, highThumbStyle]}
        />
      </View>
      {/* <View style={{flexDirection:'row'}}>
      <Text style={[styles.rangeText,{color:colors.text},{backgroundColor:isDark?colors.primary:appColors.gray}]}>${lowValue}.00</Text>
      <Text style={[styles.rangeText1,{color:colors.text},{backgroundColor:isDark?colors.primary:appColors.gray}]}>${highValue}.00</Text>
      </View> */}
    </View>
  );
};


