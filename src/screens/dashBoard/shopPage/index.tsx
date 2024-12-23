// import React from "react";
// import { SafeAreaView, ScrollView, View } from "react-native";
// import styles from "./styles";
// import images from "../../../utils/images";
// import { Header, SearchFilter } from "../../../commonComponents";
// import { CategoryView, DataView, PriceView } from "./components";
// import { windowHeight } from "../../../theme/appConstant";
// import { CommonModal } from '../../../otherComponents'
// import { useState } from "react";
// import { ProductFilter } from "../../../otherComponents";
// import { useTheme } from "@react-navigation/native";
// import { useValues } from "../../../utils/context";
// import { Icons } from "../../../utils/icons";

// export function ShopPage({navigation}) {
//     const {colors}=useTheme()
//     const {isDark,t}=useValues()

//     const [showModal, setShowModal] = useState(false);

//     const modalVisible = () => {
//         setShowModal(!showModal)
//     }
//     return (
//         <SafeAreaView style={{ backgroundColor: colors.background, flex: 1 }}>
//             <Header
//                 onPress={() => navigation.navigate('PageList')}
//                 lightImage={isDark?<Icons.fkDark/>:<Icons.fkLight/>}
//                 lightStyle={{right:windowHeight(4)}}
//                 darkStyle={styles.header}
//                 showImage
//                 text={t('categoryArr.freshFruitsVegetables')}
//                 image={images.offer}
//             />
//             <View style={{ flex: 0.99 }}>
//                 <ScrollView
//                     showsVerticalScrollIndicator={false}
//                     contentContainerStyle={[styles.containerStyle]}>
//                     <CategoryView />
//                     <View style={{ marginTop: windowHeight(14) }}>
//                         <SearchFilter onPress={modalVisible} />
//                         <DataView />
//                     </View>
//                     <CommonModal
//                         modal={<ProductFilter showModal={modalVisible}  />}
//                         showModal={showModal}
//                         visibleModal={modalVisible} />
//                     <PriceView />
//                 </ScrollView>
//             </View>
//         </SafeAreaView>
//     );
// }





import React, { FC, useState } from 'react';
import { SafeAreaView, ScrollView, View, StyleProp, ViewStyle } from 'react-native';
import styles from './styles';
import images from '../../../utils/images';
import { Header, SearchFilter } from '../../../commonComponents';
import { CategoryView, DataView, PriceView } from './components';
import { windowHeight } from '../../../theme/appConstant';
import { CommonModal } from '../../../otherComponents';
import { ProductFilter } from '../../../otherComponents';
import { useTheme } from '@react-navigation/native';
import { useValues } from '../../../utils/context';
import { Icons } from '../../../utils/icons';

interface ShopPageProps {
    navigation: {
        navigate: (screen: string) => void;
    };
}

export const ShopPage: FC<ShopPageProps> = ({ navigation }) => {
    const { colors } = useTheme();
    const { isDark, t } = useValues();

    const [showModal, setShowModal] = useState<boolean>(false);

    const modalVisible = (): void => {
        setShowModal(!showModal);
    };

    return (
        <SafeAreaView style={{ backgroundColor: colors.background, flex: 1 }}>
            <Header
                onPress={() => navigation.navigate('PageList')}
                lightImage={isDark ? <Icons.fkDark /> : <Icons.fkLight />}
                lightStyle={{ right: windowHeight(4) } as StyleProp<ViewStyle>}
                darkStyle={styles.header}
                showImage
                text={t('categoryArr.freshFruitsVegetables')}
                image={images.offer}
            />
            <View style={{ flex: 0.99 }}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={[styles.containerStyle]}>
                    <CategoryView />
                    <View style={{ marginTop: windowHeight(14) } as StyleProp<ViewStyle>}>
                        <SearchFilter onPress={modalVisible} />
                        <DataView />
                    </View>
                    <CommonModal
                        modal={<ProductFilter showModal={modalVisible} />}
                        showModal={showModal}
                        visibleModal={modalVisible} />
                    <PriceView />
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};