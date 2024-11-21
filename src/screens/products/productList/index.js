import React, { useState, useContext, useEffect } from 'react'
import { SafeAreaView, ScrollView, } from 'react-native'
import Styles from './styles';
import { Header, SearchNFilter } from "../../../commonComponents";
import { useTheme } from "@react-navigation/native";
import Images from '../../../utils/images/images';
import { ProductFilter, CommonModal } from "../../../otherComponents";
import { useTranslation } from 'react-i18next';
import { CommonContext } from '../../../../App';
import CategoryView from "./categoryView";
import ProductView from "./productsView";
import PriceView from "./priceView";

export function ProductsList({ navigation }) {

    const [showModal, setShowModal] = useState(false);
    const { colors } = useTheme();
    const { t } = useTranslation();
    const commonContext = useContext(CommonContext);
    const [showLoader, setShowLoader] = useState(true);
    const viewAlign = commonContext.isRTL ? 'row-reverse' : 'row'
    const imageAlign = commonContext.isRTL ? -1 : 1
    const selfAlign = commonContext.isRTL ? 'flex-end' : 'flex-start'
    const textAlign = commonContext.isRTL ? 'right' : 'left'

    useEffect(() => {
        setTimeout(() => {
            setShowLoader(false);
        }, 2000);
    }, [])

    const modalVisible = () => {
        setShowModal(!showModal)
    }

    return (
        <SafeAreaView style={{ backgroundColor: colors.background }}>
            <Header
                onPress={() => navigation.replace('Drawer')}
                darkImage={Images.darkSmallLogo}
                lightImage={Images.smallLogo}
                lightStyle={Styles.header}
                darkStyle={Styles.header}
                showImage
                text={t('categoryArr.freshFruitsVegetables')}
                image={Images.offer} />
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={Styles.containerStyle}>
                <CategoryView context={commonContext} t={t} colors={colors} showLoader={showLoader} viewAlign={viewAlign} />
                <SearchNFilter onPress={modalVisible} />
                <ProductView context={commonContext} showLoader={showLoader} navigation={navigation} viewAlign={viewAlign} selfAlign={selfAlign} imageAlign={imageAlign} />
            </ScrollView>
            <CommonModal
                modal={<ProductFilter showModal={modalVisible} viewAlign={viewAlign} textAlign={textAlign} />}
                showModal={showModal}
                visibleModal={modalVisible} />
            <PriceView showLoader={showLoader} textAlign={textAlign} imageAlign={imageAlign} t={t} context={commonContext} navigation={navigation} viewAlign={viewAlign} />
        </SafeAreaView>
    )
}