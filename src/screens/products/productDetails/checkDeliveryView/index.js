import React from 'react'
import {
    Text,
    View,
} from 'react-native'
import Styles from './styles';
import { Input } from "../../../../commonComponents";
import { windowHeight } from '../../../../theme/appConstant';
import DeliveryTruck from "../../../../assets/icons/deliveryTruck";
import Payment from "../../../../assets/icons/payment";
import Refund from "../../../../assets/icons/refund";

export default checkDeliveryView = (props) => {
    return (
        !props.showLoader &&
        <View>
            <Text style={[Styles.checkDelivery, { color: props.colors.text, textAlign: props.textAlign }]}>{props.t('productDetailsPage.checkDelivery')}</Text>
            <Text style={[Styles.content, { marginTop: windowHeight(6), textAlign: props.textAlign }]}>{props.t('productDetailsPage.enterPincode')}</Text>
            <Input placeholder='Pin code' isText text='Check' />
            <View style={[Styles.deliveryView, { flexDirection: props.viewAlign }]}>
                <DeliveryTruck />
                <Text style={[Styles.content, props.context.isRTL ? Styles.reviewNameViewRight : Styles.reviewNameView]}>{props.t('productDetailsPage.freeDelivery')}</Text>
            </View>
            <View style={[Styles.deliveryView, { flexDirection: props.viewAlign }]}>
                <Payment />
                <Text style={[Styles.content, props.context.isRTL ? Styles.reviewNameViewRight : Styles.reviewNameView]}>{props.t('productDetailsPage.cod')}</Text>
            </View>
            <View style={[Styles.deliveryView, { flexDirection: props.viewAlign }]}>
                <Refund />
                <Text style={[Styles.content, props.context.isRTL ? Styles.reviewNameViewRight : Styles.reviewNameView]}>{props.t('productDetailsPage.easyReturn')}</Text>
            </View>
        </View>
    )
}