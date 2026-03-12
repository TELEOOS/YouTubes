import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { useAuthStore } from '../../features/auth/stores/authStore';
import { RootNavigator } from '../navigation/RootNavigator';
import { AuthNavigator } from '../navigation/AuthNavigator';

export const AuthGate = () => {
  const isHydrated = useAuthStore(s => s.isHydrated);
  const isAuthenticated = useAuthStore(s => s.isAuthenticated);

  if (!isHydrated) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" animating={true} />
      </View>
    );
  }

  if (!isAuthenticated) {
    return <AuthNavigator />;
  }

  return <RootNavigator />;
};
