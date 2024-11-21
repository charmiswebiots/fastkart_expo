import React, { useState } from 'react'
import {
    Text,
    Image,
    TouchableOpacity,
    View,
    NativeModules,
} from 'react-native'
import Styles from './styles';
import Data from '../../../../utils/json';
import Appcolor from '../../../../theme/colors';
import Images from '../../../../utils/images/images';
import Loader from "./loader";

export default reviewView = (props) => {

    const [reviewList] = useState(Data.reviewList);
    const reviewStar = Data.reviewStar;

    const { UIManager } = NativeModules;

    UIManager.setLayoutAnimationEnabledExperimental &&
        UIManager.setLayoutAnimationEnabledExperimental(true);

    return (
        props.showLoader ? <Loader context={props.context} selfAlign={props.selfAlign} viewAlign={props.viewAlign} /> :
            <View>
                <TouchableOpacity activeOpacity={0.8} style={[Styles.reviewView, { flexDirection: props.viewAlign }]} onPress={props.visibleReviewModal}>
                    <Text style={[Styles.txt, { color: props.colors.text }]}>{props.t('productDetailsPage.productReview')}</Text>
                    <Text style={Styles.seeAll}>{props.t('homepage.seeAll')}</Text>
                </TouchableOpacity>
                <View style={Styles.list}>
                    {reviewList.splice(0, 2).map((item) =>
                        <View style={[Styles.review, {
                            backgroundColor: props.context.isDark ? Appcolor.darkDrawer : Appcolor.gray,
                        }]}>
                            <View style={[Styles.reviewDetail, { flexDirection: props.viewAlign }]}>
                                <Image source={Images.demoProfile} style={Styles.demoProfile} />
                                <View style={Styles.reviewNameViewRight}>
                                    <Text style={[Styles.reviewName, { color: props.colors.text }]}>{props.t(item.reviewName)}</Text>
                                    <View style={{ flexDirection: props.viewAlign }}>
                                        {reviewStar.map((item, key) =>
                                            <Image source={key === 4 ? Images.star1 : Images.star} style={Styles.star} />
                                        )}
                                    </View>
                                </View>
                            </View>
                            <Text style={[Styles.reviewTxt, { textAlign: props.textAlign }]}>{props.t(item.review)}</Text>
                        </View>
                    )}
                </View>
            </View>
    )
}