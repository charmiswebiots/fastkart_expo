import React, { useState } from 'react';
import {
    SafeAreaView,
    Image,
    ScrollView,
    View,
    Share
} from 'react-native';
import styles from './styles';
import { Header } from "../../../commonComponents";
import { CommonModal, QuantityModal
    , DeliveryTimeModal, ReviewModal } from '../../../otherComponents';
import { Icons } from '../../../utils/icons';
import images from '../../../utils/images';
import { DetailsView, NameView, ReviewView, CheckDeliveryView, CounterView } from './components';
import { OptionsView } from './components';
import { LowestPrice } from '../../dashBoard/home/components';
import appColors from '../../../theme/appColors';
import { windowHeight } from '../../../theme/appConstant';
import { useTheme } from '@react-navigation/native';
import { useValues } from '../../../utils/context';

interface ProductsDetailsProps {
    navigation: {
        goBack: () => void;
    };
}

export function ProductsDetails({ navigation }: ProductsDetailsProps): JSX.Element {
    const { isDark, t } = useValues();
    const { colors } = useTheme();
    const [quantityModal, setQuantityModal] = useState<boolean>(false);
    const [deliveryModal, setDeliveryModal] = useState<boolean>(false);
    const [reviewModal, setReviewModal] = useState<boolean>(false);

    const visibleDeliveryModal = (): void => {
        setDeliveryModal(!deliveryModal);
    };

    const visibleQuantityModal = (): void => {
        setQuantityModal(!quantityModal);
    };

    const visibleReviewModal = (): void => {
        setReviewModal(!reviewModal);
    };

    const openShare = async (): Promise<void> => {
        try {
            const result = await Share.share({
                message:
                    'React Native | A framework for building native apps using React',
            });
        } catch (error) {
            alert(error.message);
        }
    };

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
                <View style={{ backgroundColor: isDark ? colors.primary : appColors.gray, paddingVertical: windowHeight(13) }}>
                    <LowestPrice headerData={{ title: t('productDetailsPage.recentlyView'), subtitle: t('homepage.payless') }} style={[styles.color, { backgroundColor: isDark ? colors.primary : appColors.white }]} />
                </View>
                <View style={[styles.line, { backgroundColor: colors.background }]} />
               
            </ScrollView>
            <CounterView />
            <CommonModal modal={<QuantityModal onPress={visibleQuantityModal} />} showModal={quantityModal} visibleModal={visibleQuantityModal} />
            <CommonModal modal={<DeliveryTimeModal onPress={visibleDeliveryModal} />} showModal={deliveryModal} visibleModal={visibleDeliveryModal} />
            <CommonModal modal={<ReviewModal onPress={visibleReviewModal} />} showModal={reviewModal} visibleModal={visibleReviewModal} />
        </SafeAreaView>
    );
}