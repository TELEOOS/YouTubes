import React from 'react';
import { View, Text, Image } from 'react-native';
import { ProfileType } from '../types';

interface Props {
  profile: ProfileType;
}

export const ProfileHeader = ({ profile }: Props) => {
  return (
    <View
      style={{
        alignItems: 'center',
        paddingVertical: 30,
      }}
    >
      <Image
        source={{ uri: profile.avatar }}
        style={{
          width: 90,
          height: 90,
          borderRadius: 45,
        }}
      />

      <Text
        style={{
          marginTop: 12,
          fontSize: 20,
          fontWeight: 'bold',
        }}
      >
        {profile.username}
      </Text>

      <Text style={{ color: '#666', marginTop: 4 }}>
        {profile.subscribers} subscribers
      </Text>

      <Text style={{ color: '#666' }}>{profile.videos} videos</Text>
    </View>
  );
};
