import React, { useEffect, useState } from "react";
import { View, FlatList, Image, Text, TouchableOpacity, Dimensions } from "react-native";
import styles from "./styles";
import { swiperData } from "../../../../data";
import appColors from "../../../../../theme/appColors";
import { useLoadingContext, useValues } from "../../../../../utils/context";
import ContentLoader, { Rect } from 'react-content-loader/native';
import { windowHeight, windowWidth } from "../../../../../theme/appConstant";

export function Slider() {

    const { rtl, t } = useValues()
      const [loading, setLoading] = useState(false);
      const { addressLoaded, setAddressLoaded } = useLoadingContext(); 

    useEffect(() => {
      if (!addressLoaded) {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          setAddressLoaded(true); 
  
        }, 3000);
      }
    }, [addressLoaded, setAddressLoaded]);

    const SkeletonSlider = () => (
        <View style={{ flexDirection: "row", justifyContent: "space-between", right: windowWidth(63) }}>
            <SkeletonImg />
        </View>
    );
    
    const SkeletonImg = () => (
        <ContentLoader
            speed={1}
            width={windowWidth(558)} 
            height={windowHeight(210)} 
            viewBox="0 0 400 400"
            backgroundColor={appColors.loaderBackground}
            foregroundColor={appColors.placeholder}
        >
            <Rect 
                x={windowWidth(0)}  
                y={30} 
   
                width={windowWidth(1000)} 
                height={windowHeight(600)}
            />
        </ContentLoader>
    );
    
    
    
    return (
        <View style={styles.sliderView}>
            {loading ? (
                <SkeletonSlider />
            ) : (
                <FlatList
                    data={swiperData}
                    pagingEnabled={true}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    decelerationRate={0}
                    snapToInterval={Dimensions.get("window").width - 60}
                    snapToAlignment={"center"}
                    centerContent={true}
                    contentInset={styles.content}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View style={[styles.sliderView]}>
                            <Image
                                source={item.image}
                                style={[styles.image, { transform: [{ scaleX: rtl ? -1 : 1 }] }]}
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
                    )}
                />
            )}
        </View>
    );

}

