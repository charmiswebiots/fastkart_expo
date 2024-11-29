import React, { useState } from "react";
import { SafeAreaView, ScrollView, View,TouchableOpacity ,Text} from "react-native";
import styles from "./styles";
import { Header, Switch } from "../../commonComponents";
import appColors from "../../theme/appColors";
import { MenuItem } from "../../otherComponents/drawerComponents/components";
import { ProfileView } from "./components";
import { DrawerItems } from "../data";
import { Icons } from "../../utils/icons";

export function Account({ navigation }) {
    const [showModal, setShowModal] = useState(false);
    const [rtl, setRtl] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    const goToScreen = (screen) => {
        const screenMap = {
            2: "Category",
            3: "OrderHistory",
            4: "Wishlist",
            6: "Account",
            7: "Notification",
            8: "EditProfile",
        };

        if (screen === 5) {
            setShowModal(!showModal);
        } else if (screen in screenMap) {
            navigation.navigate(screenMap[screen]);
        }
    };

    const login=()=>{
        navigation.navigate('Login')
    }

    return (
        <SafeAreaView style={{ backgroundColor: appColors.white, flex: 1 }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Header
                    onPress={() => navigation.goBack()}
                    isText
                    titleText="Account"
                />
                <View style={styles.mainView}>
                    <ProfileView />
                    {DrawerItems.filter((_, key) => key !== 1 && key !== 6).map((item, key) => (
                        <MenuItem
                            key={key}
                            width="100%"
                            icon={item.icons}
                            text={item.name}
                            showSwitch={item.showSwitch}
                            onPress={() => goToScreen(key)}
                        />
                    ))}
                    <Switch
                        text="RTL"
                        icon={<Icons.rtl />}
                        isOn={rtl}
                        onToggle={() => setRtl(!rtl)}
                    />
                    <Switch
                        text="Dark"
                        icon={<Icons.dark />}
                        isOn={darkMode}
                        onToggle={() => setDarkMode(!darkMode)}
                    />
                     <TouchableOpacity onPress={login} activeOpacity={0.7} style={[styles.signOutView, { backgroundColor:appColors.gray }]}>
                        <Icons.signOut />
                        <Text style={[styles.signOut]}>Sign Out</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
