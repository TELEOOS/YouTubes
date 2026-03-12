import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import Video from 'react-native-video';
import { shortVideoType } from '../types';
import { ShortActions } from './ShortsActions';

const { height } = Dimensions.get('window');

interface Props {
  item: shortVideoType;
  isActive: boolean;
  onPressComments: (videoId: string) => void;
}

export const ShortItem = ({ item, isActive, onPressComments }: Props) => {
  return (
    <View style={{ height, backgroundColor: 'black' }}>
      <Video
        source={{ uri: item.videoUrl }}
        style={{ flex: 1 }}
        resizeMode="cover"
        repeat
        paused={!isActive}
      />

      <ShortActions
        videoId={item.id}
        onPressComments={() => onPressComments(item.id)}
      />

      <View
        style={{
          position: 'absolute',
          bottom: 40,
          left: 20,
        }}
      >
        <Text style={{ color: 'white', fontSize: 18 }}>{item.title}</Text>
        <Text style={{ color: 'white' }}>@{item.user}</Text>
      </View>
    </View>
  );
};
