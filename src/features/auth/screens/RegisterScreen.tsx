import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import { useAuthStore } from '../stores/authStore';

export default function RegisterScreen() {
  const [username, setUsername] = useState('');
  const login = useAuthStore(s => s.login);

  const handleRegister = () => {
    if (!username.trim()) return;
    login(username);
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
          fontSize: 32,
          fontWeight: 'bold',
          marginBottom: 40,
        }}
      >
        Créer un compte
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
        onPress={handleRegister}
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
          }}
        >
          Créer un compte
        </Text>
      </TouchableOpacity>
    </View>
  );
}
