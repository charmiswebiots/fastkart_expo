import { SafeAreaView,ScrollView,Image } from "react-native";
import styles from "./styles";
import images from "../../utils/images";
import { Header } from "../../commonComponents";
import { QuestionsView ,PeopleView} from './components';

export function AboutUs(){
    return(
        <SafeAreaView style={[styles.mainView]}>
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