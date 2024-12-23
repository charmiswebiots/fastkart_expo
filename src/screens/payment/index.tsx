// import { SafeAreaView, ScrollView, View } from "react-native";
// import styles from "./styles";
// import { GlobalStyle } from "../../styles/style";
// import appColors from "../../theme/appColors";
// import { useState } from "react";
// import { Header, AddNew, Total, Button } from "../../commonComponents";
// import { AddNewCardModal, CommonModal } from "../../otherComponents";
// import { SelectValueView } from "./components";
// import { windowHeight } from "../../theme/appConstant";
// import { useTheme } from "@react-navigation/native";
// import { useValues } from "../../utils/context";

// export function Payment({ navigation }) {
//     const { isDark,t } = useValues()
//     const { colors } = useTheme()
//     const [showModal, setShowModal] = useState(false);
    

//     const visibleModal = () => {
//         setShowModal(!showModal)
//     }

//     const orderDetails = () => {
//         navigation.navigate('OrderSuccess')
//     }

//     const home = () => {
//         navigation.navigate('Home')
//     }

//     return (
//         <SafeAreaView style={[GlobalStyle.mainView, { backgroundColor: colors.background }]}>
//             <CommonModal
//                 modal={<AddNewCardModal showModal={visibleModal} showModal1={visibleModal} />}
//                 showModal={showModal}
//                 visibleModal={() => setShowModal(false)} />
//             <ScrollView showsVerticalScrollIndicator={false}>
//                 <Header
//                     onPress={() => navigation.goBack()}
//                     isText
//                     imageOnPress={home}
//                     titleText={t('addPaymentPage.addPaymentMethod')}/>
//                 <AddNew onPress={visibleModal} text={t('addPaymentPage.addNewCard')}/>
//                 <SelectValueView />
//                 <View style={styles.totalView}>
//                     <Total bottom={windowHeight(80)} title={t('cartPage.orderDetails')} style1={{ backgroundColor: isDark ? colors.primary : appColors.gray }} style={{color:isDark?appColors.white:appColors.black}} />
//                 </View>
//                 <Button  text={t('addPaymentPage.confirmPayment')} style={styles.btn}
//                     color={appColors.white} onPress={orderDetails} />
//             </ScrollView>

//         </SafeAreaView>
//     )
// }










import { SafeAreaView, ScrollView, View } from "react-native";
import styles from "./styles";
import { GlobalStyle } from "../../styles/style";
import appColors from "../../theme/appColors";
import { useState } from "react";
import { Header, AddNew, Total, Button } from "../../commonComponents";
import { AddNewCardModal, CommonModal } from "../../otherComponents";
import { SelectValueView } from "./components";
import { windowHeight } from "../../theme/appConstant";
import { useTheme } from "@react-navigation/native";
import { useValues } from "../../utils/context";

interface PaymentProps {
    navigation: {
        navigate: (screen: string) => void;
        goBack: () => void;
    };
}

export function Payment({ navigation }: PaymentProps): JSX.Element {
    const { isDark, t } = useValues();
    const { colors } = useTheme();
    const [showModal, setShowModal] = useState<boolean>(false);

    const visibleModal = (): void => {
        setShowModal(!showModal);
    };

    const orderDetails = (): void => {
        navigation.navigate('OrderSuccess');
    };

    const home = (): void => {
        navigation.navigate('Home');
    };

    return (
        <SafeAreaView style={[GlobalStyle.mainView, { backgroundColor: colors.background }]}>
            <CommonModal
                modal={<AddNewCardModal showModal={visibleModal} showModal1={visibleModal} />}
                showModal={showModal}
                visibleModal={() => setShowModal(false)} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <Header
                    onPress={() => navigation.goBack()}
                    isText
                    imageOnPress={home}
                    titleText={t('addPaymentPage.addPaymentMethod')} />
                <AddNew onPress={visibleModal} text={t('addPaymentPage.addNewCard')} />
                <SelectValueView />
                <View style={styles.totalView}>
                    <Total bottom={windowHeight(80)} title={t('cartPage.orderDetails')} style1={{ backgroundColor: isDark ? colors.primary : appColors.gray }} style={{ color: isDark ? appColors.white : appColors.black }} />
                </View>
                <Button text={t('addPaymentPage.confirmPayment')} style={styles.btn}
                    color={appColors.white} onPress={orderDetails} />
            </ScrollView>
        </SafeAreaView>
    );
}