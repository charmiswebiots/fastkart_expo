// import React from "react";
// import { View } from "react-native";
// import styles from "./styles";
// import { Icons } from "../../utils/icons";
// import { useValues } from "../../utils/context";
// import { windowHeight } from "../../theme/appConstant";

// export function Selected() {

//     const { rtl } = useValues()

//     return (

//         <View style={[styles.selectView, rtl ? styles.selectRight : styles.selectLeft,{right:rtl?windowHeight(273):0}]}>
//                 <Icons.select />
//         </View>
//     )
// }




import React, { FC } from "react";
import { View, ViewStyle } from "react-native";
import styles from "./styles";
import { Icons } from "../../utils/icons";
import { useValues } from "../../utils/context";
import { windowHeight } from "../../theme/appConstant";

export const Selected: FC = () => {
    const { rtl }: { rtl: boolean } = useValues();

    const viewStyle: ViewStyle = [
        styles.selectView,
        rtl ? styles.selectRight : styles.selectLeft,
        { right: rtl ? windowHeight(273) : 0 }
    ];

    return (
        <View style={viewStyle}>
            <Icons.select />
        </View>
    );
}