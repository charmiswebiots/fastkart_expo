import { View, Text, ScrollView, Image } from "react-native";
import styles from "./styles";
import { category1 } from "../../../../data";
import { windowHeight } from "../../../../../theme/appConstant";
import { useTheme } from "@react-navigation/native";
import { useValues } from "../../../../../utils/context";

export function TrendingCategoryView() {
    const {colors}=useTheme()
    const {textRtlStyle,t}=useValues()
    return (
        <View>
            <Text style={[styles.txt,{color:colors.text},{textAlign:textRtlStyle}]}>{t('searchPage.trendingCategory')}</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollView}>
                {
                    category1.map((item, key) =>
                        <View
                            key={key} 
                            style={[
                                styles.image,
                                {
                                    backgroundColor: item.backgroundColor || appColors.defaultBackground, 
                                    borderColor: item.borderColor || appColors.defaultBorderColor,      
                                    borderWidth: windowHeight(1), 
                                }
                            ]}
                        >
                            <Image source={item.image} style={styles.img} />
                        </View>
                    )
                }
            </ScrollView>
        </View>
    );
}
