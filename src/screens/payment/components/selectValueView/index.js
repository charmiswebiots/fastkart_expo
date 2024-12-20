// import React, { useState } from "react";
// import { View, FlatList, TouchableOpacity, Text, Image } from "react-native";
// import styles from "./styles";
// import { Icons } from "../../../../utils/icons";
// import images from "../../../../utils/images";
// import { Selected } from "../../../../commonComponents";
// import appColors from "../../../../theme/appColors";
// import { windowHeight, windowWidth } from "../../../../theme/appConstant";
// import { useTheme } from "@react-navigation/native";
// import { useLoadingContext, useValues } from "../../../../utils/context";

// const payments = [
//     {
//         type: 'paymentsArr.selectCard',
//         isCard: true,
//         values: [
//             { value: 'paymentsArr.card1', icons: images.mastercard },
//             { value: 'paymentsArr.card2', icons: images.visacard },
//             { value: 'paymentsArr.card3', icons: images.discovercard },
//         ],
//     },
//     {
//         type: 'paymentsArr.netBanking',
//         isCard: false,
//         values: [
//             { value: 'paymentsArr.netBankingType1' },
//             { value: 'paymentsArr.netBankingType2' },
//             { value: 'paymentsArr.netBankingType3' },
//             { value: 'paymentsArr.netBankingType4' },
//             { value: 'paymentsArr.netBankingType5' },
//             { value: 'paymentsArr.netBankingType6' },
//         ],
//     },
//     {
//         type: 'paymentsArr.walletUPI',
//         isCard: false,
//         values: [
//             { value: 'paymentsArr.waleetUPIType1' },
//             { value: 'paymentsArr.waleetUPIType2' },
//             { value: 'paymentsArr.waleetUPIType3' },
//             { value: 'paymentsArr.waleetUPIType4' },
//             { value: 'paymentsArr.waleetUPIType5' },
//             { value: 'paymentsArr.waleetUPIType6' },
//         ],
//     },
//     {
//         type: 'paymentsArr.cashOnDelivery',
//         isCard: true,
//         values: [{ value: 'paymentsArr.cashOnDelivery', icons: images.cashOnDelivery }],
//     },
// ];

// export function SelectValueView() {
//     const { isDark, viewRtlStyle, rtl, t } = useValues()
//     const { colors } = useTheme()
//     const [selectedType, setSelectedType] = useState(0);
//     const [selectedMethod, setSelectedMethod] = useState(0);


//     const [loading, setLoading] = useState(true);
//     const { addressLoaded, setAddressLoaded } = useLoadingContext();

//     useEffect(() => {
//         if (addressLoaded) {
//             setLoading(true);
//             setTimeout(() => {
//                 setLoading(false);
//                 setAddressLoaded(true);
//             }, 3000);
//         }
//     }, [addressLoaded, setAddressLoaded]);

//     const selectMethod = (methodIndex) => {
//         setSelectedMethod(methodIndex);
//     };

//     const renderPaymentItem = ({ item, index }) => (
//         <View style={styles.list}>
//             <TouchableOpacity
//                 onPress={() =>
//                     setSelectedType(selectedType === item.type ? null : item.type)
//                 }
//                 style={[styles.arrowView, { flexDirection: viewRtlStyle }]}
//             >
//                 <Text style={[styles.type, { color: colors.text }]}>{t(item.type)}</Text>
//                 <View
//                     style={[
//                         styles.arrow,
//                         {
//                             backgroundColor: isDark ? colors.primary : appColors.drawer,
//                             transform: [
//                                 { scaleX: rtl ? -1 : 1 },
//                                 selectedType === item.type ? { rotate: '90deg' } : null,
//                             ].filter(Boolean),
//                         },
//                     ]}
//                 >
//                     <Icons.sideArrow />
//                 </View>

//             </TouchableOpacity>

//             {selectedType === item.type && (
//                 <View>
//                     {item.isCard ? (
//                         item.values.map((data, key) => (

//                             <TouchableOpacity
//                                 key={key}
//                                 onPress={() => selectMethod(key)}
//                                 activeOpacity={0.7}
//                                 style={[
//                                     styles.select,
//                                     {
//                                         borderWidth: selectedMethod === key ? 1 : 0,
//                                         flexDirection: viewRtlStyle,
//                                         borderColor: appColors.primary,
//                                     },
//                                 ]}
//                             >

//                                 <Image
//                                     source={data.icons}
//                                     style={[
//                                         styles.icon,
//                                         data.value === "paymentsArr.cashOnDelivery" && styles.cashOnDeliveryIcon,

//                                         {
//                                             flexDirection: viewRtlStyle,
//                                         }]}
//                                 />
//                                 <Text style={[styles.value, { color: colors.text }]}>{t(data.value)}</Text>
//                                 {selectedMethod === key && (

//                                     <Selected />
//                                 )}



//                             </TouchableOpacity>

//                         ))
//                     ) : (
//                         <FlatList
//                             data={item.values}
//                             numColumns={2}
//                             columnWrapperStyle={{ justifyContent: "space-between" }}
//                             keyExtractor={(value, idx) => idx.toString()}
//                             renderItem={({ item, index }) => (
//                                 <View
//                                     style={[
//                                         styles.valueList,
//                                         {
//                                             justifyContent: "space-between",
//                                             paddingHorizontal: windowHeight(0),
//                                             width: windowWidth(202),
//                                             flexDirection: viewRtlStyle
//                                         },
//                                     ]}
//                                 >
//                                     <TouchableOpacity
//                                         style={{ flexDirection: viewRtlStyle }}
//                                         activeOpacity={0.7}
//                                         onPress={() => selectMethod(index)}
//                                     >
//                                         {selectedMethod === index ? (
//                                             <Icons.Selected />
//                                         ) : (
//                                             <Icons.unSelected />
//                                         )}

//                                         <Text
//                                             style={[
//                                                 styles.valueTxt,
//                                                 { color: colors.text },
//                                                 rtl ? styles.valueLeft : styles.valueRight,
//                                             ]}
//                                         >
//                                             {t(item.value)}
//                                         </Text>

//                                     </TouchableOpacity>
//                                 </View>
//                             )}
//                         />
//                     )}
//                 </View>
//             )}
//         </View>
//     );

//     return (
//         <View style={[styles.listView, { flexDirection: viewRtlStyle }]}>
//             <FlatList
//                 data={payments}
//                 keyExtractor={(item, index) => index.toString()}
//                 renderItem={renderPaymentItem}
//                 ItemSeparatorComponent={() => <View style={styles.separator} />}
//             />
//         </View>
//     );
// }





import React, { useState, useEffect } from "react";
import { View, FlatList, TouchableOpacity, Text, Image } from "react-native";
import styles from "./styles";
import { Icons } from "../../../../utils/icons";
import images from "../../../../utils/images";
import { Selected } from "../../../../commonComponents";
import appColors from "../../../../theme/appColors";
import { windowHeight, windowWidth } from "../../../../theme/appConstant";
import { useTheme } from "@react-navigation/native";
import { useLoadingContext, useValues } from "../../../../utils/context";
import ContentLoader, { Rect } from "react-content-loader/native"; 

const payments = [
    {
        type: 'paymentsArr.selectCard',
        isCard: true,
        values: [
            { value: 'paymentsArr.card1', icons: images.mastercard },
            { value: 'paymentsArr.card2', icons: images.visacard },
            { value: 'paymentsArr.card3', icons: images.discovercard },
        ],
    },
    {
        type: 'paymentsArr.netBanking',
        isCard: false,
        values: [
            { value: 'paymentsArr.netBankingType1' },
            { value: 'paymentsArr.netBankingType2' },
            { value: 'paymentsArr.netBankingType3' },
            { value: 'paymentsArr.netBankingType4' },
            { value: 'paymentsArr.netBankingType5' },
            { value: 'paymentsArr.netBankingType6' },
        ],
    },
    {
        type: 'paymentsArr.walletUPI',
        isCard: false,
        values: [
            { value: 'paymentsArr.waleetUPIType1' },
            { value: 'paymentsArr.waleetUPIType2' },
            { value: 'paymentsArr.waleetUPIType3' },
            { value: 'paymentsArr.waleetUPIType4' },
            { value: 'paymentsArr.waleetUPIType5' },
            { value: 'paymentsArr.waleetUPIType6' },
        ],
    },
    {
        type: 'paymentsArr.cashOnDelivery',
        isCard: true,
        values: [{ value: 'paymentsArr.cashOnDelivery', icons: images.cashOnDelivery }],
    },
];

export function SelectValueView() {
    const { isDark, viewRtlStyle, rtl, t } = useValues();
    const { colors } = useTheme();
    const [selectedType, setSelectedType] = useState(0);
    const [selectedMethod, setSelectedMethod] = useState(0);
    const [loading, setLoading] = useState(false);
    const { addressLoaded, setAddressLoaded } = useLoadingContext();

    useEffect(() => {
        if (addressLoaded) {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                setAddressLoaded(true);
            }, 3000);
        }
    }, [addressLoaded, setAddressLoaded]);

    const selectMethod = (methodIndex) => {
        setSelectedMethod(methodIndex);
    };

    const renderPaymentItem = ({ item, index }) => (
        <View style={styles.list}>
            <TouchableOpacity
                onPress={() => setSelectedType(selectedType === item.type ? null : item.type)}
                style={[styles.arrowView, { flexDirection: viewRtlStyle }]}
            >
                <Text style={[styles.type, { color: colors.text }]}>{t(item.type)}</Text>
                <View
                    style={[
                        styles.arrow,
                        {
                            backgroundColor: isDark ? colors.primary : appColors.drawer,
                            transform: [
                                { scaleX: rtl ? -1 : 1 },
                                selectedType === item.type ? { rotate: '90deg' } : null,
                            ].filter(Boolean),
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
                                        data.value === "paymentsArr.cashOnDelivery" && styles.cashOnDeliveryIcon,
                                        { flexDirection: viewRtlStyle },
                                    ]}
                                />
                                <Text style={[styles.value, { color: colors.text }]}>{t(data.value)}</Text>
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
                                            width: windowWidth(202),
                                            flexDirection: viewRtlStyle,
                                        },
                                    ]}
                                >
                                    <TouchableOpacity
                                        style={{ flexDirection: viewRtlStyle }}
                                        activeOpacity={0.7}
                                        onPress={() => selectMethod(index)}
                                    >
                                        {selectedMethod === index ? <Icons.Selected /> : <Icons.unSelected />}
                                        <Text
                                            style={[
                                                styles.valueTxt,
                                                { color: colors.text },
                                                rtl ? styles.valueLeft : styles.valueRight,
                                            ]}
                                        >
                                            {t(item.value)}
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

    const SkeletonLoader = () => (
        <ContentLoader
            speed={1}
            width="100%"
            height={windowHeight(240)}
            viewBox="0 0 390 240"
            backgroundColor={isDark ? appColors.loaderDarkBackground : appColors.loaderBackground}
            foregroundColor={isDark ? appColors.loaderDarkHighlight : appColors.loaderLightHighlight}
        >
            <Rect x="16" y="8" rx="4" ry="4" width="65%" height={windowHeight(25)} />
            <Rect x="338" y="8" rx="4" ry="4" width="8%" height={windowHeight(25)} />
            <Rect x="16" y="60" rx="4" ry="4" width="65%" height={windowHeight(25)} />
            <Rect x="338" y="60" rx="4" ry="4" width="8%" height={windowHeight(25)} />
            <Rect x="16" y="120" rx="4" ry="4" width="65%" height={windowHeight(25)} />
            <Rect x="338" y="120" rx="4" ry="4" width="8%" height={windowHeight(25)} />
            <Rect x="16" y="170" rx="4" ry="4" width="65%" height={windowHeight(25)} />
            <Rect x="338" y="170" rx="4" ry="4" width="8%" height={windowHeight(25)} />
          
        </ContentLoader>
    );

    return (
        <View style={[styles.listView, { flexDirection: viewRtlStyle }]}>
            {loading ? (
                <SkeletonLoader />
            ) : (
                <FlatList
                    data={payments}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={renderPaymentItem}
                    ItemSeparatorComponent={() => <View style={styles.separator} />}
                />
            )}
        </View>
    );
}
