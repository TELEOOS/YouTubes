import React from 'react';
import { View, Text } from 'react-native';
import Video from 'react-native-video';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../app/navigation/types';

type Props = {
  route: RouteProp<RootStackParamList, 'VideoPlayer'>;
};

export default function VideoPlayerScreen({ route }: Props) {
  const { video } = route.params;

  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      <Video
        source={{ uri: video.videoUrl }}
        style={{ width: '100%', height: 220 }}
        resizeMode="cover"
        controls
      />

      <View style={{ padding: 16 }}>
        <Text
          style={{
            color: 'white',
            fontSize: 18,
            fontWeight: 'bold',
          }}
        >
          {video.title}
        </Text>

        <Text style={{ color: '#aaa', marginTop: 6 }}>{video.channel}</Text>

        <Text style={{ color: '#aaa' }}>{video.views} views</Text>
      </View>
    </View>
  );
}
