import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Button, FastImage, Text} from '../../components';
import {ColorConst, ImageConst} from '../../constants';
import {SizeClass} from '../../utils/AppTheme';
import {useNavigation} from '@react-navigation/native';

export default function GroupScreen({groups}) {
  const navigation = useNavigation();
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];
  const renderGroupNameAndImage = item => {
    return (
      <>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Chat');
          }}>
          <View style={styles.listContainer}>
            <FastImage
              source={ImageConst.placeHolder}
              resizeMode="stretch"
              style={styles.image}
            />
            <View>
              <Text style={styles.text}>{item.groupName}</Text>
            </View>
            <FastImage
              source={ImageConst.forwardIcon}
              resizeMode="stretch"
              style={styles.icon}
            />
          </View>

          <View style={styles.divider}></View>
        </TouchableOpacity>
      </>
    );
  };
  return (
    <View style={{flex: 1, backgroundColor: ColorConst.white}}>
      <FlatList
        data={groups}
        renderItem={({item}) => renderGroupNameAndImage(item)}
      />

      <View
        style={{
          position: 'absolute',
          right: SizeClass.LARGE_MARGIN * 2,
          bottom: SizeClass.LARGE_MARGIN * 3,
        }}>
        <Button
          title="+"
          style={styles.button}
          textStyle={{
            fontSize: SizeClass.scaleFont(40),
            textAlign: 'center',
            paddingBottom: 20,
          }}
          onPress={() => {
            navigation.navigate('AddGroup');
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: SizeClass.SMALL_MARGIN / 2,
  },
  image: {
    width: SizeClass.getScreenWidthFromPercentage(15),
    height: SizeClass.getScreenWidthFromPercentage(15),
    backgroundColor: '#D3DCCF',
    borderRadius: 100,
    alignItems: 'center',
  },
  text: {
    color: ColorConst.black,
    padding: SizeClass.LARGE_MARGIN,
  },
  divider: {
    width: SizeClass.SCREEN_WIDTH,
    height: 2,
    backgroundColor: 'grey',
  },
  icon: {
    width: SizeClass.getScreenWidthFromPercentage(7),
    height: SizeClass.getScreenWidthFromPercentage(6),
    marginLeft: SizeClass.LARGE_MARGIN * 5,
  },
  button: {
    backgroundColor: 'grey',
    width: SizeClass.getScreenWidthFromPercentage(15),
    height: SizeClass.getScreenWidthFromPercentage(15),
    borderRadius: SizeClass.getScreenHeightFromPercentage(50),
  },
});
