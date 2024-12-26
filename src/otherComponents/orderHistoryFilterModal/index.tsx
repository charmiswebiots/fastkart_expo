




import { View, FlatList, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import appColors from "../../theme/appColors";
import { OptionButton } from "../../commonComponents";
import { filterHistory, orderHistoryFilter } from "../../screens/data";
import { useState } from "react";
import { useTheme } from "@react-navigation/native";
import { useValues } from "../../utils/context";

interface OrderHistoryFilterModalProps {
    showModal: () => void;
}

interface Item {
    id: string;
    day: string;
    value: Array<{ id: string; txt: string }>;
}

export function OrderHistoryFilterModal({ showModal }: OrderHistoryFilterModalProps): JSX.Element {
    const { isDark, textRtlStyle, viewRtlStyle, t } = useValues();
    const { colors } = useTheme();
    const [selectedOffer, setSelectedOffer] = useState<string | null>(null);
    const [Offer, setOffer] = useState<string | null>(null);

    const selectOffer = (val: string): void => {
        setSelectedOffer(val);
    };

    const offerSelect = (val: string): void => {
        setOffer(val);
    };

    return (
        <View style={[styles.mainView, { backgroundColor: colors.background }]}>
            <FlatList
                data={orderHistoryFilter}
                renderItem={({ item }: { item: Item }) =>
                    <View style={styles.listView}>
                        <Text style={[styles.dayTxt, { textAlign: textRtlStyle }]}>{t(item.day)}</Text>
                        <FlatList
                            data={item.value}
                            numColumns={2}
                            columnWrapperStyle={[styles.columnWrapperStyle, { flexDirection: viewRtlStyle }]}
                            ItemSeparatorComponent={() => <View style={styles.separator} />}
                            renderItem={({ item }: { item: { id: string; txt: string }; index: number }) =>
                                <TouchableOpacity activeOpacity={0.7} onPress={() => selectOffer(item.id)} style={[styles.dataView, {
                                    backgroundColor: item.id === selectedOffer ? appColors.primary
                                        : isDark
                                            ? colors.primary
                                            : appColors.white,
                                    borderColor: appColors.primary,
                                }]}>
                                    <Text style={[styles.txt, { color: item.id === selectedOffer ? appColors.white : appColors.content }]}>{t(item.txt)}</Text>
                                </TouchableOpacity>
                            }
                        />
                    </View>
                }
            />
            <FlatList
                data={filterHistory}
                renderItem={({ item }: { item: Item }) =>
                    <View style={styles.listView}>
                        <Text style={[styles.dayTxt, { textAlign: textRtlStyle }]}>{t(item.day)}</Text>
                        <FlatList
                            data={item.value}
                            numColumns={2}
                            columnWrapperStyle={[styles.columnWrapperStyle, { flexDirection: viewRtlStyle }]}
                            ItemSeparatorComponent={() => <View style={styles.separator} />}
                            renderItem={({ item }: { item: { id: string; txt: string }; index: number }) =>
                                <TouchableOpacity activeOpacity={0.7} onPress={() => offerSelect(item.id)} style={[styles.dataView, {
                                    backgroundColor: item.id === Offer ? appColors.primary
                                        : isDark
                                            ? colors.primary
                                            : appColors.white,
                                    borderColor: appColors.primary,
                                }]}>
                                    <Text style={[styles.txt, { color: item.id === Offer ? appColors.white : appColors.content }]}>{t(item.txt)}</Text>
                                </TouchableOpacity>
                            }
                        />
                    </View>
                }
            />
            <OptionButton
                txt1={t('commonText.close')}
                txt2={t('productFilter.apply')}
                onPress1={showModal}
                onPress2={showModal}
                style={styles.btn}
            />
        </View>
    );
}