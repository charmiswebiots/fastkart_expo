import React, { useState, useContext, useEffect } from 'react'
import {
    SafeAreaView,
    Image,
    ScrollView,
    View,
    NativeModules,
    Share
} from 'react-native'
import Styles from './styles';
import { Header } from "../../../commonComponents";
import { useTheme } from "@react-navigation/native";
import ShareImg from "../../../assets/icons/share";
import { CommonContext } from '../../../../App';
import { CommonModal, DeliveryTimeModal, QuanitityModal, ReviewModal } from "../../../otherComponents";
import { ImageLoader } from "./loader";
import NameView from "./nameView";
import OptionView from "./optionsView";
import DetailsView from "./detailsView";
import ReviewView from "./reviewView";
import CheckDeliveryView from "./checkDeliveryView";
import CounterView from "./counterView";
import appColors from '../../../theme/appColors';
import images from '../../../utils/images';
import { LowestPrice } from '../../dashBoard/home/components';

export function ProductsDetails({ navigation }) {

    const { colors } = useTheme();
    const [quantityModal, setQuantityModal] = useState(false);
    const [deliveryModal, setDeliveryModal] = useState(false);
    const [reviewModal, setReviewModal] = useState(false);
    const [showLoader, setShowLoader] = useState(true);
    const { t } = useTranslation();
    const commonContext = useContext(CommonContext);
    const textAlign = commonContext.isRTL ? 'right' : 'left'
    const viewAlign = commonContext.isRTL ? 'row-reverse' : 'row'
    const selfAlign = commonContext.isRTL ? 'flex-end' : 'flex-start'
    const imageAlign = commonContext.isRTL ? -1 : 1

    const { UIManager } = NativeModules;

    UIManager.setLayoutAnimationEnabledExperimental &&
        UIManager.setLayoutAnimationEnabledExperimental(true);

    useEffect(() => {
        setTimeout(() => {
            setShowLoader(false)
        }, 2000);
    }, [])

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
        <SafeAreaView style={{ backgroundColor: commonContext.isDark ? Appcolor.darkDrawer : Appcolor.gray }}>
            <Header
                onPress={() => navigation.goBack()}
                image={<ShareImg />}
                imageOnPress={openShare} />
            <ScrollView style={Styles.scrollView} showsVerticalScrollIndicator={false}>
                {showLoader ? <ImageLoader context={commonContext} /> :
                    <Image style={Styles.productImg} source={images.product1} />}
                <View style={[Styles.subView, { backgroundColor: appColors.background }]}>
                    <NameView showLoader={showLoader} t={t} selfAlign={selfAlign} context={commonContext} colors={colors} viewAlign={viewAlign} textAlign={textAlign} />
                    <OptionView showLoader={showLoader} t={t} context={commonContext} colors={colors} viewAlign={viewAlign} visibleDeliveryModal={visibleDeliveryModal} visibleQuantityModal={visibleQuantityModal} />
                    <DetailsView imageAlign={imageAlign} selfAlign={selfAlign} showLoader={showLoader} t={t} context={commonContext} colors={colors} viewAlign={viewAlign} textAlign={textAlign} />
                    <ReviewView selfAlign={selfAlign} viewAlign={viewAlign} textAlign={textAlign} showLoader={showLoader} t={t} context={commonContext} colors={colors} visibleReviewModal={visibleReviewModal} />
                    <CheckDeliveryView showLoader={showLoader} t={t} context={commonContext} textAlign={textAlign} colors={colors} viewAlign={viewAlign} />
                </View>
                <LowestPrice navigation={navigation} textAlign={textAlign} showLoader={showLoader}
                    viewAlign={viewAlign} title={t('homepage.lowestPrice')} colors={colors} subtitle={t('homepage.payless')} t={t} context={commonContext} />
                <View style={[Styles.line, { backgroundColor: colors.background }]} />
            </ScrollView>
            <CounterView showLoader={showLoader} t={t} navigation={navigation} textAlign={textAlign}
                viewAlign={viewAlign} imageAlign={imageAlign} context={commonContext} />
            <CommonModal modal={<QuanitityModal onPress={visibleQuantityModal} textAlign={textAlign} viewAlign={viewAlign} />} showModal={quantityModal} visibleModal={visibleQuantityModal} />
            <CommonModal modal={<DeliveryTimeModal onPress={visibleDeliveryModal} viewAlign={viewAlign} textAlign={textAlign} />} showModal={deliveryModal} visibleModal={visibleDeliveryModal} />
            <CommonModal modal={<ReviewModal onPress={visibleReviewModal} viewAlign={viewAlign} textAlign={textAlign} />} showModal={reviewModal} visibleModal={visibleReviewModal} />
        </SafeAreaView>
    )
}