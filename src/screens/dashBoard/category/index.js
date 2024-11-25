import { SafeAreaView ,ScrollView,View} from "react-native";
import {Header,Input} from '../../../commonComponents'
import images from '../../../utils/images'
import styles from "./styles";
import { Icons } from "../../../utils/icons";


export function Category() {
    return (
        <SafeAreaView style={styles.mainView}>
            <Header
                onPress={() => navigation.goBack()}
                lightImage={images.fastkart}
                showImage
                text={'dsf'}
                image={images.offer} />
            <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
                <Input placeholder={'Search Products here..'} rightIcon={<Icons.voiceSearch />} leftIcon={<Icons.search />} />
                <View style={[styles.dataView]}>
                    {/* <CategoryView showLoader={showLoader} textAlign={textAlign} context={commonContext} t={t} colors={colors} getValue={getValue} />
                    <View style={[commonContext.isRTL ? Styles.vegies : styles.vegiesRight]}>
                        <BannerView context={commonContext} textAlign={textAlign} imageAlign={imageAlign} t={t} showLoader={showLoader} />
                        <SubCategoryView subCategory={subCategory} colors={colors} context={commonContext} t={t} navigation={navigation} showLoader={showLoader} />
                    </View> */}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}