// import React from "react";
// import { SafeAreaView, ScrollView, View } from "react-native";
// import styles from "./styles";
// import appColors from "../../../theme/appColors";
// import images from "../../../utils/images";
// import { Header, SearchFilter } from "../../../commonComponents";
// import { CategoryView,DataView,PriceView } from "./components";
// import { windowHeight } from "../../../theme/appConstant";

// export function ShopPage() {
//     return (
//         <SafeAreaView style={{ backgroundColor: appColors.white}}>
//             <Header
//                 onPress={() => navigation.replace('Drawer')}
//                 lightImage={images.smallLogo}
//                 lightStyle={styles.header}
//                 darkStyle={styles.header}

//                 showImage
//                 text={'Fresh Fruits & Vegetables'}
//                 image={images.offer} />
//             <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.containerStyle}>
//                 <CategoryView />
//                 <View style={{ marginTop: windowHeight(14) }}>
//                     <SearchFilter />
//                     <DataView/>
//                 </View>
//             </ScrollView>
//             <PriceView/>

//         </SafeAreaView>
//     )
// }







import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import styles from "./styles";
import appColors from "../../../theme/appColors";
import images from "../../../utils/images";
import { Header, SearchFilter } from "../../../commonComponents";
import { CategoryView, DataView, PriceView } from "./components";
import { windowHeight } from "../../../theme/appConstant";
import { CommonModal } from '../../../otherComponents'
import { useState } from "react";
import { ProductFilter } from "../../../otherComponents";

export function ShopPage() {

    const [showModal, setShowModal] = useState(false);

    const modalVisible = () => {
        setShowModal(!showModal)
    }
    return (
        <SafeAreaView style={{ backgroundColor: appColors.white, flex: 1 }}>
            <Header
                onPress={() => navigation.replace('Drawer')}
                lightImage={images.smallLogo}
                lightStyle={styles.header}
                darkStyle={styles.header}
                showImage
                text={'Fresh Fruits & Vegetables'}
                image={images.offer}
            />
            <View style={{ flex: 0.99 }}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.containerStyle}>
                    <CategoryView />
                    <View style={{ marginTop: windowHeight(14) }}>
                        <SearchFilter onPress={modalVisible} />
                        <DataView />
                    </View>
                    <CommonModal
                        modal={<ProductFilter showModal={modalVisible}  />}
                        showModal={showModal}
                        visibleModal={modalVisible} />
                    <PriceView />
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}
