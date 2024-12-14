import React from "react";
import { ScrollView, SafeAreaView } from "react-native";
import styles from "./styles";
import { Header } from "../../../commonComponents";
import { SearchFilter } from "../../../commonComponents";
import { CouponsView } from "./components/couponsView";
import { CommonModal, CouponModal, OfferFilterModal} from "../../../otherComponents/index";
import { useState } from "react";
import { useTheme } from "@react-navigation/native";
import { useValues } from "../../../utils/context";

export function Offers({navigation}) {
    const [showModal, setShowModal] = useState(false);
    const [filterModal, setFilterModal] = useState(false);
    const [off, setOff] = useState(null);
    const [subTxt, setSubTxt] = useState(null);
    const [code, setCode] = useState('');
    const {colors}=useTheme()
    const {t}=useValues()

    const visibleFilterModal = () => {
        setFilterModal(!filterModal)
    }

    const home=()=>{
        navigation.navigate('Home')
    }

    const visibleModal = (item) => {
        setOff(item.off)
        setSubTxt(item.onOrderAbove)
        setCode(item.code)
        setShowModal(!showModal)
    }

    return (
        <SafeAreaView style={[styles.mainView,{backgroundColor:colors.background}]}>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
                <Header isText  titleText={t('offerPage.myOffers')} onPress={() => navigation.goBack()} imageOnPress={home} />
                <SearchFilter onPress={visibleFilterModal} />
                <CouponsView visibleModal={visibleModal} />
            </ScrollView>
            <CommonModal
                modal={<CouponModal showModal={visibleModal} price={off} subTxt={subTxt} code={code} />}
                showModal={showModal}
                visibleModal={visibleModal} />
            <CommonModal
                modal={<OfferFilterModal showModal={visibleFilterModal} />}
                showModal={filterModal}
                visibleModal={visibleFilterModal} />
        </SafeAreaView>
    )
}