import React, { useEffect, useState } from 'react';
import { Button, GestureResponderEvent, SafeAreaView, TextInput } from 'react-native';
import { Link } from 'expo-router';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (getAuth().currentUser !== null) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = (e: GestureResponderEvent) => {
    console.log('login');
    // ...
    e.preventDefault();
    const Auth = getAuth();
    signInWithEmailAndPassword(Auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log('Signed in', user);
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
      <Button title="Login" onPress={(e: GestureResponderEvent) => handleLogin(e)} />

      <Link href="/signup">Signup</Link>
      <Link href="/one">One</Link>
      <Link href="/two">Two</Link>
    </SafeAreaView>
  );
};

export default Login;
