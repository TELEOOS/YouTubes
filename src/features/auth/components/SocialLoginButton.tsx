import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { IconBrandGoogle } from '@tabler/icons-react-native';

interface Props {
  title: string;
  onPress: () => void;
}

export const SocialLoginButton = ({ title, onPress }: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#333',
        padding: 14,
        borderRadius: 10,
        marginTop: 12,
      }}
    >
      <IconBrandGoogle size={20} color="white" />

      <Text
        style={{
          color: 'white',
          marginLeft: 10,
          fontWeight: '600',
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};
