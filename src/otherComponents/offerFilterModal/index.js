import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import styles from "./styles";
import appColors from "../../theme/appColors";
import { offersFilter } from "../../screens/data";
import { GlobalStyle } from "../../styles/style";
import { OptionButton } from "../../commonComponents";
import { useTheme } from "@react-navigation/native";
import { useValues } from "../../utils/context";

export function OfferFilterModal({ showModal }) {
    const { colors } = useTheme();
    const { isDark ,t} = useValues();
    const [selectedOffer, setSelectedOffer] = useState(0);

    return (
        <View style={[GlobalStyle.modal, { backgroundColor: colors.background }]}>
            <Text style={[styles.filter, { color: colors.text }]}>{t('commonText.filter')}</Text>
            <FlatList
                data={offersFilter}
                numColumns={2}
                columnWrapperStyle={styles.columnWrapperStyle}
                renderItem={({ item, index }) => (
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => setSelectedOffer(index)}
                        style={[
                            styles.listView,
                            {
                                backgroundColor: selectedOffer === index
                                    ? appColors.primary
                                    : isDark
                                    ? colors.primary 
                                    : appColors.white,
                                borderColor: appColors.primary,
                            },
                        ]}
                    >
                        <Text
                            style={[
                                styles.txt,
                                {
                                    color: selectedOffer === index
                                        ? isDark
                                            ? appColors.white 
                                            : appColors.white 
                                        : isDark
                                        ? appColors.gray 
                                        : appColors.content, 
                                },
                            ]}
                        >
                            {t(item.offer)}
                        </Text>
                    </TouchableOpacity>
                )}
                keyExtractor={(item, index) => index.toString()}
            />
            <OptionButton
                 txt1={'commonText.close'}
                 txt2={'productFilter.apply'}
                onPress1={showModal}
                onPress2={showModal}
            />
        </View>
    );
}
