import React, {useState} from 'react';
import LoginScreen from './LoginScreen';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
export default function LoginScreenIndex() {
  const [email, setEmail] = useState('dsfdafsdffd');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  console.log(email, password);
  const onLoginPress = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };
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
