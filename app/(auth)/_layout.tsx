import React from 'react';
import { Stack } from 'expo-router';

export default function AuthLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }} initialRouteName="login">
      <Stack.Screen name="login" options={{ title: 'login' }} />
      <Stack.Screen name="signup" options={{ title: 'signup' }} />
    </Stack>
  );
}
