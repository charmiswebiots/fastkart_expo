import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import Styles from './styles';
import Appcolor from "../../../../theme/colors";
import SideArrow from '../../../../assets/icons/sideArrow';

export default priceView = (props) => {

    const gotoCart = () => {
        props.navigation.navigate('CartList')
    }

    return (
        !props.showLoader &&
        <View style={[Styles.price, { flexDirection: props.viewAlign }]}>
            <View>
                <Text style={Styles.listItem}>{props.t('productList.listItems')}</Text>
                <Text style={[Styles.listItem, { textAlign: props.textAlign }]}>{props.context.currSymbol}{(props.context.currValue * 250)}</Text>
            </View>
            <TouchableOpacity activeOpacity={0.7} onPress={gotoCart} style={{ flexDirection: props.viewAlign }}>
                <Text style={Styles.viewCart}>{props.t('productList.viewCart')}</Text>
                <View style={{ transform: [{ scaleX: props.imageAlign }] }}>
                    <SideArrow color={Appcolor.white} />
                </View>
            </TouchableOpacity>
        </View>
    )
}