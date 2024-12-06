import { SafeAreaView,ScrollView,Image } from "react-native";
import styles from "./styles";
import images from "../../utils/images";
import { Header } from "../../commonComponents";
import { QuestionsView ,PeopleView} from './components';
import { useTheme } from "@react-navigation/native";

export function AboutUs({navigation}){
    const {colors}=useTheme()
    return(
        <SafeAreaView style={[styles.mainView,{backgroundColor:colors.background}]}>
        <ScrollView showsVerticalScrollIndicator={false}>
            <Header
                onPress={() => navigation.goBack()}
                isText
                titleText={'About us'} />
            <Image source={images.aboutUs} style={styles.img} resizeMode='contain' />
            <QuestionsView  />
            <PeopleView/>
        </ScrollView>
    </SafeAreaView>
    )
}