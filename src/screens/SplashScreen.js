import {StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import {Text} from '../components';
import {SizeClass} from '../utils/AppTheme';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
export default function SplashScreen() {
  const navigation = useNavigation();
  useEffect(() => {
    navigateToGroupChat();
  }, []);
  const navigateToGroupChat = () => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 2000);
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <LinearGradient
        // start={{x: 0, y: 0}}
        // end={{x: 1, y: 1}}
        colors={['#A409F1', '#A409F1', '#E1306C', '#FD1D1D']}
        style={styles.linearGradient}>
        <Text style={{fontSize: SizeClass.scaleFont(20)}}>CHAT APP</Text>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    alignItems: 'center',
    height: SizeClass.SCREEN_HEIGHT,
    width: SizeClass.SCREEN_WIDTH,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
