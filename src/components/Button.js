import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {Text} from '.';
import {SizeClass} from '../utils/AppTheme';
import {ColorConst} from '../constants';
export default function Button(props) {
  const {title, isLoading, style, textStyle, onPress} = props;
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={[textStyle, styles.text]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    height: SizeClass.getScreenHeightFromPercentage(5),
    borderRadius: 5,
    paddingLeft: SizeClass.DEFAULT_MARGIN,
    paddingRight: SizeClass.DEFAULT_MARGIN,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: ColorConst.yellow,
    width: SizeClass.getScreenWidthFromPercentage(75),
    padding: -30,
  },
  text: {
    textAlign: 'center',
  },
});
