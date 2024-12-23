import React, { useState } from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import { Icons } from "../../../../utils/icons";
import appColors from "../../../../theme/appColors";
import { useValues } from "../../../../utils/context";
import { useTheme } from "@react-navigation/native";

export function AlertView() {
    const [tab, setTab] = useState(0);
    const {isDark,viewRtlStyle,t}=useValues()
    const {colors}=useTheme()

    const changeTab = (value) => {
        setTab(value);
    };

    return (
        <View style={[styles.offersView,{backgroundColor:isDark?colors.primary:appColors.gray},{flexDirection:viewRtlStyle}]}>
            <View style={[styles.alertView,{flexDirection:viewRtlStyle}]}>
                <View>
                    {tab === 0 && <View style={styles.line} />}
                    <Text 
                        onPress={() => changeTab(0)} 
                        style={[
                            styles.alert, 
                            { color: tab === 0 ? appColors.primary : appColors.black } 
                        ]}
                    >
                        {t('notificationPage.alerts')}
                    </Text>
                </View>
                <View style={styles.lineViewRight}>
                    <Text 
                        onPress={() => changeTab(1)} 
                        style={[
                            styles.alert, 
                            { color: tab === 1 ? appColors.primary :isDark?colors.text: appColors.black } 
                        ]}
                    >
                        {t('notificationPage.offer')}
                    </Text>
                    {tab === 1 && <View style={styles.line} />}
                </View>
            </View>
            <View style={[styles.readView,{flexDirection:viewRtlStyle}]}>
                <Icons.markRead />
                <Text style={styles.readTxt}>{t('notificationPage.markAsRead')}</Text>
            </View>
        </View>
    );
}
