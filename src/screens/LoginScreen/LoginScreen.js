import {Platform, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {Text, Toggle, Button} from '../../components';
import {SizeClass} from '../../utils/AppTheme';
import TextInput from '../../components/TextInput';
import LinearGradient from 'react-native-linear-gradient';
import {ColorConst} from '../../constants';
import {useNavigation} from '@react-navigation/native';
export default function LoginScreen() {
  const [isOn, setIsOn] = useState(false);
  const navigation = useNavigation();

  const renderLoginScreen = () => {
    return (
      <>
        <LinearGradient
          // start={{x: 0, y: 0}}
          // end={{x: 1, y: 1}}
          colors={['#A409F1', '#A409F1', '#E1306C', '#FD1D1D']}
          style={styles.linearGradient}>
          <Text style={styles.heading}>Login</Text>
          <View
            style={{paddingTop: SizeClass.getScreenHeightFromPercentage(7)}}>
            <Text style={styles.emailText}>EMAIL</Text>
            <TextInput placeHolder="demo@gmail.com" />
          </View>
          <View>
            <Text style={styles.emailText}>PASSWORD</Text>
            <TextInput placeHolder="**********" />
          </View>
          <View style={{margin: SizeClass.getScreenHeightFromPercentage(4)}}>
            <Button
              title="Login"
              style={{borderRadius: 25}}
              textStyle={{color: 'black', fontSize: SizeClass.scaleFont(16)}}
              onPress={() => navigation.navigate('Group')}
            />
          </View>
          <View
            style={{paddingTop: SizeClass.getScreenHeightFromPercentage(10)}}>
            {divider()}
          </View>
          {/* <Toggle
        isOn={isOn}
        style={{}}
        onToggle={() => {
          if (isOn) setIsOn(false);
          else {
            setIsOn(true);
          }
        }}
      /> */}
          <View
            style={{
              flexDirection: 'row',
              paddingTop: SizeClass.LARGE_MARGIN,
              alignItems: 'center',
            }}>
            <Button
              title={'SOCIAL\nMEDIA'}
              style={{
                width: SizeClass.getScreenWidthFromPercentage(18),
                height: SizeClass.getScreenWidthFromPercentage(18),
                backgroundColor: 'blue',
                borderRadius: 50,
                margin: SizeClass.SMALL_MARGIN,
              }}
              textStyle={{
                fontSize: SizeClass.scaleFont(9),
                fontWeight: '500',
              }}
            />
            <Button
              title={'SOCIAL\nMEDIA'}
              style={{
                width: SizeClass.getScreenWidthFromPercentage(18),
                height: SizeClass.getScreenWidthFromPercentage(18),
                backgroundColor: 'green',
                borderRadius: 50,
                margin: SizeClass.SMALL_MARGIN,
              }}
              textStyle={{
                fontSize: SizeClass.scaleFont(9),
                fontWeight: '500',
              }}
            />
            <Button
              title={'SOCIAL\nMEDIA'}
              style={{
                width: SizeClass.getScreenWidthFromPercentage(18),
                height: SizeClass.getScreenWidthFromPercentage(18),
                backgroundColor: 'red',
                borderRadius: 50,
                margin: SizeClass.SMALL_MARGIN,
              }}
              textStyle={{
                fontSize: SizeClass.scaleFont(9),
                fontWeight: '500',
              }}
            />
          </View>
        </LinearGradient>
      </>
    );
  };
  const divider = () => {
    return (
      <>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              width: SizeClass.getScreenWidthFromPercentage(32),
              height: SizeClass.getScreenHeightFromPercentage(0.1),
              backgroundColor: ColorConst.white,
              margin: SizeClass.SMALL_MARGIN,
            }}></View>
          <Text>or</Text>
          <View
            style={{
              width: SizeClass.getScreenWidthFromPercentage(32),
              height: SizeClass.getScreenHeightFromPercentage(0.1),
              backgroundColor: ColorConst.white,
              margin: SizeClass.SMALL_MARGIN,
            }}></View>
        </View>
      </>
    );
  };
  return (
    <View style={styles.container}>
      {renderLoginScreen()}
      {/* <Toggle
        isOn={isOn}
        style={{}}
        onToggle={() => {
          if (isOn) setIsOn(false);
          else {
            setIsOn(true);
          }
        }}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  heading: {
    paddingTop: SizeClass.getScreenHeightFromPercentage(10),
    fontSize: SizeClass.scaleFont(32),
    color: ColorConst.white,
  },
  emailText: {
    paddingTop: SizeClass.getScreenHeightFromPercentage(4),
    fontSize: SizeClass.scaleFont(15),
    color: 'yellow',
  },
  linearGradient: {
    alignItems: 'center',
    height: SizeClass.SCREEN_HEIGHT,
    width: SizeClass.SCREEN_WIDTH,
    flex: 1,
  },
});
