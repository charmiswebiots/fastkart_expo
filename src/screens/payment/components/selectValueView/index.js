import React, { useState } from "react";
import { View, FlatList, TouchableOpacity, Text, Image } from "react-native";
import styles from "./styles";
import { Icons } from "../../../../utils/icons";
import images from "../../../../utils/images";
import { Selected } from "../../../../commonComponents";
import appColors from "../../../../theme/appColors";
import { windowHeight, windowWidth } from "../../../../theme/appConstant";

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
        values: [{ value: "Cash on Delivery" }],
    },
];

export function SelectValueView(props) {
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
                style={[styles.arrowView, { flexDirection: "row" }]}
            >
                <Text style={styles.type}>{item.type}</Text>
                <View style={styles.arrow}>
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
                                        flexDirection: "row",
                                        borderColor: appColors.primary,
                                    },
                                ]}
                            >
                                <Image source={data.icons} style={styles.icon} />
                                <Text style={[styles.value]}>{data.value}</Text>
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
                                        },
                                    ]}
                                >
                                    <TouchableOpacity
                                        activeOpacity={0.7}
                                        onPress={() => selectMethod(index)}
                                    >
                                        {selectedMethod === index ? (
                                            <Icons.Selected />
                                        ) : (
                                            <Icons.unSelected />
                                        )}
                                    </TouchableOpacity>
                                    <Text
                                        style={[
                                            styles.valueTxt,
                                            styles.valueLeft,
                                            { color: appColors.black },
                                        ]}
                                    >
                                        {item.value}
                                    </Text>
                                </View>
                            )}
                        />
                    )}
                </View>
            )}
        </View>
    );

    return (
        <View style={styles.listView}>
            <FlatList
                data={payments}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderPaymentItem}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
            />
        </View>
    );
}
