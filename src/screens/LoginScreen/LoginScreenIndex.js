import React, {useState, useEffect} from 'react';
import LoginScreen from './LoginScreen';
import auth from '@react-native-firebase/auth';
import {StackRouter, useNavigation} from '@react-navigation/native';
import {View, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {userLoggedIn} from '../../redux/User/UserSlice';

export default function LoginScreenIndex() {
  const [email, setEmail] = useState('abdullahzareen91@gmail.com');
  const [password, setPassword] = useState('Liverpool1');
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const onLoginPress = () => {
    setIsLoading(true);
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        console.log('===========', response.user.email);
        dispatch(userLoggedIn(response?.user?.email));
        navigation.reset({index: 0, routes: [{name: 'Group'}]});
        setIsLoading(false);
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }
        setIsLoading(false);
        if (error.code === 'auth/unknown') {
          console.error(error.code);
        }
      });
  };
  if (isLoading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }
  return (
    <LoginScreen
      onPressLogin={onLoginPress}
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
    />
  );
}
