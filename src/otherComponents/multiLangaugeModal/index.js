// import React from "react";
// import { View, Text, TouchableOpacity } from "react-native";
// import styles from "./styles";
// import { langauges } from "../../screens/data";
// import { GlobalStyle } from "../../styles/style";
// import { useTheme } from "@react-navigation/native";
// import { useValues } from "../../utils/context";

// export function MultiLangaugeModal() {
//     const {colors}=useTheme()
//     const {textRtlStyle,viewRtlStyle}=useValues()
//     return (
//         <View style={[GlobalStyle.modal, { backgroundColor: colors.background }]}>
//             <Text style={[styles.text, { color: colors.text, textAlign: textRtlStyle }]}>Select Language</Text>
//             {langauges.map((item) =>
//                 <TouchableOpacity activeOpacity={0.8}  style={[styles.icon, { flexDirection: viewRtlStyle }]}>
//                     {item.icons}
//                     <Text style={[styles.text1, { color: colors.text }]}>{item.name}</Text>
//                 </TouchableOpacity>
//             )}
//         </View>
//     )
// }



// import React from "react";
// import { View, Text, TouchableOpacity } from "react-native";
// import styles from "./styles";
// import { langauges } from "../../screens/data";
// import { GlobalStyle } from "../../styles/style";
// import { useTheme } from "@react-navigation/native";
// import { useValues } from "../../utils/context";
// import i18n from "i18next";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// export function MultiLangaugeModal() {
//     const { colors } = useTheme();
//     const { textRtlStyle, viewRtlStyle ,t} = useValues();



//     return (
//         <View style={[GlobalStyle.modal, { backgroundColor: colors.background }]}>
//             <Text style={[styles.text, { color: colors.text, textAlign: textRtlStyle }]}>
//             {t('multiLangaugeModal.selectLanguage')}
//                         </Text>
//             {langauges.map((item) => (
//                 <TouchableOpacity
//                     key={item.code} 
//                     activeOpacity={0.8}
//                     style={[styles.icon, { flexDirection: viewRtlStyle }]}
//                 >
//                     {item.icons}
//                     <Text style={[styles.text1, { color: colors.text }]}>{t(item.name)}</Text>
//                 </TouchableOpacity>
//             ))}
//         </View>
//     );
// }





// import React from "react";
// import { View, Text, TouchableOpacity } from "react-native";
// import styles from "./styles";
// import { langauges } from "../../screens/data";
// import { GlobalStyle } from "../../styles/style";
// import { useTheme } from "@react-navigation/native";
// import { useValues } from "../../utils/context";
// import i18n from "i18next";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// export function MultiLangaugeModal() {
//     const { colors } = useTheme();
//     const { textRtlStyle, viewRtlStyle, t } = useValues();

//     const handleLanguageChange = async (languageCode) => {
//         try {
//             await AsyncStorage.setItem("selectedLanguage", languageCode);
//             i18n.changeLanguage(languageCode); // Switch language dynamically
//         } catch (error) {
//             console.error("Error changing language:", error);
//         }
//     };

//     return (
//         <View style={[GlobalStyle.modal, { backgroundColor: colors.background }]}>
//             <Text style={[styles.text, { color: colors.text, textAlign: textRtlStyle }]}>
//                 {t("multiLangaugeModal.selectLanguage")}
//             </Text>
//             {langauges.map((item) => (
//                 <TouchableOpacity
//                     key={item.key}
//                     activeOpacity={0.8}
//                     style={[styles.icon, { flexDirection: viewRtlStyle }]}
//                     onPress={() => handleLanguageChange(item.key)} // Call on language selection
//                 >
//                     {item.icons}
//                     <Text style={[styles.text1, { color: colors.text }]}>{t(item.name)}</Text>
//                 </TouchableOpacity>
//             ))}
//         </View>
//     );
// }




// import React from "react";
// import { View, Text, TouchableOpacity } from "react-native";
// import styles from "./styles";
// import { langauges } from "../../screens/data";
// import { GlobalStyle } from "../../styles/style";
// import { useTheme } from "@react-navigation/native";
// import { useValues } from "../../utils/context";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import i18n from "i18next";

// export function MultiLangaugeModal() {
//     const { colors } = useTheme();
//     const { textRtlStyle, viewRtlStyle, setRtl, t } = useValues();

//     const handleLanguageChange = async (languageCode) => {
//         try {
//             await AsyncStorage.setItem("selectedLanguage", languageCode);
//             i18n.changeLanguage(languageCode);

//             // Set RTL dynamically based on the selected language
//             const isRtlLanguage = languageCode === "ar"; // Add more RTL languages if needed
//             setRtl(isRtlLanguage);
//             await AsyncStorage.setItem("isRtl", JSON.stringify(isRtlLanguage));
//         } catch (error) {
//             console.error("Error changing language:", error);
//         }
//     };

//     return (
//         <View style={[GlobalStyle.modal, { backgroundColor: colors.background }]}>
//             <Text style={[styles.text, { color: colors.text, textAlign: textRtlStyle }]}>
//                 {t("multiLangaugeModal.selectLanguage")}
//             </Text>
//             {langauges.map((item) => (
//                 <TouchableOpacity
//                     key={item.key}
//                     activeOpacity={0.8}
//                     style={[styles.icon, { flexDirection: viewRtlStyle }]}
//                     onPress={() => handleLanguageChange(item.key)}
//                 >
//                     {item.icons}
//                     <Text style={[styles.text1, { color: colors.text }]}>{t(item.name)}</Text>
//                 </TouchableOpacity>
//             ))}
//         </View>
//     );
// }




import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import { langauges } from "../../screens/data";
import { GlobalStyle } from "../../styles/style";
import { useTheme } from "@react-navigation/native";
import { useValues } from "../../utils/context";
import i18n from "i18next";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function MultiLangaugeModal() {
    const { colors } = useTheme();
    const { textRtlStyle, viewRtlStyle, t, setRtl } = useValues();

    const handleLanguageChange = async (language) => {
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
            {langauges.map((item) => (
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
