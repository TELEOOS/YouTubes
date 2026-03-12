import React, { useEffect } from 'react';
import { FlatList, View } from 'react-native';
import { useHomeStore } from '../stores/homeStore';
import { VideoCard } from '../../../videos/components/VideoCard';
export default function HomeScreen() {
  const videos = useHomeStore(s => s.videos);
  const loadVideos = useHomeStore(s => s.loadVideos);

  useEffect(() => {
    loadVideos();
  }, [loadVideos]);

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <FlatList
        data={videos}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <VideoCard video={item} />}
      />
    </View>
  );
}
