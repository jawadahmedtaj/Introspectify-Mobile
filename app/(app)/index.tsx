import { Alert, Button, Text } from 'react-native';

import { Motion } from '@legendapp/motion/styled';
import React from 'react';
import { useAuthStore } from '@/store/auth';
import { supabase } from '@/supbaseConfig';
import { router } from 'expo-router';

export default function TabOneScreen() {
  const authStoreSignOut = useAuthStore((state) => state.logout);

  const isUserIn = useAuthStore((state) => state.isUserLoggedIn());

  const logOutSupabase = async () => {
    console.log('Logging out Supabase user...');
    const { error } = await supabase.auth.signOut();
    if (error) {
      Alert.alert('Error logging out', error.message);
      return;
    }
    console.log('User logged out');
    router.replace('/auth');
  };

  return (
    <Motion.View
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      className="flex-1 justify-center items-center bg-slate-100"
    >
      <Text className="font-bold text-xl">Tab One - {JSON.stringify(isUserIn)}</Text>
      <Button title="Logout Supabse" onPress={logOutSupabase} />
      <Motion.View
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 10 }}
        className="bg-slate-200 my-8 w-[80%] h-[1px]"
      />
    </Motion.View>
  );
}
