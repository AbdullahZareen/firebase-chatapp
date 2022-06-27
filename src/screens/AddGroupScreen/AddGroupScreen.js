import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, TextInput} from '../../components';
import {ColorConst} from '../../constants';
import {SizeClass} from '../../utils/AppTheme';
export default function AddGroupScreen() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeHolder={'.'} />
      <Button style={styles.button} title={'CREATE GROUP'} onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderBottomColor: ColorConst.black,
    margin: SizeClass.DEFAULT_MARGIN,
    borderRadius: 10,
    height: SizeClass.getScreenHeightFromPercentage(6),
    padding: SizeClass.SMALL_MARGIN,
    color: ColorConst.black,
    fontSize: SizeClass.scaleFont(18),
  },
  button: {
    width: SizeClass.getScreenWidthFromPercentage(50),
    backgroundColor: 'grey',
    fontWeight: '500',
    shadowColor: 'black',
    shadowOpacity: 3,
    shadowRadius: 3,
    shadowOffset: {width: -1, height: 2},
  },
});
