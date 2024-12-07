import { SafeAreaView, Text, ScrollView } from 'react-native'
import { HomeHeader,Input } from '../../../commonComponents'
import { RecentlySearchView,TrendingCategoryView,TrendingProducts } from './components'
import React from 'react'
import styles from './styles'
import { Icons } from '../../../utils/icons'
import { useValues } from '../../../utils/context'
import { useTheme } from '@react-navigation/native'


export function Search({navigation}) {
  const {textRtlStyle}=useValues()
  const {colors}=useTheme()

  const productDetails=()=>{
    navigation.navigate('ProductsDetails')
  }

  return (
    <SafeAreaView style={[styles.mainView,{backgroundColor:colors.background}]}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
        <HomeHeader />
         <Input placeholder={'Search Products here..'} rightIcon={<Icons.voiceSearch />} leftIcon={<Icons.search />} style={styles.input}/>
         <RecentlySearchView/>
         <TrendingCategoryView/>
         <Text style={[styles.txt,{color:colors.text},{textAlign:textRtlStyle}]}>Trending Products</Text>
         <TrendingProducts onPress={productDetails}/>
      </ScrollView>
    </SafeAreaView>
  )
}

