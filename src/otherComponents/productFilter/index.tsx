





import React, { FC, useState } from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { GlobalStyle } from '../../styles/style';
import appColors from '../../theme/appColors';
import { OptionButton } from '../../commonComponents';
import { packSize } from '../../screens/data';
import { RangeSlider, Picker } from './components';
import { useValues } from '../../utils/context';
import { useTheme } from '@react-navigation/native';

interface ProductFilterProps {
  showModal: () => void;
}

export const ProductFilter: FC<ProductFilterProps> = (props) => {
  const { viewRtlStyle, textRtlStyle, t } = useValues();
  const { colors } = useTheme();

  const [select, setSelect] = useState<number | undefined>(undefined);
  const [low, setLow] = useState<number | undefined>(undefined);
  const [high, setHigh] = useState<number | undefined>(undefined);

  const getValue = (low: number, high: number): void => {
    setLow(low);
    setHigh(high);
  };

  return (
    <View style={[GlobalStyle.modal, { backgroundColor: colors.background }]}>
      <View style={[styles.category, { flexDirection: viewRtlStyle }]}>
        <Text style={[styles.categoryTxt, { color: colors.text }]}>{t('tabBar.category')}</Text>
        <Text style={styles.reset}>{t('productFilter.reset')}</Text>
      </View>
      <Text style={[styles.packSize, { color: colors.text }, { textAlign: textRtlStyle }]}>{t('productFilter.packSize')}</Text>
      <FlatList
        columnWrapperStyle={[styles.list, { flexDirection: viewRtlStyle }]}
        contentContainerStyle={[styles.list]}
        data={packSize}
        ItemSeparatorComponent={() => <View style={styles.seprator} />}
        numColumns={2}
        renderItem={({ item, index }: { item: { size: string }; index: number }) => (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setSelect(index)}
            style={[styles.sizeView, { backgroundColor: select === index ? appColors.primary : appColors.defaultBackground }]}>
            <Text
              style={[
                styles.size,
                {
                  color: select === index ? appColors.white : appColors.content,
                },
              ]}>
              {t(item.size)}
            </Text>
          </TouchableOpacity>
        )}
      />
      <Text style={[styles.priceRange, { color: colors.text }, { textAlign: textRtlStyle }]}>{t('productFilter.priceRange')}</Text>
      <RangeSlider />
      <Picker />
      <OptionButton txt1={t('commonText.close')} txt2={t('productFilter.apply')} onPress1={props.showModal} onPress2={props.showModal} />
    
    </View>
  );
};