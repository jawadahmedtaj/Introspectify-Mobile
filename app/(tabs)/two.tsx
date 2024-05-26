import React from 'react';
import { Text, View } from 'react-native';

export default function TabTwoScreen() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="font-bold text-xl">Tab Two</Text>
      <View className="my-8 h-[1px] w-[80%] bg-slate-200" />
    </View>
  );
}
