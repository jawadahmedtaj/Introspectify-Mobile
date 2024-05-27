import React, { useState } from 'react';
import { SafeAreaView, TextInput, Button, GestureResponderEvent } from 'react-native';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'expo-router';

const Signup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e: GestureResponderEvent) => {
    console.log('signup');
    // ...
    e.preventDefault();
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log('Signed up', user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Error signing up', errorCode, errorMessage);
        // ..
      });
  };

  return (
    <SafeAreaView>
      <TextInput
        placeholder="Email"
        className="h-10 w-full border-primary-400 bg-secondary-400 text-primary-400"
        keyboardType="email-address"
        onChangeText={(e) => {
          setEmail(e);
        }}
      />
      <TextInput
        placeholder="Password"
        className="h-10 w-full border-primary-400 bg-secondary-400 text-primary-400"
        keyboardType="visible-password"
        onChangeText={(e) => {
          setPassword(e);
        }}
      />
      <Button title="Sign up" onPress={(e: GestureResponderEvent) => handleSignup(e)} />
      <Link href="/login">Login</Link>
    </SafeAreaView>
  );
};

export default Signup;
