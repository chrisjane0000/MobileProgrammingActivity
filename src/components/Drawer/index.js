import { AntDesign } from '@expo/vector-icons';
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
                    label={() => (
                        <View style={styles.logoutContainer}>
                            <AntDesign name="logout" size={24} color="black" />
                            <Text style={styles.logoutLabel}>Logout</Text>
                        </View>
                    )}
                    onPress={handleLogout}
                    style={styles.logoutItem}
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
        paddingBottom: 40,
    },
    logo: {
        alignSelf: 'center',
        height: 280,
        width: 260,
        borderRadius: 130
    },
    logoutContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    logoutLabel: {
        marginLeft: 10,
        fontSize: 16,
        color: '#004225',
    },
    logoutItem: {
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
