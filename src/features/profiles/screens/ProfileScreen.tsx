import React from 'react';
import { View, Button } from 'react-native';
import { ProfileHeader } from '../components/ProfileHeader';
import { useAuthStore } from '../../auth/stores/authStore';

export default function ProfileScreen() {
  const user = useAuthStore(s => s.user);
  const logout = useAuthStore(s => s.logout);

  const profile = {
    username: user ?? 'Guest',
    avatar: 'https://i.pravatar.cc/150',
    subscribers: 1200,
    videos: 34,
  };

  return (
    <View style={{ flex: 1 }}>
      <ProfileHeader profile={profile} />

      <View style={{ paddingHorizontal: 20 }}>
        <Button title="Logout" onPress={logout} />
      </View>
    </View>
  );
}
