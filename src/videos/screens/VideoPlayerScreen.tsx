import React from 'react';
import { View, Text, FlatList } from 'react-native';
import Video from 'react-native-video';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../app/navigation/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RecommendedVideoCard } from '../components/RecommendedVideoCard';

type VideoPlayerNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'VideoPlayer'
>;
type Props = {
  route: RouteProp<RootStackParamList, 'VideoPlayer'>;
};

export default function VideoPlayerScreen({ route }: Props) {
  const { video } = route.params;
  const navigation = useNavigation<VideoPlayerNavigationProp>();

  const recommendedVideos = [
    {
      id: '2',
      title: 'Build a YouTube Clone',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
      channel: 'Dev Tutorials',
      views: 82000,
    },
    {
      id: '3',
      title: 'Learn TypeScript Fast',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
      channel: 'Code Academy',
      views: 310000,
    },
    {
      id: '4',
      title: 'React Native for Beginners',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
      channel: 'Mobile Devs',
      views: 150000,
    },
    {
      id: '5',
      title: 'Advanced React Patterns',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
      channel: 'React Experts',
      views: 45000,
    },
    {
      id: '6',
      title: 'State Management with Redux',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
      channel: 'Redux Masters',
      views: 90000,
    },
  ];

  return (
    <>
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

      <Text
        style={{
          color: 'white',
          fontSize: 18,
          marginTop: 20,
          marginBottom: 10,
        }}
      >
        Recommended
      </Text>

      <FlatList
        data={recommendedVideos}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <RecommendedVideoCard
            video={item}
            onPress={() => navigation.replace('VideoPlayer', { video: item })}
          />
        )}
      />
    </>
  );
}
