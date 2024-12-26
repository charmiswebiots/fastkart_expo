import React, { FC } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { GlobalStyle } from "../../styles/style";
import styles from "./styles";
import { windowWidth } from "../../theme/appConstant";
import { currencys } from "../../screens/data";
import { useTheme } from "@react-navigation/native";
import { useValues } from "../../utils/context";

interface Currency {
  key: string;
  value: string;
  icons: JSX.Element;
  name: string;
}

interface CurrencyConverterModalProps {
  onPress: () => void;
}

export const CurrencyConverterModal: FC<CurrencyConverterModalProps> = ({ onPress }) => {
  const { textRtlStyle, viewRtlStyle, t, setCurrSymbol, setCurrValue } = useValues();
  const { colors } = useTheme();

  const handleCurrencyChange = (currency: Currency): void => {
    setCurrSymbol(currency.key);
    setCurrValue(currency.value);
    onPress();
  };

  return (
    <View style={[GlobalStyle.modal, { backgroundColor: colors.background }]}>
      <Text style={[styles.text, { color: colors.text, textAlign: textRtlStyle }]}>
        {t('multicurrencyModal.selectCurrency')}
      </Text>
      {currencys.map((item: Currency) => (
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
};