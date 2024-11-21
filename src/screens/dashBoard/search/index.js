import { SafeAreaView, Text, ScrollView } from 'react-native'
import { HomeHeader,Input } from '../../../commonComponents'
import { RecentlySearchView,TrendingCategoryView,TrendingProducts } from './components'
import React from 'react'
import styles from './styles'
import { Icons } from '../../../utils/icons'
import { Offers } from '../home/components'


export function Search() {
  return (
    <SafeAreaView style={styles.mainView}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
        <HomeHeader />
         <Input placeholder={'Search Products here..'} rightIcon={<Icons.voiceSearch />} leftIcon={<Icons.search />} style={styles.input}/>
         <RecentlySearchView/>
         <TrendingCategoryView/>
         <Text style={[styles.txt]}>Trending Products</Text>
         <TrendingProducts/>

 
      </ScrollView>
    </SafeAreaView>
  )
}

