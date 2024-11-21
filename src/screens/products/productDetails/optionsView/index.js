import React from 'react'
import {
    Text,
    TouchableOpacity,
    View,
} from 'react-native'
import Styles from './styles';
import Appcolor from '../../../../theme/colors';
import DropDown from '../../../../assets/icons/dropDown';
import Loader from "./loader";

export default optionView = (props) => {
    return (
        props.showLoader ? <Loader context={props.context} viewAlign={props.viewAlign} /> :
            <View style={[Styles.optionMainView, { flexDirection: props.viewAlign }]}>
                <TouchableOpacity activeOpacity={0.8} onPress={props.visibleQuantityModal} style={[Styles.option, { flexDirection: props.viewAlign }, { backgroundColor: props.context.isDark ? Appcolor.darkDrawer : Appcolor.gray }]}>
                    <Text style={[Styles.optionTxt, { color: props.colors.text }]}>500 g/$24.00</Text>
                    <DropDown />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} onPress={props.visibleDeliveryModal} style={[Styles.option, { flexDirection: props.viewAlign }, { backgroundColor: props.context.isDark ? Appcolor.darkDrawer : Appcolor.gray }]}>
                    <Text style={[Styles.optionTxt, { color: props.colors.text }]}>{props.t('productDetailsPage.deliveryTime')}</Text>
                    <DropDown />
                </TouchableOpacity>
            </View>
    )
}