import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
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
      <Image
        source={require('../../assets/HerbalXchange.png')}
        style={styles.avatar}
      />

      <View style={styles.greenStripeTop} />
      <View style={styles.greenStripeBottom} />

      <View style={styles.section}>
        <TextInput
          label={'Full Name'}
          placeholder="Full Name"
          style={styles.textInput}
        />
        <TextInput
          label={'Email Address'}
          placeholder="Email Address"
          style={styles.textInput}
          keyboardType="email-address"
        />
        <TextInput
          label={'Username'}
          placeholder="Username"
          style={styles.textInput}
        />
        <View style={styles.passwordContainer}>
          <TextInput
            label={'Password'}
            secureTextEntry={!showPassword}
            placeholder="Password"
            style={[styles.textInput, styles.passwordInput]}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            style={styles.eyeIcon}
          >
            <Text>{showPassword ? '🙈' : '👁️'}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.passwordContainer}>
          <TextInput
            label={'Confirm Password'}
            secureTextEntry={!showConfirmPassword}
            placeholder="Confirm Password"
            style={[styles.textInput, styles.passwordInput]}
            value={confirmPassword}
            onChangeText={(text) => setConfirmPassword(text)}
          />
          <TouchableOpacity
            onPress={() => setShowConfirmPassword(!showConfirmPassword)}
            style={styles.eyeIcon}
          >
            <Text>{showConfirmPassword ? '🙈' : '👁️'}</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ ...styles.section, marginTop: 40 }}>
        <View style={{ margin: 5 }}>
          <MyButton
            text="Register"
            action={handleSignUp}
            mode="contained"
            size="small"
            style={{ backgroundColor: '#004225' }} // Set the background color here
          />
        </View>
        <View style={{ margin: 5 }}>
          <MyButton
            text="Have Already Account? LogIn"
            action={() => router.back()}
            mode="contained"
            size="small"
            style={{ backgroundColor: '#004225',
                borderColor: 'black', 
                borderWidth: 2,
             }} // Set the background color here
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    marginTop: 20,
    borderRadius: 50,
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
  section: {
    flex: 1,
    width: '100%',
    padding: 20,
  },
  textInput: {
    width: '100%',
    height: 45,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#CCC',
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#F9F9F9',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 15,
  },
  passwordInput: {
    flex: 1,
  },
  eyeIcon: {
    marginLeft: -30,
    padding: 10,
  },
});

export default SignUpScreen;
