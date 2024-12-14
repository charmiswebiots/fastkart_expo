import React from "react";
import { View } from "react-native";
import { Total, Button } from "../../../../../commonComponents";
import appColors from "../../../../../theme/appColors";
import styles from "./styles";
import { useValues } from "../../../../../utils/context";

export function TotalView({ onPress }) {
    const {t,isDark}=useValues()
    return (
        <View style={styles.total}>
            <Total title={t('cartPage.orderDetails')} style={{color:isDark?appColors.white:colors.primary}}/>
            <Button text={t('commonTotal.proceedtoCheckout')} style={styles.btn}
                color={appColors.white} onPress={onPress} />
        </View>
    )
}