import React, { useState } from "react";
import { SafeAreaView, ScrollView, View, TouchableOpacity, Text } from "react-native";
import styles from "./styles";
import { Header, Switch } from "../../commonComponents";
import appColors from "../../theme/appColors";
import { MenuItem } from "../../otherComponents/drawerComponents/components";
import { ProfileView } from "./components";
import { DrawerItems } from "../data";
import { Icons } from "../../utils/icons";
import { CommonModal } from "../../otherComponents";
import { MultiLangaugeModal, CurrencyConverterModal } from "../../otherComponents";

export function Account({ navigation }) {
    const [rtl, setRtl] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [showCurrencyModal, setShowCurrencyModal] = useState(false);



    const goToScreen = (screen) => {
        const screenMap = {
            0: 'Home',
            1: 'Category',
            2: 'OrderHistory',
            3: 'whishList',
            4: 'Language',
            5: 'Notification',
            6: "EditProfile",
            7: 'Currency',
        };

        if (screen === 4) {
            setShowModal(!showModal);
        } else if (screen === 7) {
            setShowCurrencyModal(true);
        } else if (screen in screenMap) {
            navigation.navigate(screenMap[screen]);
        }
    };


    const login = () => {
        navigation.navigate('Login')
    }

    const visibleModal = () => {
        setShowModal(!showModal)
    }
    const visibleCurrencyModal = () => {
        setShowCurrencyModal(!showCurrencyModal)
    }


    return (
        <SafeAreaView style={{ backgroundColor: appColors.white }}>
            <CommonModal
                modal={<MultiLangaugeModal onPress={visibleModal} navigation={navigation} />}
                showModal={showModal}
                visibleModal={visibleModal}
            />

            <CommonModal
                modal={<CurrencyConverterModal onPress={visibleCurrencyModal} navigation={navigation} />}
                showModal={showCurrencyModal}
                visibleModal={visibleCurrencyModal}
            />
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
                        style={styles.switch}
                    />
                    <Switch
                        text="Dark"
                        icon={<Icons.dark />}
                        isOn={darkMode}
                        onToggle={() => setDarkMode(!darkMode)}
                        style={styles.switch}

                    />
                    <TouchableOpacity onPress={login} activeOpacity={0.7} style={[styles.signOutView, { backgroundColor: appColors.gray }]}>
                        <Icons.signOut />
                        <Text style={[styles.signOut]}>Sign Out</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
