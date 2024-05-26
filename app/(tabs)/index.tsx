import { Text } from 'react-native';

import { Motion } from '@legendapp/motion';
import React from 'react';

export default function TabOneScreen() {
  return (
    <Motion.View
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      className="flex-1 justify-center items-center bg-slate-100"
    >
      <Text className="font-bold text-xl">Tab One</Text>
      <Motion.View
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 10 }}
        className="my-8 h-[1px] w-[80%] bg-slate-200"
      />
    </Motion.View>
  );
}
