import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { IconButton } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import MyButton from '../components/MyButton';

const SignUpScreen = () => {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = () => {
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    alert('Sign-up successful!');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.background}>
        <View style={styles.greenStripeTop} />
        <View style={styles.greenStripeBottom} />
      </View>

      <View style={styles.card}>
        <Image
          source={require('../../assets/HerbalXchange.png')}
          style={styles.avatar}
        />
        <Text style={styles.title}>Sign Up</Text>
        <Text style={styles.subtitle}>Create a new account</Text>

        <TextInput
          label={'Full Name'}
          placeholder="Full Name"
          style={styles.input}
        />
        <TextInput
          label={'Email Address'}
          placeholder="Email Address"
          style={styles.input}
          keyboardType="email-address"
        />
        <TextInput
          label={'Username'}
          placeholder="Username"
          style={styles.input}
        />

        <View style={styles.passwordContainer}>
          <TextInput
            label={'Password'}
            secureTextEntry={!showPassword}
            placeholder="Password"
            style={[styles.input, styles.passwordInput]}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <IconButton
            icon={showPassword ? 'eye' : 'eye-off'}
            onPress={() => setShowPassword(!showPassword)}
            style={styles.eyeIcon}
          />
        </View>

        <View style={styles.passwordContainer}>
          <TextInput
            label={'Confirm Password'}
            secureTextEntry={!showConfirmPassword}
            placeholder="Confirm Password"
            style={[styles.input, styles.passwordInput]}
            value={confirmPassword}
            onChangeText={(text) => setConfirmPassword(text)}
          />
          <IconButton
            icon={showConfirmPassword ? 'eye' : 'eye-off'}
            onPress={() => setShowConfirmPassword(!showConfirmPassword)}
            style={styles.eyeIcon}
          />
        </View>

        <MyButton
          text="Register"
          action={handleSignUp}
          mode="contained"
          size="small"
          style={{ backgroundColor: '#004225' }}
        />

        <TouchableOpacity onPress={() => router.back()} style={styles.loginLink}>
          <Text style={styles.loginText}>Already have an account? Log In</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#E5E5E5',
  },
  greenStripeTop: {
    position: 'absolute',
    width: '150%',
    height: '20%',
    backgroundColor: '#004225',
    transform: [{ rotate: '-10deg' }],
    top: 150,
    left: '-25%',
  },
  greenStripeBottom: {
    position: 'absolute',
    width: '150%',
    height: '20%',
    backgroundColor: '#004225',
    transform: [{ rotate: '-10deg' }],
    bottom: 180,
    left: '-25%',
  },
  card: {
    backgroundColor: 'white',
    marginHorizontal: 20,
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    elevation: 5,
    width: '90%',
    maxWidth: 400,
  },
  avatar: {
    width: 100,
    height: 100,
    marginBottom: 20,
    borderRadius: 50,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subtitle: {
    color: '#666',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    marginVertical: 10,
    height: 45,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#CCC',
    paddingHorizontal: 10,
    backgroundColor: '#F9F9F9',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 15,
  },
  eyeIcon: {
    marginLeft: -40,
  },
  loginLink: {
    marginTop: 10,
  },
  loginText: {
    color: '#004225',
    fontWeight: 'bold',
  },
});

export default SignUpScreen;
