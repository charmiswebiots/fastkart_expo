import { SafeAreaView,ScrollView } from "react-native";
import styles from "./styles";
import appColors from "../../../theme/appColors";
import { Header } from "../../../commonComponents";

export function Cart(){
    return(
        <SafeAreaView style={{ backgroundColor: appColors.white }}>
        <Header
            onPress={() => navigation.goBack()}
            isText
            titleText={'My Cart'} />
        {/* <ScrollView showsVerticalScrollIndicator={false}>
            <ProductView viewAlign={viewAlign} imageAlign={imageAlign} selfAlign={selfAlign} colors={colors} showLoader={showLoader} context={commonContext} visibleDeleteModal={visibleDeleteModal} navigation={navigation} />
            <Coupon price={50} onPress={visibleModal} title={'myOffersArr.onOrder'} subTxt={'250.00'} code={'SCD450'} />
            <TotalView t={t} showLoader={showLoader} navigation={navigation} />
        </ScrollView>
        <CommonModal
            modal={<CouponModal showModal={visibleModal} price={50} subTxt={'250.00'} code={'SCD450'} />}
            showModal={showModal}
            visibleModal={visibleModal} />
        <CommonModal
            modal={<DeleteProductModal onPress={visibleDeleteModal} />}
            showModal={showDeleteModal}
            visibleModal={visibleDeleteModal} /> */}
    </SafeAreaView>
    )
}