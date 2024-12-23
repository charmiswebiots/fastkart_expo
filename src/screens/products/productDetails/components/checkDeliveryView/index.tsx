import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import { Icons } from '../../../../../utils/icons'
import { Input } from "../../../../../commonComponents";
import { useTheme } from "@react-navigation/native";
import { useValues } from "../../../../../utils/context";
import ContentLoader from "react-content-loader/native";

export function CheckDeliveryView() {
    const { colors } = useTheme()
    const { viewRtlStyle, textRtlStyle, t } = useValues()

   
        
    return (
        <View>
            <Text style={[styles.checkDelivery, { color: colors.text }, { textAlign: textRtlStyle }]}>{t('productDetailsPage.checkDelivery')}</Text>
            <Text style={[styles.content, { textAlign: textRtlStyle }]}>{t('productDetailsPage.enterPincode')}</Text>
            <View style={styles.inputView}>
                <Input placeholder={t('productDetailsPage.pinCode')} isText text={t('productDetailsPage.check')} style={styles.input} />
            </View>
            <View style={[styles.deliveryView, { flexDirection: viewRtlStyle }]}>
                <Icons.deliveryTruck />
                <Text style={[styles.content, styles.reviewNameView]}>{t('productDetailsPage.freeDelivery')}</Text>
            </View>
            <View style={[styles.deliveryView, { flexDirection: viewRtlStyle }]}>
                <Icons.payment />
                <Text style={[styles.content, styles.reviewNameView]}>{t('productDetailsPage.cod')}</Text>
            </View>
            <View style={[styles.deliveryView, { flexDirection: viewRtlStyle }]}>
                <Icons.refund />
                <Text style={[styles.content, styles.reviewNameView]}>{t('productDetailsPage.easyReturn')}</Text>
            </View>
        </View>
    )
}