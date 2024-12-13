import React from "react";
import { View,Text,TouchableOpacity } from "react-native";
import { GlobalStyle } from "../../styles/style";
import styles from "./styles";
import { windowWidth } from "../../theme/appConstant";
import { currencys } from "../../screens/data";
import { useTheme } from "@react-navigation/native";
import { useValues } from "../../utils/context";


// export function CurrencyConverterModal() {
//     const {textRtlStyle,viewRtlStyle,t}=useValues()
//     const {colors}=useTheme()
    
//     return (
//         <View style={[GlobalStyle.modal, { backgroundColor: colors.background }]}>
//             <Text style={[styles.text, { color: colors.text, textAlign: textRtlStyle }]}>{t('multicurrencyModal.selectCurrency')}</Text>
//             {currencys.map((item) =>
//                 <TouchableOpacity activeOpacity={0.8}  style={[styles.icon, { flexDirection: viewRtlStyle }]}>
//                     {item.icons}
//                     <Text style={[styles.text, { color: colors.text, marginHorizontal: windowWidth(12) }]}>{t(item.name)}  </Text>
//                 </TouchableOpacity>
//             )}
//         </View>
//     )
// }


export function CurrencyConverterModal({ onClose }) {
    const { textRtlStyle, viewRtlStyle, t, setCurrSymbol, setCurrValue } = useValues();
    const { colors } = useTheme();
  
    const handleCurrencyChange = (currency) => {
      setCurrSymbol(currency.key);
      setCurrValue(currency.value);
    //   onClose(); // Close the modal
    };
  
    return (
      <View style={[GlobalStyle.modal, { backgroundColor: colors.background }]}>
        <Text style={[styles.text, { color: colors.text, textAlign: textRtlStyle }]}>
          {t('multicurrencyModal.selectCurrency')}
        </Text>
        {currencys.map((item) => (
          <TouchableOpacity
            key={item.key}
            activeOpacity={0.8}
            style={[styles.icon, { flexDirection: viewRtlStyle }]}
            onPress={() => handleCurrencyChange(item)}
          >
            {item.icons}
            <Text style={[styles.text, { color: colors.text, marginHorizontal: windowWidth(12) }]}>
              {t(item.name)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }