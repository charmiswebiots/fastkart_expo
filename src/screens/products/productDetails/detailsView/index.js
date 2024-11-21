import React, { useState } from 'react'
import {
    Text,
    TouchableOpacity,
    View,
    LayoutAnimation,
    NativeModules,
} from 'react-native'
import Styles from './styles';
import SideArrow from "../../../../assets/icons/sideArrow";
import Loader from "./loader";

export default detailsView = (props) => {

    const [showManufacturer, setShowManufacturer] = useState(true);
    const [showProductDesc, setShowProductDesc] = useState(false);
    const [showFeature, setShowFeature] = useState(false);

    const { UIManager } = NativeModules;

    UIManager.setLayoutAnimationEnabledExperimental &&
        UIManager.setLayoutAnimationEnabledExperimental(true);

    const showValue = (manufacturer, product, feature) => {
        LayoutAnimation.easeInEaseOut();
        setShowManufacturer(manufacturer);
        setShowProductDesc(product);
        setShowFeature(feature);
    }

    return (
        props.showLoader ? <Loader context={props.context} viewAlign={props.viewAlign} selfAlign={props.selfAlign} /> :
            <View>
                <Text style={[Styles.detail, { color: props.colors.text, textAlign: props.textAlign }]}>{props.t('productDetailsPage.detailTitle')}</Text>
                <Text style={[Styles.title, { textAlign: props.textAlign }]}>{props.t('productDetailsPage.detailDesc')}</Text>
                <View style={Styles.manufacturer}>
                    <TouchableOpacity onPress={() => showValue(!showManufacturer, false, false)} activeOpacity={0.7} style={[Styles.optionView, { flexDirection: props.viewAlign }]}>
                        <Text style={[Styles.txt, { color: props.colors.text }]}>{props.t('productDetailsPage.manufacturerDetails')}</Text>
                        <View style={{ transform: [{ scaleX: props.imageAlign }] }}>
                            <SideArrow />
                        </View>
                    </TouchableOpacity>
                    {showManufacturer &&
                        <Text style={[Styles.title, { textAlign: props.textAlign }]}>{props.t('productDetailsPage.manufacturerDetailsDesc')}</Text>}
                </View>
                <View style={Styles.product}>
                    <TouchableOpacity onPress={() => showValue(false, !showProductDesc, false)} activeOpacity={0.7} style={[Styles.optionView, { flexDirection: props.viewAlign }]}>
                        <Text style={[Styles.txt, { color: props.colors.text }]}>{props.t('productDetailsPage.productDisclaimer')}</Text>
                        <View style={{ transform: [{ scaleX: props.imageAlign }] }}>
                            <SideArrow />
                        </View>
                    </TouchableOpacity>
                    {showProductDesc &&
                        <Text style={[Styles.title, { textAlign: props.textAlign }]}>{props.t('productDetailsPage.productDisclaimerDesc')}</Text>}
                </View>
                <View style={Styles.product}>
                    <TouchableOpacity onPress={() => showValue(false, false, !showFeature)} activeOpacity={0.7} style={[Styles.optionView, { flexDirection: props.viewAlign }]}>
                        <Text style={[Styles.txt, { color: props.colors.text }]}>{props.t('productDetailsPage.featureDetails')}</Text>
                        <View style={{ transform: [{ scaleX: props.imageAlign }] }}>
                            <SideArrow />
                        </View>
                    </TouchableOpacity>
                    {showFeature &&
                        <Text style={[Styles.title, { textAlign: props.textAlign }]}>{props.t('productDetailsPage.featureDetailsDesc')}</Text>}
                </View>
            </View>
    )
}