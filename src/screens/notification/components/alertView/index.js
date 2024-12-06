import React, { useState } from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import { Icons } from "../../../../utils/icons";
import appColors from "../../../../theme/appColors";
import { useValues } from "../../../../utils/context";
import { useTheme } from "@react-navigation/native";

export function AlertView(props) {
    const [tab, setTab] = useState(0);
    const {isDark}=useValues()
    const {colors}=useTheme()

    const changeTab = (value) => {
        setTab(value);
    };

    return (
        <View style={[styles.offersView,{backgroundColor:isDark?colors.primary:appColors.gray}]}>
            <View style={[styles.alertView]}>
                <View>
                    {tab === 0 && <View style={styles.line} />}
                    <Text 
                        onPress={() => changeTab(0)} 
                        style={[
                            styles.alert, 
                            { color: tab === 0 ? appColors.primary : appColors.black } 
                        ]}
                    >
                        Alerts
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
                        Offers
                    </Text>
                    {tab === 1 && <View style={styles.line} />}
                </View>
            </View>
            <View style={styles.readView}>
                <Icons.markRead />
                <Text style={styles.readTxt}>Mark all as read</Text>
            </View>
        </View>
    );
}
