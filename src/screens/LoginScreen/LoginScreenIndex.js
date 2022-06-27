import React, {useState} from 'react';
import LoginScreen from './LoginScreen';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import {View, Text} from 'react-native';
export default function LoginScreenIndex() {
  const [email, setEmail] = useState('abdullahzareen91@gmail.com');
  const [password, setPassword] = useState('Liverpool1');
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();
  console.log(email, password);
  const onLoginPress = () => {
    setIsLoading(true);
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        console.log(response);
        navigation.navigate('Group');
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
