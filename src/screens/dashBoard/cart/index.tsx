import { Header, Coupon } from "../../../commonComponents";
import { WhishListProduct } from "../../whishList/components";
import { DeleteProductModal, CommonModal, CouponModal } from "../../../otherComponents";
import { useState } from "react";
import { ScrollView, SafeAreaView, View } from "react-native";
import styles from "./styles";
import { TotalView } from "./components";
import { useTheme } from "@react-navigation/native";
import { useValues } from "../../../utils/context";
import { windowHeight } from "../../../theme/appConstant";

interface CartProps {
    navigation: {
        navigate: (screen: string) => void;
        goBack: () => void;
    };
}

export function Cart ({ navigation }:CartProps)  {
    const { t } = useValues();
    const [showModal, setShowModal] = useState<boolean>(false);
    const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
    const { colors } = useTheme();
    const [cartItemsCount, setCartItemsCount] = useState<number>(0);

    const productDetails = (): void => {
        navigation.navigate('ProductsDetails');
    };

    const visibleModal = (): void => {
        setShowModal(!showModal);
    };

    const visibleDeleteModal = (): void => {
        setShowDeleteModal(!showDeleteModal);
    };

    const address = (): void => {
        navigation.navigate('Address');
    };

    const home = (): void => {
        navigation.navigate('Home');
    };

    const handleItemDelete = (newCount: number): void => {
        setCartItemsCount(newCount);
    };

    return (
        <SafeAreaView style={[styles.mainView, { backgroundColor: colors.background }]}>
            <Header
                onPress={() => navigation.goBack()}
                isText
                titleText={t('cartPage.myCart')}
                imageOnPress={home}
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                <WhishListProduct onItemDelete={handleItemDelete} onPress={productDetails} />
                <CommonModal modal={<DeleteProductModal onPress={visibleDeleteModal} />} showModal={showDeleteModal} visibleModal={visibleDeleteModal} />
                <View style={styles.view}>
                    <Coupon price={50} onPress={visibleModal} onOrder={t('myOffersArr.onOrder')} onOrderAbove={t('cartlist.orderabove')} code={'SCD450'} />
                    </View>
                    <View style={{bottom:windowHeight(10)}}>
                    <TotalView onPress={address} />
                    </View>
               
            </ScrollView>
            <CommonModal
                modal={<CouponModal showModal={visibleModal} price={50} subTxt={'250.00'} code={'SCD450'} />}
                showModal={showModal}
                visibleModal={visibleModal}
            />
        </SafeAreaView>
    );
}