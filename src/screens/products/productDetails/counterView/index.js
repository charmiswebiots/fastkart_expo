import React from 'react'
import {
    Text,
    TouchableOpacity,
    View,
} from 'react-native'
import Styles from './styles';
import { Counter } from "../../../../commonComponents";
import { windowHeight, windowWidth } from '../../../../theme/appConstant';
import SideArrow from "../../../../assets/icons/sideArrow";
import appColors from '../../../../theme/appColors';

export default counterView = (props) => {

    const goToCart = () => {
        props.navigation.navigate('CartList');
    }

    return (
        !props.showLoader &&
        <View style={[Styles.counterView, { flexDirection: props.viewAlign }]}>
            <Counter context={props.context} viewAlign={props.viewAlign} bgColor={appColors.white} height={windowHeight(38)} width={windowWidth(120)} color={appColors.primary} textColor={appColors.primary} />
            <TouchableOpacity activeOpacity={0.7} onPress={goToCart} style={{ flexDirection: props.viewAlign }}>
                <Text style={Styles.addToCart}>{props.t('productDetailsPage.addToCart')}</Text>
                <View style={{ transform: [{ scaleX: props.imageAlign }] }}>
                    <SideArrow color={appColors.white} />
                </View>
            </TouchableOpacity>
        </View>
    )
}