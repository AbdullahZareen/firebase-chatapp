import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import GroupScreen from './GroupScreen';
import database from '@react-native-firebase/database';

export default function GroupScreenIndex() {
  const [isLoading, setIsLoading] = useState(false);
  const [groups, setGroups] = useState(null);
  useEffect(() => {
    getALLGroups();
  }, []);

  const getALLGroups = () => {
    setIsLoading(true);
    database()
      .ref('/Groups')
      .on('value', snapshot => {
        var groupValue = Object.keys(snapshot.val()).map(key => {
          return snapshot.val()[key];
        });

        if (snapshot.val() != null) {
          setGroups(groupValue);
        }
      });
    setIsLoading(false);
  };
  return <GroupScreen groups={groups} />;
}
