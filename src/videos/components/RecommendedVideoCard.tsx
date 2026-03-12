import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { VideoType } from '../types';

interface Props {
  video: VideoType;
  onPress: () => void;
}

export const RecommendedVideoCard = ({ video, onPress }: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: 'row',
        marginBottom: 16,
      }}
    >
      <Image
        source={{ uri: video.videoUrl }}
        style={{
          width: 120,
          height: 70,
          borderRadius: 6,
        }}
      />

      <View style={{ flex: 1, marginLeft: 10 }}>
        <Text
          numberOfLines={2}
          style={{
            color: 'white',
            fontWeight: '600',
          }}
        >
          {video.title}
        </Text>

        <Text style={{ color: '#aaa', marginTop: 4 }}>{video.channel}</Text>

        <Text style={{ color: '#aaa' }}>{video.views} views</Text>
      </View>
    </TouchableOpacity>
  );
};
