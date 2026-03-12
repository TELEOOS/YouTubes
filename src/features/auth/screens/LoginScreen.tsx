import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import { useAuthStore } from '../stores/authStore';
import { SocialLoginButton } from '../components/SocialLoginButton';

export default function LoginScreen({ navigation }: any) {
  const [username, setUsername] = useState('');
  const login = useAuthStore(s => s.login);

  const handleLogin = () => {
    if (!username.trim()) return;
    login(username);
  };

  const handleGoogleLogin = () => {
    login('google_user');
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        padding: 30,
        backgroundColor: '#000',
      }}
    >
      <Text
        style={{
          color: 'white',
          fontSize: 34,
          fontWeight: 'bold',
          marginBottom: 10,
        }}
      >
        YouTubes
      </Text>

      <Text
        style={{
          color: '#aaa',
          marginBottom: 40,
        }}
      >
        Connecte toi pour regarder les Shorts
      </Text>

      <TextInput
        placeholder="Username"
        placeholderTextColor="#777"
        value={username}
        onChangeText={setUsername}
        style={{
          borderWidth: 1,
          borderColor: '#333',
          padding: 14,
          borderRadius: 10,
          color: 'white',
          marginBottom: 20,
        }}
      />

      <TouchableOpacity
        onPress={handleLogin}
        style={{
          backgroundColor: '#ff0000',
          padding: 16,
          borderRadius: 10,
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: 16,
          }}
        >
          Login
        </Text>
      </TouchableOpacity>

      <SocialLoginButton
        title="Continuer avec Google"
        onPress={handleGoogleLogin}
      />

      <TouchableOpacity
        onPress={() => navigation.navigate('Register')}
        style={{ marginTop: 30 }}
      >
        <Text
          style={{
            color: '#aaa',
            textAlign: 'center',
          }}
        >
          Pas de compte ?{' '}
          <Text style={{ color: 'white', fontWeight: '600' }}>
            Créer un compte
          </Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}
