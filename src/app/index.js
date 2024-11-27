import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
    Image,
    StyleSheet,
    TouchableOpacity,
    View,
} from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

const LoginScreen = () => {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isShowPassword, setIsShowPassword] = useState(false);

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
                <Text variant="headlineMedium" style={styles.title}>
                    Login
                </Text>
                <Text variant="bodySmall" style={styles.subtitle}>
                    Sign in to continue.
                </Text>

                <TextInput
                    value={username}
                    onChangeText={text => setUsername(text)}
                    label="Username"
                    placeholder="Enter your username"
                    style={styles.input}
                    theme={{
                        colors: {
                            primary: '#004225',
                            text: 'black',
                            placeholder: 'white',
                            background: 'white',
                            surface: 'white',
                            error: 'red',
                        },
                    }}
                />

                <TextInput
                    value={password}
                    onChangeText={text => setPassword(text)}
                    label="Password"
                    placeholder="Enter your password"
                    secureTextEntry={!isShowPassword}
                    right={<TextInput.Icon icon={isShowPassword ? "eye" : "eye-off"} onPress={() => setIsShowPassword(!isShowPassword)} />}
                    style={styles.input}
                    theme={{
                        colors: {
                            primary: '#004225',
                            text: 'black',
                            placeholder: 'white',
                            background: 'white',
                            surface: 'white',
                            error: 'red',
                        },
                    }}
                />

                <Button
                    mode="contained"
                    onPress={() => router.replace('/dashboard')}
                    style={styles.button}
                >
                    Log In
                </Button>

                <Button
                    mode="text"
                    onPress={() => router.push('/recover')}
                    style={styles.forgotPassword}
                >
                    <Text style={styles.forgot}>Forgot Password?</Text>
                </Button>


                <TouchableOpacity
                    mode="outlined"
                    onPress={() => router.push('/register')}
                    style={styles.signUp}
                >
                    <Text style={styles.signUpText}>Don't have an account? </Text>
                    <Text style={styles.signUpText1}>Sign Up</Text>
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
    signUpText: {
        right: 30
    },
    signUpText1: {
        fontSize: 15,
        left: 125,
        bottom: 21,
        fontWeight: 'bold',
        color: 'darkgreen'
    },
});

export default LoginScreen;
