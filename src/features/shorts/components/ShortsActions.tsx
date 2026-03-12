import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {
  IconHeart,
  IconMessageCircle,
  IconShare3,
} from '@tabler/icons-react-native';
import { useLikesStore } from '../stores/likesStore';

interface Props {
  videoId: string;
  onPressComments: () => void;
}

export const ShortActions = ({ videoId }: Props) => {
  const liked = useLikesStore(s => s.likedVideos[videoId]);
  const toggleLike = useLikesStore(s => s.toggleLike);
  const likedCount = useLikesStore(s => s.likedCount[videoId] || 0);

  return (
    <View
      style={{
        position: 'absolute',
        right: 10,
        bottom: 120,
        alignItems: 'center',
        gap: 25,
      }}
    >
      <TouchableOpacity
        onPress={() => toggleLike(videoId)}
        style={{ alignItems: 'center' }}
      >
        <IconHeart size={32} color={liked ? 'red' : 'white'} />
        <Text style={{ color: 'white' }}>{likedCount}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ alignItems: 'center' }}>
        <IconMessageCircle size={32} color="white" />
        <Text style={{ color: 'white', textAlign: 'center' }}>45</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ alignItems: 'center' }}>
        <IconShare3 size={32} color="white" />
        <Text style={{ color: 'white', textAlign: 'center' }}>Share</Text>
      </TouchableOpacity>
    </View>
  );
};
