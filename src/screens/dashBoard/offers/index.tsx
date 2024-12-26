import React, { FC, useState } from "react";
import { ScrollView, SafeAreaView } from "react-native";
import styles from "./styles";
import { Header } from "../../../commonComponents";
import { SearchFilter } from "../../../commonComponents";
import { CouponsView } from "./components/couponsView";
import { CommonModal, CouponModal, OfferFilterModal } from "../../../otherComponents/index";
import { useTheme } from "@react-navigation/native";
import { useValues } from "../../../utils/context";

interface OffersProps {
    navigation: {
        navigate: (screen: string) => void;
        goBack: () => void;
    };
}

export const Offers: FC<OffersProps> = ({ navigation }) => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [filterModal, setFilterModal] = useState<boolean>(false);
    const [off, setOff] = useState<number | null>(null);
    const [subTxt, setSubTxt] = useState<string | null>(null);
    const [code, setCode] = useState<string>('');
    const { colors } = useTheme();
    const { t } = useValues();

    const visibleFilterModal = (): void => {
        setFilterModal(!filterModal);
    };

    const home = (): void => {
        navigation.navigate('Home');
    };

    const visibleModal = (item: { off: number; onOrderAbove: string; code: string }): void => {
        setOff(item.off);
        setSubTxt(item.onOrderAbove);
        setCode(item.code);
        setShowModal(!showModal);
    };

    return (
        <SafeAreaView style={[styles.mainView, { backgroundColor: colors.background }]}>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
                <Header isText titleText={t('offerPage.myOffers')} onPress={() => navigation.goBack()} imageOnPress={home} />
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
    );
};