import React, { useEffect, useState } from 'react';
import { Button, GestureResponderEvent, SafeAreaView, Text, TextInput } from 'react-native';
import { Link } from 'expo-router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/firebaseConfig';
import { useAuthStore } from '@/store/auth';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const setStoreUser = useAuthStore((state) => state.setUser);

  const handleLogin = (e: GestureResponderEvent) => {
    // ...
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log('Signed in');
        setStoreUser({ user });
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Error signing in', errorCode, errorMessage);
      });
  };

  return (
    <SafeAreaView>
      <TextInput
        placeholder="Email"
        className="h-10 w-full border-primary-400 bg-secondary-400 text-primary-400"
        autoCapitalize="none"
        keyboardType="email-address"
        onChangeText={(e) => {
          setEmail(e);
        }}
      />
      <TextInput
        placeholder="Password"
        className="h-10 w-full border-primary-400 bg-secondary-400 text-primary-400"
        autoCapitalize="none"
        secureTextEntry={true}
        keyboardType="visible-password"
        onChangeText={(e) => {
          setPassword(e);
        }}
      />
      <Button title="Login" onPress={(e: GestureResponderEvent) => handleLogin(e)} />

      <Link href="/signup">Signup</Link>
      <Link href="/">One</Link>
      <Link href="/two">Two</Link>
    </SafeAreaView>
  );
};

export default Login;
