import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import { windowHeight } from "../../../../../theme/appConstant";
import { Icons } from '../../../../../utils/icons'
import { Input } from "../../../../../commonComponents";
import { useTheme } from "@react-navigation/native";
import { useValues } from "../../../../../utils/context";

export function CheckDeliveryView({navigation}) {
    const {colors}=useTheme()
    const {viewRtlStyle,textRtlStyle,t}=useValues()
    return (
        <View>
            <Text style={[styles.checkDelivery,{color:colors.text},{textAlign:textRtlStyle}]}>{t('productDetailsPage.checkDelivery')}</Text>
            <Text style={[styles.content, { marginTop: windowHeight(6) },{textAlign:textRtlStyle}]}>{t('productDetailsPage.enterPincode')}</Text>
            <View style={{  marginTop: windowHeight(16) }}>
                <Input placeholder={t('productDetailsPage.pinCode')} isText text={t('productDetailsPage.check')} style={styles.input} />
            </View>
            <View style={[styles.deliveryView,{flexDirection:viewRtlStyle}]}>
                <Icons.deliveryTruck />
                <Text style={[styles.content, styles.reviewNameView]}>{t('productDetailsPage.freeDelivery')}</Text>
            </View>
            <View style={[styles.deliveryView,{flexDirection:viewRtlStyle}]}>
                <Icons.payment />
                <Text style={[styles.content, styles.reviewNameView]}>{t('productDetailsPage.cod')}</Text>
            </View>
            <View style={[styles.deliveryView,{flexDirection:viewRtlStyle}]}>
                <Icons.refund />
                <Text style={[styles.content, styles.reviewNameView]}>{t('productDetailsPage.easyReturn')}</Text>
            </View>
        </View>
    )
}