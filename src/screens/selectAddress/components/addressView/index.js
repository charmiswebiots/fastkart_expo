import React from "react";
import { View, ScrollView, TouchableOpacity, Text, Image } from "react-native";
import styles from "./styles";
import appColors from "../../../../theme/appColors";
import images from "../../../../utils/images";
import { windowHeight } from "../../../../theme/appConstant";
import { Icons } from "../../../../utils/icons";
import { location } from '../../../../screens/data'
import { useState } from "react";
import { useTheme } from "@react-navigation/native";
import { useValues } from "../../../../utils/context";

export function AddressView() {
    const { colors } = useTheme()
    const { isDark ,viewRtlStyle,textRtlStyle,t} = useValues()

    const [isDefault, setIsDefault] = useState(0);

    const setDefault = (value) => {
        setIsDefault(value)
    }
    return (
        <ScrollView contentContainerStyle={styles.scrollView} showsVerticalScrollIndicator={false}>
            {location.map((item, key) =>
                <TouchableOpacity onPress={() => setDefault(key)} activeOpacity={0.8} style={[styles.list, { borderWidth: key === isDefault ? windowHeight(2) : 0, backgroundColor: isDark ? colors.primary : appColors.gray, flexDirection: viewRtlStyle}]}>
                    <View>
                        <View style={[styles.optionView, { flexDirection: viewRtlStyle }]}>
                            {item.isWork ? <Icons.work /> : <Icons.home />}
                            <Text style={[styles.optionTxt, { color: colors.text }]}>{item.isWork ? t('selectDeliveryAddressPage.work') : t('tabBar.home')}  </Text>
                            {key === 0 &&
                                <Text style={styles.default}>{t('selectDeliveryAddressPage.default')}</Text>}
                        </View>
                        <Text style={[styles.name, { color: colors.text, textAlign: textRtlStyle }]}>{t(item.name)}</Text>
                        <Text style={[styles.add, { textAlign: textRtlStyle }]}>{t(item.address)}</Text>
                    </View>
                    <Image source={images.addressMap} style={styles.addMap} />
                </TouchableOpacity>)}
        </ScrollView>
    )
}