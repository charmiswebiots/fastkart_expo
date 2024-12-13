import React, { useState } from 'react'
import {
    SafeAreaView,
    Image,
    ScrollView,
    View,
    Share
} from 'react-native'
import styles from './styles';
import { Header } from "../../../commonComponents";
import { CommonModal, QuanitityModal, DeliveryTimeModal, ReviewModal } from '../../../otherComponents'
import { Icons } from '../../../utils/icons';
import images from '../../../utils/images';
import { DetailsView, NameView, OptionsView, ReviewView, CheckDeliveryView, CounterView } from './components'
import { LowestPrice } from '../../dashBoard/home/components';
import appColors from '../../../theme/appColors';
import { windowHeight } from '../../../theme/appConstant';
import { useTheme } from '@react-navigation/native';
import { useValues } from '../../../utils/context';

export function ProductsDetails({ navigation }) {
    const { isDark, t } = useValues()
    const { colors } = useTheme()
    const [quantityModal, setQuantityModal] = useState(false);
    const [deliveryModal, setDeliveryModal] = useState(false);
    const [reviewModal, setReviewModal] = useState(false);

    const visibleDeliveryModal = () => {
        setDeliveryModal(!deliveryModal)
    }

    const visibleQuantityModal = () => {
        setQuantityModal(!quantityModal)
    }
    const visibleReviewModal = () => {
        setReviewModal(!reviewModal)
    }
    const openShare = async () => {
        try {
            const result = await Share.share({
                message:
                    'React Native | A framework for building native apps using React',
            });
        } catch (error) {
            alert(error.message);
        }
    }
    return (
        <SafeAreaView style={{ backgroundColor: colors.background }}>
            <Header onPress={() => navigation.goBack()} image={<Icons.share />} imageOnPress={openShare} />
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                <Image style={styles.productImg} source={images.product1} />
                <View style={[styles.subView, { backgroundColor: appColors.background }]}>
                    <NameView />
                    <OptionsView visibleDeliveryModal={visibleDeliveryModal} visibleQuantityModal={visibleQuantityModal} />
                    <DetailsView />
                    <ReviewView visibleReviewModal={visibleReviewModal} />
                    <CheckDeliveryView />
                </View>
                <View style={{ backgroundColor: isDark ? colors.primary : appColors.lowestPrice, paddingVertical: windowHeight(13) }}>
                    <LowestPrice headerData={{ title: t('productDetailsPage.recentlyView'), subtitle: t('homepage.payless') }} style={[styles.color, { backgroundColor: isDark ? colors.primary : appColors.white }]} />
                </View>
                <View style={[styles.line, { backgroundColor: colors.background }]} />
                <CounterView />
            </ScrollView>
            <CommonModal modal={<QuanitityModal onPress={visibleQuantityModal} />} showModal={quantityModal} visibleModal={visibleQuantityModal} />
            <CommonModal modal={<DeliveryTimeModal onPress={visibleDeliveryModal} />} showModal={deliveryModal} visibleModal={visibleDeliveryModal} />
            <CommonModal modal={<ReviewModal onPress={visibleReviewModal} />} showModal={reviewModal} visibleModal={visibleReviewModal} />
        </SafeAreaView>
    )

}