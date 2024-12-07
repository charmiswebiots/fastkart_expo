import React, { useState } from "react";
import { View, FlatList, TouchableOpacity, Text, Image } from "react-native";
import styles from "./styles";
import { Icons } from "../../../../utils/icons";
import images from "../../../../utils/images";
import { Selected } from "../../../../commonComponents";
import appColors from "../../../../theme/appColors";
import { windowHeight, windowWidth } from "../../../../theme/appConstant";
import { useTheme } from "@react-navigation/native";
import { useValues } from "../../../../utils/context";

const payments = [
    {
        type: "Select Card",
        isCard: true,
        values: [
            { value: "9800 XXXX XXXX 0545", icons: images.mastercard },
            { value: "6580 XXXX XXXX 2562", icons: images.visacard },
            { value: "5125 XXXX XXXX 6262", icons: images.discovercard },
        ],
    },
    {
        type: "Net Banking",
        isCard: false,
        values: [
            { value: "Industrial & Commercial Bank" },
            { value: "Agricultural Bank" },
            { value: "Bank of America" },
            { value: "Construction Bank Corp." },
            { value: "HSBC Holdings" },
            { value: "JPMorgan Chase & Co." },
        ],
    },
    {
        type: "Wallet/UPI",
        isCard: false,
        values: [
            { value: "Adyen" },
            { value: "AlliedWallet" },
            { value: "Brinks" },
            { value: "Airtel Money" },
            { value: "Apple Pay" },
            { value: "CardFree" },
        ],
    },
    {
        type: "Cash on Delivery",
        isCard: true,
        values: [{ value: "Cash on Delivery", icons: images.cashOnDelivery }],
    },
];

export function SelectValueView() {
    const { isDark, viewRtlStyle, rtl } = useValues()
    const { colors } = useTheme()
    const [selectedType, setSelectedType] = useState(0);
    const [selectedMethod, setSelectedMethod] = useState(0);

    const selectMethod = (methodIndex) => {
        setSelectedMethod(methodIndex);
    };

    const renderPaymentItem = ({ item, index }) => (
        <View style={styles.list}>
            <TouchableOpacity
                onPress={() =>
                    setSelectedType(selectedType === item.type ? null : item.type)
                }
                style={[styles.arrowView, { flexDirection: viewRtlStyle }]}
            >
                <Text style={[styles.type, { color: colors.text }]}>{item.type}</Text>
                <View
                    style={[
                        styles.arrow,
                        {
                            backgroundColor: isDark ? colors.primary : appColors.drawer,
                            transform: [{ scaleX: rtl ? -1 : 1 }],
                        },
                    ]}
                >
                    <Icons.sideArrow />
                </View>
            </TouchableOpacity>

            {selectedType === item.type && (
                <View>
                    {item.isCard ? (
                        item.values.map((data, key) => (

                            <TouchableOpacity
                                key={key}
                                onPress={() => selectMethod(key)}
                                activeOpacity={0.7}
                                style={[
                                    styles.select,
                                    {
                                        borderWidth: selectedMethod === key ? 1 : 0,
                                        flexDirection: viewRtlStyle,
                                        borderColor: appColors.primary,
                                    },
                                ]}
                            >

                                <Image
                                    source={data.icons}
                                    style={[
                                        styles.icon,
                                        data.value === "Cash on Delivery" && styles.cashOnDeliveryIcon,
                                    ]}
                                />
                                <Text style={[styles.value, { color: colors.text }]}>{data.value}</Text>
                                {selectedMethod === key && <Selected />}
                            </TouchableOpacity>

                        ))
                    ) : (
                        <FlatList
                            data={item.values}
                            numColumns={2}
                            columnWrapperStyle={{ justifyContent: "space-between" }}
                            keyExtractor={(value, idx) => idx.toString()}
                            renderItem={({ item, index }) => (
                                <View
                                    style={[
                                        styles.valueList,
                                        {
                                            justifyContent: "space-between",
                                            paddingHorizontal: windowHeight(0),
                                            right: windowHeight(1.6),
                                            width: windowWidth(202),
                                            flexDirection:viewRtlStyle
                                        },
                                    ]}
                                >
                                    <TouchableOpacity
                                        style={{ flexDirection: viewRtlStyle }}
                                        activeOpacity={0.7}
                                        onPress={() => selectMethod(index)}
                                    >
                                        {selectedMethod === index ? (
                                            <Icons.Selected />
                                        ) : (
                                            <Icons.unSelected />
                                        )}

                                        <Text
                                            style={[
                                                styles.valueTxt,
                                                styles.valueLeft,
                                                { color: colors.text },
                                            ]}
                                        >
                                            {item.value}
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            )}
                        />
                    )}
                </View>
            )}
        </View>
    );

    return (
        <View style={[styles.listView, { flexDirection: viewRtlStyle }]}>
            <FlatList
                data={payments}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderPaymentItem}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
            />
        </View>
    );
}
