import React from "react";
import { View, FlatList, Image, Text, TouchableOpacity, Dimensions } from "react-native";
import styles from "./styles";
import { swiperData } from "../../../../data";
import appColors from "../../../../../theme/appColors";
import { useValues } from "../../../../../utils/context";
import Loader from "./loader";

export function Slider(props) {
    const { rtl, t } = useValues();

    return (
        <View style={styles.sliderView}>
            <FlatList
                data={swiperData}
                pagingEnabled={true}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                decelerationRate={0}
                snapToInterval={Dimensions.get("window").width - 60}
                snapToAlignment={"center"}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) =>
                    props.showLoader ? 
                        <Loader context={props.context} />
                     : 
                        <View style={styles.sliderView}>
                            <Image
                                source={item.image}
                                style={[
                                    styles.image,
                                    { transform: [{ scaleX: rtl ? -1 : 1 }] },
                                ]}
                            />
                            <View style={styles.contentView}>
                                <Text
                                    style={[
                                        styles.title,
                                        { textAlign: rtl ? "right" : "left" },
                                        item.id === 2 && { color: appColors.white },
                                    ]}
                                >
                                    {t(item.title)}
                                </Text>
                                <Text
                                    style={[
                                        styles.subTitle,
                                        { textAlign: rtl ? "right" : "left" },
                                        item.id === 2 && { color: appColors.white },
                                    ]}
                                >
                                    {t(item.subTitle)}
                                </Text>
                                <TouchableOpacity
                                    activeOpacity={0.7}
                                    style={[
                                        styles.shopNowView,
                                        { alignSelf: rtl ? "flex-end" : "flex-start" },
                                        item.id === 2 && { backgroundColor: appColors.white },
                                    ]}
                                >
                                    <Text
                                        style={[
                                            styles.shopNow,
                                            item.id === 2 && { color: appColors.primary },
                                        ]}
                                    >
                                        {t(item.shopNow)}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    
                }
            />
        </View>
    );
}
