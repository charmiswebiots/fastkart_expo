import React, { useState } from "react";
import { TouchableOpacity, Text, ScrollView, View } from "react-native";
import { DrawerActions, useNavigation, useTheme } from "@react-navigation/native";
import styles from "./styles";
import { ProfileView } from "../../screens/account/components";
import { MenuItem, SupportView } from "./components";
import { DrawerItems } from "../../screens/data";
import appColors from "../../theme/appColors";
import { CommonModal } from "../commonModal";
import { CurrencyConverterModal, MultiLangaugeModal, SwitchComponents } from "../../otherComponents/index";
import { Icons } from "../../utils/icons";
import { useValues } from "../../utils/context";
import { windowHeight } from "../../theme/appConstant";

export function DrawerComponent() {
    const { colors } = useTheme();
    const { isDark, rtl, t } = useValues();
    const navigation = useNavigation();
    const [showModal, setShowModal] = useState(false);
    const [showCurrencyModal, setShowCurrencyModal] = useState(false);

    const goToScreen = (key) => {
        if (key !== 5 && key !== 9) {
            navigation.dispatch(DrawerActions.closeDrawer());
        }

        switch (key) {
            case 1:
                navigation.navigate("PageList");
                break;
            case 2:
                navigation.navigate("Category");
                break;
            case 3:
                navigation.navigate("OrderHistory");
                break;
            case 4:
                navigation.navigate("WhishList");
                break;
            case 5:
                setShowModal(true);
                break;
            case 6:
                navigation.navigate("Account");
                break;
            case 7:
                navigation.navigate("Notification");
                break;
            case 8:
                navigation.navigate("EditProfile");
                break;
            case 9:
                setShowCurrencyModal(true);
                break;
            default:
                break;
        }
    };

    const login = () => {
        navigation.navigate("Login");
    };

    const visibleModal = () => {
        setShowModal(!showModal);
    };

    const visibleCurrencyModal = () => {
        setShowCurrencyModal(!showCurrencyModal);
    };

    return (
        <View style={{ backgroundColor: isDark ? colors.card : appColors.white }}>
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
                <View style={styles.mainView}>
                    <ProfileView />
                    {DrawerItems.filter((_, key) => key >= 0 && key <= 10).map((item, key) => (
                        <MenuItem
                            key={key}
                            width="100%"
                            icon={item.icons}
                            text={item.name}
                            showSwitch={item.showSwitch}
                            onPress={() => goToScreen(key)}
                        />
                    ))}
                    <SwitchComponents style={{ [rtl ? 'top' : 'bottom']: rtl ? windowHeight(22) : windowHeight(3) }} />
                    <TouchableOpacity
                        onPress={login}
                        activeOpacity={0.7}
                        style={[styles.signOutView, { backgroundColor: isDark ? colors.primary : appColors.drawer }]}
                    >
                        <Icons.signOut />
                        <Text style={[styles.signOut, { color: colors.text }]}>{t('account.signOut')}</Text>
                    </TouchableOpacity>
                    <SupportView />
                </View>
            </ScrollView>
        </View>
    );
}
