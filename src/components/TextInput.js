import {StyleSheet, TextInput} from 'react-native';
import React from 'react';
import {SizeClass} from '../utils/AppTheme';
import {ColorConst} from '../constants';

export default function TextInput1(props) {
  const {onChange, defaultValue, placeHolder, style} = props;
  return (
    <TextInput
      onChangeText={onChange}
      defaultValue={defaultValue}
      placeholder={placeHolder || 'MY TEXT INPUT'}
      placeholderTextColor={'white'}
      style={[styles.input, style]}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    width: SizeClass.getScreenWidthFromPercentage(75),
    backgroundColor: 'transparent',
    height: 50,
    borderBottomColor: 'white',
    color: ColorConst.white,
    fontSize: SizeClass.scaleFont(14),
    fontWeight: '500',
  },
});
