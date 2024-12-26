





import { View, FlatList, TouchableOpacity, Text } from "react-native";
import { OptionButton, Selected } from "../../commonComponents";
import React, { FC } from "react";
import styles from "./styles";
import appColors from "../../theme/appColors";
import { useState } from "react";
import { delivery } from "../../screens/data";
import { GlobalStyle } from "../../styles/style";
import { useTheme } from "@react-navigation/native";
import { useValues } from "../../utils/context";

interface DeliveryTimeModalProps {
    onPress: () => void;
}

export const DeliveryTimeModal: FC<DeliveryTimeModalProps> = (props) => {
    const { colors } = useTheme();
    const { isDark, viewRtlStyle, t } = useValues();

    const [selectDeli, setSelectDeli] = useState<number>(0);

    const selectDelivery = (key: number): void => {
        setSelectDeli(key);
    };

    return (
        <View style={[GlobalStyle.modal, { backgroundColor: colors.background }]}>
            <FlatList
                numColumns={2}
                data={delivery}
                columnWrapperStyle={[styles.column, { flexDirection: viewRtlStyle }]}
                renderItem={({ item, index }: { item: any; index: number }) =>
                    <TouchableOpacity activeOpacity={0.8} onPress={() => selectDelivery(index)} style={[{ backgroundColor: isDark ? colors.primary : appColors.gray, borderColor: selectDeli === index ? appColors.primary : appColors.gray }, styles.view]}>
                        {selectDeli === index &&
                            <Selected />}
                        <Text style={[styles.text, { color: colors.text }]}>{t(item.delivery)}</Text>
                    </TouchableOpacity>
                }
            />
            <OptionButton txt1={t('commonText.cancle')} txt2={t('productFilter.apply')} onPress1={props.onPress} onPress2={props.onPress} />
        </View>
    );
};