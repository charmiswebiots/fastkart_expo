import { SafeAreaView,ScrollView } from "react-native";
import styles from "./styles";
import { GlobalStyle } from "../../styles/style";
import appColors from "../../theme/appColors";
import { useState } from "react";
import { Header,AddNew,Total,Button } from "../../commonComponents";
import { AddNewCardModal,CommonModal } from "../../otherComponents";
import { SelectValueView } from "./components";
import { windowHeight } from "../../theme/appConstant";

export function Payment(){
    const [showModal, setShowModal] = useState(false);

    const visibleModal = () => {
        setShowModal(!showModal)
    }

    return(
        <SafeAreaView style={[GlobalStyle.mainView, { backgroundColor: appColors.white }]}>
        <CommonModal
            modal={<AddNewCardModal showModal={visibleModal} showModal1={visibleModal}  />}
            showModal={showModal}
            visibleModal={() => setShowModal(false)} />
        <ScrollView showsVerticalScrollIndicator={false}>
            <Header
                onPress={() => navigation.goBack()}
                isText
                titleText={'Add Payment Method'} />
            <AddNew onPress={visibleModal} text={'Add New Card'}  />
            <SelectValueView  />
            <Total bottom={windowHeight(80)} style title={'orderDetails'} />
        </ScrollView>
            <Button text={'Confirm Payment'} style={styles.btn}
                color={appColors.white}  />
    </SafeAreaView>
    )
}