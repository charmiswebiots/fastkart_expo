import React from 'react'
import {
    Text,
    Image,
    View,
    NativeModules,
} from 'react-native'
import Styles from './styles';
import Data from '../../../../utils/json';
import Images from '../../../../utils/images/images';
import Loader from "./loader";

export default nameView = (props) => {

    const reviewStar = Data.reviewStar;

    const { UIManager } = NativeModules;

    UIManager.setLayoutAnimationEnabledExperimental &&
        UIManager.setLayoutAnimationEnabledExperimental(true);

    return (
        props.showLoader ? <Loader context={props.context} viewAlign={props.viewAlign} selfAlign={props.selfAlign} /> :
            <View>
                <Text style={[Styles.txt, { color: props.colors.text, textAlign: props.textAlign }]}>{props.t('productDetailsPage.productName')}</Text>
                <View style={[Styles.ratingsView, { flexDirection: props.viewAlign }]}>
                    <View style={{ flexDirection: props.viewAlign }}>
                        {reviewStar.map((item, key) =>
                            <Image source={key === 4 ? Images.star1 : Images.star} style={Styles.star} />
                        )}
                    </View>
                    <Text style={[Styles.ratings, { color: props.colors.text }]}>{props.t('productDetailsPage.productRatings')} </Text>
                </View>
                <View style={[Styles.view, { flexDirection: props.viewAlign }]}>
                    <Text style={[Styles.txt, { color: props.colors.text }]}>{props.context.currSymbol}{(props.context.currValue * 25).toFixed(2)}</Text>
                    <Text style={Styles.originalPrice}>{props.context.currSymbol}{(props.context.currValue * 45).toFixed(2)}</Text>
                    <Text style={Styles.discount}>{props.t('productDetailsPage.productDiscount')}</Text>
                </View>
            </View>
    )
}