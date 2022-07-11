import React, {useState} from 'react';
import AddGroupScreen from './AddGroupScreen';
import database from '@react-native-firebase/database';
import {useNavigation} from '@react-navigation/native';

export default function AddGroupScreenIndex() {
  const [group, setGroup] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();
  const onPressCreateGroup = () => {
    if (group === '') {
      alert('please fill the field');
      return;
    }
    setIsLoading(true);
    const newReference = database().ref('/Groups').push();

    newReference
      .set({
        groupName: group,
        groupImage: null,
        userId: 'user123',
      })
      .then(() => console.log('Data set.'));
    setIsLoading(false);
    navigation.goBack();
  };
  return (
    <AddGroupScreen
      onPressCreateGroup={onPressCreateGroup}
      group={group}
      setGroup={setGroup}
      isLoading={isLoading}
    />
  );
}
