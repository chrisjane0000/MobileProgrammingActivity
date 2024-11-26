import { MaterialCommunityIcons } from '@expo/vector-icons';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { useRouter } from 'expo-router';
import { Image, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function DrawerContent(props) {
    const router = useRouter();
    const year = new Date().getFullYear();

    const handleLogout = async () => {
        router.replace('/');
    };

    const { top, bottom } = useSafeAreaInsets();

    return (
        <View style={styles.container}>
            <DrawerContentScrollView
                {...props}
                scrollEnabled
                contentContainerStyle={{ paddingTop: top }}
            >
                <View style={styles.logoContainer}>
                    <Image
                        source={require('../../../assets/HerbalXchange.png')}
                        style={styles.logo}
                    />
                </View>
                <DrawerItemList {...props} />
                <DrawerItem
                    label="Logout"
                    icon={({ color, size }) => (
                        <MaterialCommunityIcons name="logout" color={color} size={size} />
                    )}
                    labelStyle={styles.logoutLabel}
                    onPress={handleLogout}
                />
            </DrawerContentScrollView>
            <View style={[styles.footer, { paddingBottom: bottom + 20 }]}>
                <Text style={styles.footerText}>
                    Copyright &copy; {year}. All rights reserved.
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 20,
    },
    logo: {
        alignSelf: 'center',
        height: 150,
        width: 150,
    },
    logoutLabel: {
        marginLeft: 10,
    },
    footer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    footerText: {
        fontSize: 12,
        color: '#666',
    },
});
