import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
    Image,
    StyleSheet,
    View,
} from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper'; // Importing from react-native-paper for modern UI
import { SafeAreaView } from 'react-native-safe-area-context';

const LoginScreen = () => {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isShowPassword, setIsShowPassword] = useState(false);

    return (
        <SafeAreaView style={styles.container}>
            {/* Background Design */}
            <View style={styles.background}>
                <View style={styles.greenStripeTop} />
                <View style={styles.greenStripeBottom} />
            </View>

            {/* Login Card */}
            <View style={styles.card}>
                {/* Logo */}
                <Image
                    source={require('../../assets/HerbalXchange.png')}
                    style={styles.avatar}
                />
                <Text variant="headlineMedium" style={styles.title}>
                    Login
                </Text>
                <Text variant="bodySmall" style={styles.subtitle}>
                    Sign in to continue.
                </Text>

                {/* Username Input */}
                <TextInput
                    value={username}
                    onChangeText={text => setUsername(text)}
                    label="Username"
                    placeholder="Enter your username"
                    style={styles.input}
                />

                {/* Password Input */}
                <TextInput
                    value={password}
                    onChangeText={text => setPassword(text)}
                    label="Password"
                    placeholder="Enter your password"
                    secureTextEntry={!isShowPassword}
                    right={<TextInput.Icon icon={isShowPassword ? "eye" : "eye-off"} onPress={() => setIsShowPassword(!isShowPassword)} />}
                    style={styles.input}
                />

                {/* Login Button */}
                <Button
                    mode="contained"
                    onPress={() => router.replace('/dashboard')}
                    style={styles.button}
                >
                    Log In
                </Button>

                {/* Forgot Password */}
                <Button
                    mode="text"
                    onPress={() => router.push('/recover')}
                    style={styles.forgotPassword}
                >
                    Forgot Password?
                </Button>

                {/* Sign Up */}
                <Button
                    mode="outlined"
                    onPress={() => router.push('/register')}
                    style={styles.signUp}
                >
                    Don't have an account? Sign Up
                </Button>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        justifyContent: 'center',
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
        top: 200,
        left: '-10%',
    },
    greenStripeBottom: {
        position: 'absolute',
        width: '150%',
        height: '20%',
        backgroundColor: '#004225',
        transform: [{ rotate: '-10deg' }],
        bottom: 200,
        left: '-10%',
    },
    card: {
        backgroundColor: 'white',
        marginHorizontal: 20,
        borderRadius: 20,
        padding: 20,
        alignItems: 'center',
        elevation: 5,
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
    },
    button: {
        marginVertical: 10,
        width: '100%',
        backgroundColor: '#004225',
    },
    forgotPassword: {
        marginTop: 10,
        color: '#004225',
    },
    signUp: {
        marginTop: 10,
        borderColor: '#004225',
    },
});

export default LoginScreen;
