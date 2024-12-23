// import { SafeAreaView, Text, ScrollView } from 'react-native'
// import { HomeHeader, Input } from '../../../commonComponents'
// import { RecentlySearchView, TrendingCategoryView, TrendingProducts } from './components'
// import React from 'react'
// import styles from './styles'
// import { Icons } from '../../../utils/icons'
// import { useValues } from '../../../utils/context'
// import { useTheme } from '@react-navigation/native'


// export function Search({ navigation }) {
//   const { textRtlStyle, t } = useValues()
//   const { colors } = useTheme()

//   const productDetails = () => {
//     navigation.navigate('ProductsDetails')
//   }

//   const toogle = () => {
//     navigation.openDrawer();
// };

//   return (
//     <SafeAreaView style={[styles.mainView, { backgroundColor: colors.background }]}>
//       <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
//         <HomeHeader toogle={toogle} />
//         <Input placeholder={t('commonText.searchProducts')} rightIcon={<Icons.voiceSearch />} leftIcon={<Icons.search />} style={styles.input} />
//         <RecentlySearchView />
//         <TrendingCategoryView />
//         <Text style={[styles.txt, { color: colors.text }, { textAlign: textRtlStyle }]}>{t('searchPage.trendingProducts')}</Text>
//         <TrendingProducts onPress={productDetails} />
//       </ScrollView>
//     </SafeAreaView>
//   )
// }






import { SafeAreaView, Text, ScrollView } from 'react-native';
import { HomeHeader, Input } from '../../../commonComponents';
import { RecentlySearchView, TrendingCategoryView, TrendingProducts } from './components';
import React, { FC } from 'react';
import styles from './styles';
import { Icons } from '../../../utils/icons';
import { useValues } from '../../../utils/context';
import { useTheme } from '@react-navigation/native';

interface SearchProps {
  navigation: {
    navigate: (screen: string) => void;
    openDrawer: () => void;
  };
}

export const Search: FC<SearchProps> = ({ navigation }) => {
  const { textRtlStyle, t } = useValues();
  const { colors } = useTheme();

  const productDetails = (): void => {
    navigation.navigate('ProductsDetails');
  };

  const toogle = (): void => {
    navigation.openDrawer();
  };

  return (
    <SafeAreaView style={[styles.mainView, { backgroundColor: colors.background }]}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
        <HomeHeader toogle={toogle} />
        <Input placeholder={t('commonText.searchProducts')} rightIcon={<Icons.voiceSearch />} leftIcon={<Icons.search />} style={styles.input} />
        <RecentlySearchView />
        <TrendingCategoryView />
        <Text style={[styles.txt, { color: colors.text }, { textAlign: textRtlStyle }]}>{t('searchPage.trendingProducts')}</Text>
        <TrendingProducts onPress={productDetails} />
      </ScrollView>
    </SafeAreaView>
  );
};
