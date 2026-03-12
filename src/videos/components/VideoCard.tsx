import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { HomeVideo } from '../../features/home/types';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../app/navigation/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

interface Props {
  video: HomeVideo;
}
type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'VideoPlayer'
>;

export const VideoCard = ({ video }: Props) => {
  const navigation = useNavigation<NavigationProp>();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('VideoPlayer', {
          video: {
            id: video.id,
            title: video.title,
            videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
            channel: video.channel,
            views: video.views,
          },
        })
      }
    >
      <View style={{ marginBottom: 20 }}>
        <Image
          source={{ uri: video.thumbnail }}
          style={{
            width: '100%',
            height: 200,
            borderRadius: 8,
          }}
        />

        <View style={{ padding: 10 }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 16,
            }}
          >
            {video.title}
          </Text>

          <Text style={{ color: '#666', marginTop: 4 }}>{video.channel}</Text>

          <Text style={{ color: '#666' }}>{video.views} views</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
