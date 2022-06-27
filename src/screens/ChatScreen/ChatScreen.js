import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Button, TextInput, Text} from '../../components';
import {SizeClass} from '../../utils/AppTheme';
import {ColorConst} from '../../constants';

export default function ChatScreen(props) {
  const {chatText, setChatText} = props;
  const renderChatBubbleMessage = position => {
    return (
      <>
        <View style={[styles.bubble, position]}>
          <Text style={{margin: SizeClass.SMALL_MARGIN, fontWeight: 'bold'}}>
            Abdullahzareen90@gmail.com
          </Text>
          <Text
            style={{
              marginStart: SizeClass.SMALL_MARGIN,
              marginBottom: SizeClass.DEFAULT_MARGIN,
            }}>
            my text is hello world
          </Text>
        </View>
      </>
    );
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: ColorConst.white,
      }}>
      {renderChatBubbleMessage({alignSelf: 'flex-start'})}
      {renderChatBubbleMessage({alignSelf: 'flex-end'})}
      <View style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center'}}>
        <View style={{flexDirection: 'row'}}>
          <TextInput style={styles.input} onChange={setChatText} />
          <Button style={styles.button} title={'Send'} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    height: SizeClass.getScreenHeightFromPercentage(9),
    color: ColorConst.black,
    fontSize: SizeClass.scaleFont(18),
    paddingLeft: 20,
  },
  button: {
    backgroundColor: 'grey',
    width: SizeClass.getScreenWidthFromPercentage(25),
    height: SizeClass.getScreenHeightFromPercentage(9),
    borderRadius: 0,
  },
  bubble: {
    width: SizeClass.getScreenWidthFromPercentage(80),

    backgroundColor: 'grey',
    borderRadius: 10,
    margin: SizeClass.SMALL_MARGIN,
  },
});
