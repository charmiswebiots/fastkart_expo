// import React from "react";
// import { View, Text, TouchableOpacity } from "react-native";
// import styles from "./styles";
// import { langauges } from "../../screens/data";
// import { GlobalStyle } from "../../styles/style";
// import { useTheme } from "@react-navigation/native";
// import { useValues } from "../../utils/context";
// import i18n from "i18next";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// export function MultiLangaugeModal({ onPress }) {
//     const { colors } = useTheme();
//     const { textRtlStyle, viewRtlStyle, t, setRtl } = useValues();

//     const handleLanguageChange = async (language) => {
//         i18n.changeLanguage(language);
//         await AsyncStorage.setItem('selectedLanguage', language);
//         setRtl(language === 'ar');
//         onPress()
//     };

//     return (
//         <View style={[GlobalStyle.modal, { backgroundColor: colors.background }]}>
//             <Text style={[styles.text, { color: colors.text, textAlign: textRtlStyle }]}>
//                 {t('multiLangaugeModal.selectLanguage')}
//             </Text>
//             {langauges.map((item) => (
//                 <TouchableOpacity
//                     key={item.key}
//                     activeOpacity={0.8}
//                     style={[styles.icon, { flexDirection: viewRtlStyle }]}
//                     onPress={() => handleLanguageChange(item.key)}
//                 >
//                     {item.icons}
//                     <Text style={[styles.text1, { color: colors.text }]}>
//                         {t(item.name)}
//                     </Text>
//                 </TouchableOpacity>
//             ))}
//         </View>
//     );
// }




import React, { FC } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import { langauges } from "../../screens/data";
import { GlobalStyle } from "../../styles/style";
import { useTheme } from "@react-navigation/native";
import { useValues } from "../../utils/context";
import i18n from "i18next";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface MultiLanguageModalProps {
    onPress: () => void;
}

export function MultiLangaugeModal ({ onPress }:MultiLanguageModalProps)  {
    const { colors } = useTheme();
    const { textRtlStyle, viewRtlStyle, t, setRtl } = useValues();

    const handleLanguageChange = async (language: string): Promise<void> => {
        i18n.changeLanguage(language);
        await AsyncStorage.setItem('selectedLanguage', language);
        setRtl(language === 'ar');
        onPress();
    };

    return (
        <View style={[GlobalStyle.modal, { backgroundColor: colors.background }]}>
            <Text style={[styles.text, { color: colors.text, textAlign: textRtlStyle }]}>
                {t('multiLangaugeModal.selectLanguage')}
            </Text>
            {langauges.map((item: { key: string; icons: JSX.Element; name: string }) => (
                <TouchableOpacity
                    key={item.key}
                    activeOpacity={0.8}
                    style={[styles.icon, { flexDirection: viewRtlStyle }]}
                    onPress={() => handleLanguageChange(item.key)}
                >
                    {item.icons}
                    <Text style={[styles.text1, { color: colors.text }]}>
                        {t(item.name)}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
    );
}

