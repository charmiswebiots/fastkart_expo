import { View ,FlatList,Text,Image} from "react-native";
import styles from "./styles";
import images from "../../../../utils/images";
import { Icons } from "../../../../utils/icons";
import { useTheme } from "@react-navigation/native";
import { useValues } from "../../../../utils/context";

export function PeopleView(){
    const {colors}=useTheme()
    const {t}=useValues()
    return(
        <View>
        <Text style={[styles.peopleWhoBuild,{color:colors.text}]}>{t('aboutUsPage.peopleWhoBuild')}</Text>
        <FlatList
            data={[{}, {}, {}, {}]}
            numColumns={2}
            style={styles.list}
            columnWrapperStyle={styles.columnStyle}
            ItemSeparatorComponent={() => <View style={styles.seprator} />}
            renderItem={({ item, index }) =>
                <View style={styles.socialView}>
                    <View style={[styles.buildView]}>
                        <Image source={images.fastKartbuild} style={styles.buildImg} resizeMode='contain' />
                    </View>
                    <Text style={[styles.buildTxt,{color:colors.text}]}>{t('aboutUsPage.builtFastkart')}</Text>
                    <View style={styles.social}>
                        <Icons.Facebook />
                        <Icons.LinkedIn />
                        <Icons.twitter />
                    </View>
                </View>
            }
        />
    </View>
    )
}