// import React from "react";
// import { View, Text, TouchableOpacity, NativeModules, LayoutAnimation } from "react-native";
// import styles from "./styles";
// import { useState } from "react";
// import { Icons } from "../../../../../utils/icons";

// export function DetailsView(props) {

//     const [showManufacturer, setShowManufacturer] = useState(true);
//     const [showProductDesc, setShowProductDesc] = useState(false);
//     const [showFeature, setShowFeature] = useState(false);

//     const { UIManager } = NativeModules;

//     UIManager.setLayoutAnimationEnabledExperimental &&
//         UIManager.setLayoutAnimationEnabledExperimental(true);

//     const showValue = (manufacturer, product, feature) => {
//         LayoutAnimation.easeInEaseOut();
//         setShowManufacturer(manufacturer);
//         setShowProductDesc(product);
//         setShowFeature(feature);
//     }
//     return (
//         <View>
//             <Text style={[styles.detail]}>Product Details</Text>
//             <Text style={[styles.title]}>Refillable, Reusable, High Quality Glass Roll on Bottles with Silver cap For Essential Oil Blends DIY Perfume Cosmetics Beauty Products Ideal</Text>
//             <TouchableOpacity onPress={() => showValue(!showManufacturer, false, false)} activeOpacity={0.7} style={[styles.optionView]}>
//                 <Text style={[styles.txt]}>Manufacturer Details</Text>
//                 <View style={{ transform: [{ scaleX: 1 }] }}>
//                     <Icons.sideArrow />
//                 </View>
//             </TouchableOpacity>
//             {showManufacturer &&
//                 <Text style={[styles.title]}>Refillable, Reusable, High Quality Glass Roll on Bottles with Silver cap For Essential Oil Blends DIY Perfume Cosmetics Beauty Products Ideal</Text>}
//             <View style={styles.product}>
//                 <TouchableOpacity onPress={() => showValue(false, !showProductDesc, false)} activeOpacity={0.7} style={[styles.optionView]}>
//                     <Text style={[styles.txt]}>Product Disclaimer</Text>
//                     <View style={{ transform: [{ scaleX: 1 }] }}>
//                         <Icons.sideArrow />
//                     </View>
//                 </TouchableOpacity>
//                 {showProductDesc &&
//                     <Text style={[styles.title]}>Refillable, Reusable, High Quality Glass Roll on Bottles with Silver cap For Essential Oil Blends DIY Perfume Cosmetics Beauty Products Ideal</Text>}
//             </View>
//             <View style={styles.product}>
//                 <TouchableOpacity onPress={() => showValue(false, false, !showFeature)} activeOpacity={0.7} style={[styles.optionView]}>
//                     <Text style={[styles.txt]}>Features & details</Text>
//                     <View style={{ transform: [{ scaleX: 1 }] }}>
//                         <Icons.sideArrow />
//                     </View>
//                 </TouchableOpacity>
//                 {showFeature &&
//                     <Text style={[styles.title]}>Refillable, Reusable, High Quality Glass Roll on Bottles with Silver cap For Essential Oil Blends DIY Perfume Cosmetics Beauty Products Ideal</Text>}
//             </View>

//         </View>
//     )

// }






// import React, { useState } from "react";
// import { View, Text, TouchableOpacity, NativeModules, LayoutAnimation } from "react-native";
// import styles from "./styles";
// import { Icons } from "../../../../../utils/icons";

// export function DetailsView(props) {
//     const [showManufacturer, setShowManufacturer] = useState(true);
//     const [showProductDesc, setShowProductDesc] = useState(false);
//     const [showFeature, setShowFeature] = useState(false);

//     const { UIManager } = NativeModules;

//     if (UIManager && UIManager.setLayoutAnimationEnabledExperimental) {
//         UIManager.setLayoutAnimationEnabledExperimental(true);
//     }

//     const showValue = (manufacturer, product, feature) => {
//         LayoutAnimation.easeInEaseOut();
//         setShowManufacturer(manufacturer);
//         setShowProductDesc(product);
//         setShowFeature(feature);
//     };

//     return (
//         <View>
//             <Text style={[styles.detail]}>Product Details</Text>
//             <Text style={[styles.title]}>
//                 Refillable, Reusable, High Quality Glass Roll on Bottles with Silver cap For Essential Oil Blends DIY Perfume Cosmetics Beauty Products Ideal
//             </Text>
//             <TouchableOpacity
//                 onPress={() => showValue(!showManufacturer, false, false)}
//                 activeOpacity={0.7}
//                 style={[styles.optionView]}
//             >
//                 <Text style={[styles.txt]}>Manufacturer Details</Text>
//                 <View style={{ transform: [{ scaleX: 1 }] }}>
//                     <Icons.sideArrow />
//                 </View>
//             </TouchableOpacity>
//             {showManufacturer && (
//                 <Text style={[styles.title]}>
//                     Refillable, Reusable, High Quality Glass Roll on Bottles with Silver cap For Essential Oil Blends DIY Perfume Cosmetics Beauty Products Ideal
//                 </Text>
//             )}
//             <View style={styles.product}>
//                 <TouchableOpacity
//                     onPress={() => showValue(false, !showProductDesc, false)}
//                     activeOpacity={0.7}
//                     style={[styles.optionView]}
//                 >
//                     <Text style={[styles.txt]}>Product Disclaimer</Text>
//                     <View style={{ transform: [{ scaleX: 1 }] }}>
//                         <Icons.sideArrow />
//                     </View>
//                 </TouchableOpacity>
//                 {showProductDesc && (
//                     <Text style={[styles.title]}>
//                         Refillable, Reusable, High Quality Glass Roll on Bottles with Silver cap For Essential Oil Blends DIY Perfume Cosmetics Beauty Products Ideal
//                     </Text>
//                 )}
//             </View>
//             <View style={styles.product}>
//                 <TouchableOpacity
//                     onPress={() => showValue(false, false, !showFeature)}
//                     activeOpacity={0.7}
//                     style={[styles.optionView]}
//                 >
//                     <Text style={[styles.txt]}>Features & details</Text>
//                     <View style={{ transform: [{ scaleX: 1 }] }}>
//                         <Icons.sideArrow />
//                     </View>
//                 </TouchableOpacity>
//                 {showFeature && (
//                     <Text style={[styles.title]}>
//                         Refillable, Reusable, High Quality Glass Roll on Bottles with Silver cap For Essential Oil Blends DIY Perfume Cosmetics Beauty Products Ideal
//                     </Text>
//                 )}
//             </View>
//         </View>
//     );
// }




// import React, { useState } from "react";
// import { View, Text, TouchableOpacity, NativeModules, LayoutAnimation } from "react-native";
// import styles from "./styles";
// import { Icons } from "../../../../../utils/icons";

// export function DetailsView(props) {
//     const [showManufacturer, setShowManufacturer] = useState(true);
//     const [showProductDesc, setShowProductDesc] = useState(false);
//     const [showFeature, setShowFeature] = useState(false);

//     const { UIManager } = NativeModules;

//     if (UIManager && UIManager.setLayoutAnimationEnabledExperimental) {
//         UIManager.setLayoutAnimationEnabledExperimental(true);
//     }

//     const showValue = (manufacturer, product, feature) => {
//         LayoutAnimation.easeInEaseOut();
//         setShowManufacturer(manufacturer);
//         setShowProductDesc(product);
//         setShowFeature(feature);
//     };

//     // Determine the dynamic title
//     const getTitle = () => {
//         if (showManufacturer) return "Manufacturer Details";
//         if (showProductDesc) return "Product Disclaimer";
//         if (showFeature) return "Features & Details";
//         return "Product Details"; // Default title
//     };

//     return (
//         <View>
//             {/* Dynamic Title */}
//             <Text style={[styles.detail]}>{getTitle()}</Text>

//             <Text style={[styles.title]}>
//                 Refillable, Reusable, High Quality Glass Roll on Bottles with Silver cap For Essential Oil Blends DIY Perfume Cosmetics Beauty Products Ideal
//             </Text>
//             <TouchableOpacity
//                 onPress={() => showValue(!showManufacturer, false, false)}
//                 activeOpacity={0.7}
//                 style={[styles.optionView]}
//             >
//                 <Text style={[styles.txt]}>Manufacturer Details</Text>
//                 <View style={{ transform: [{ scaleX: 1 }] }}>
//                     <Icons.sideArrow />
//                 </View>
//             </TouchableOpacity>
//             {showManufacturer && (
//                 <Text style={[styles.title]}>
//                     Manufacturer: Refillable, Reusable, High Quality Glass Roll on Bottles with Silver cap For Essential Oil Blends DIY Perfume Cosmetics Beauty Products Ideal
//                 </Text>
//             )}
//             <View style={styles.product}>
//                 <TouchableOpacity
//                     onPress={() => showValue(false, !showProductDesc, false)}
//                     activeOpacity={0.7}
//                     style={[styles.optionView]}
//                 >
//                     <Text style={[styles.txt]}>Product Disclaimer</Text>
//                     <View style={{ transform: [{ scaleX: 1 }] }}>
//                         <Icons.sideArrow />
//                     </View>
//                 </TouchableOpacity>
//                 {showProductDesc && (
//                     <Text style={[styles.title]}>
//                         Disclaimer: Refillable, Reusable, High Quality Glass Roll on Bottles with Silver cap For Essential Oil Blends DIY Perfume Cosmetics Beauty Products Ideal
//                     </Text>
//                 )}
//             </View>
//             <View style={styles.product}>
//                 <TouchableOpacity
//                     onPress={() => showValue(false, false, !showFeature)}
//                     activeOpacity={0.7}
//                     style={[styles.optionView]}
//                 >
//                     <Text style={[styles.txt]}>Features & details</Text>
//                     <View style={{ transform: [{ scaleX: 1 }] }}>
//                         <Icons.sideArrow />
//                     </View>
//                 </TouchableOpacity>
//                 {showFeature && (
//                     <Text style={[styles.title]}>
//                         Features: Refillable, Reusable, High Quality Glass Roll on Bottles with Silver cap For Essential Oil Blends DIY Perfume Cosmetics Beauty Products Ideal
//                     </Text>
//                 )}
//             </View>
//         </View>
//     );
// }






// import React, { useState } from "react";
// import { View, Text, TouchableOpacity, NativeModules, LayoutAnimation } from "react-native";
// import styles from "./styles";
// import { Icons } from "../../../../../utils/icons";

// export function DetailsView(props) {
//     const [showManufacturer, setShowManufacturer] = useState(true);
//     const [showProductDesc, setShowProductDesc] = useState(false);
//     const [showFeature, setShowFeature] = useState(false);

//     const { UIManager } = NativeModules;

//     if (UIManager && UIManager.setLayoutAnimationEnabledExperimental) {
//         UIManager.setLayoutAnimationEnabledExperimental(true);
//     }

//     const showValue = (manufacturer, product, feature) => {
//         LayoutAnimation.easeInEaseOut();
//         setShowManufacturer(manufacturer);
//         setShowProductDesc(product);
//         setShowFeature(feature);
//     };

//     // Determine the dynamic title
//     const getTitle = () => {
//         if (showManufacturer) return "Manufacturer Details";
//         if (showProductDesc) return "Product Disclaimer";
//         if (showFeature) return "Features & Details";
//         return "Product Details"; // Default title
//     };

//     return (
//         <View>
//             {/* Dynamic Title */}
//             <Text style={[styles.detail]}>{getTitle()}</Text>

//             <Text style={[styles.title]}>
//                 Refillable, Reusable, High Quality Glass Roll on Bottles with Silver cap For Essential Oil Blends DIY Perfume Cosmetics Beauty Products Ideal
//             </Text>
//             <TouchableOpacity
//                 onPress={() => showValue(!showManufacturer, false, false)}
//                 activeOpacity={0.7}
//                 style={[styles.optionView]}
//             >
//                 <Text style={[styles.txt]}>Manufacturer Details</Text>
//                 <View style={{ transform: [{ scaleX: 1 }] }}>
//                     <Icons.sideArrow />
//                 </View>
//             </TouchableOpacity>
//             {showManufacturer && (
//                 <Text style={[styles.title]}>
//                     Manufacturer: Refillable, Reusable, High Quality Glass Roll on Bottles with Silver cap For Essential Oil Blends DIY Perfume Cosmetics Beauty Products Ideal
//                 </Text>
//             )}
//             <View style={styles.product}>
//                 <TouchableOpacity
//                     onPress={() => showValue(false, !showProductDesc, false)}
//                     activeOpacity={0.7}
//                     style={[styles.optionView]}
//                 >
//                     <Text style={[styles.txt]}>Product Disclaimer</Text>
//                     <View style={{ transform: [{ scaleX: 1 }] }}>
//                         <Icons.sideArrow />
//                     </View>
//                 </TouchableOpacity>
//                 {showProductDesc && (
//                     <>
//                         {/* Add this line for a heading above the disclaimer */}
//                         <Text style={[styles.detail]}>Important Information</Text>

//                         <Text style={[styles.title]}>
//                             Disclaimer: Refillable, Reusable, High Quality Glass Roll on Bottles with Silver cap For Essential Oil Blends DIY Perfume Cosmetics Beauty Products Ideal
//                         </Text>
//                     </>
//                 )}
//             </View>
//             <View style={styles.product}>
//                 <TouchableOpacity
//                     onPress={() => showValue(false, false, !showFeature)}
//                     activeOpacity={0.7}
//                     style={[styles.optionView]}
//                 >
//                     <Text style={[styles.txt]}>Features & details</Text>
//                     <View style={{ transform: [{ scaleX: 1 }] }}>
//                         <Icons.sideArrow />
//                     </View>
//                 </TouchableOpacity>
//                 {showFeature && (
//                     <Text style={[styles.title]}>
//                         Features: Refillable, Reusable, High Quality Glass Roll on Bottles with Silver cap For Essential Oil Blends DIY Perfume Cosmetics Beauty Products Ideal
//                     </Text>
//                 )}
//             </View>
//         </View>
//     );
// }




// import React, { useState } from "react";
// import { View, Text, TouchableOpacity, NativeModules, LayoutAnimation } from "react-native";
// import styles from "./styles";
// import appColors from "../../../../../theme/appColors";
// import { Icons } from "../../../../../utils/icons";
// import { windowHeight } from "../../../../../theme/appConstant";

// export function DetailsView(props) {
//     const [showManufacturer, setShowManufacturer] = useState(true);
//     const [showProductDesc, setShowProductDesc] = useState(false);
//     const [showFeature, setShowFeature] = useState(false);

//     const { UIManager } = NativeModules;

//     if (UIManager && UIManager.setLayoutAnimationEnabledExperimental) {
//         UIManager.setLayoutAnimationEnabledExperimental(true);
//     }

//     const showValue = (manufacturer, product, feature) => {
//         LayoutAnimation.easeInEaseOut();
//         setShowManufacturer(manufacturer);
//         setShowProductDesc(product);
//         setShowFeature(feature);
//     };

//     const getTitle = () => {
//         if (showManufacturer) return "Manufacturer Details";
//         if (showProductDesc) return "Product Disclaimer";
//         if (showFeature) return "Features & Details";
//         return "Product Details"; 
//     };

//     return (
//         <View>
//             <Text style={[styles.detail]}>{getTitle()}</Text>

//             <Text style={[styles.title]}>
//                 Refillable, Reusable, High Quality Glass Roll on Bottles with Silver cap For Essential Oil Blends DIY Perfume Cosmetics Beauty Products Ideal
//             </Text>
//             <View style={{
//                 borderBottomWidth: 0.7,
//                 marginTop: windowHeight(13),
//                 bottom:0,
//                 borderBottomColor: appColors.content,
//             }} />
//             <TouchableOpacity
//                 onPress={() => showValue(!showManufacturer, false, false)}
//                 activeOpacity={0.7}
//                 style={[styles.optionView]}
//             >

//                 <Text style={[styles.txt]}>Manufacturer Details</Text>
//                 <View style={{ transform: [{ scaleX: 1 }] }}>
//                     <Icons.sideArrow />
//                 </View>
//             </TouchableOpacity>
//             {showManufacturer && (
//                 <Text style={[styles.title]}>
//                     Manufacturer: Refillable, Reusable, High Quality Glass Roll on Bottles with Silver cap For Essential Oil Blends DIY Perfume Cosmetics Beauty Products Ideal
//                 </Text>
//             )}
//             <View style={styles.product}>
//             <View style={{
//                 borderBottomWidth: 0.7,
//                 marginTop: windowHeight(15),
//                 borderBottomColor: appColors.content,
//             }} />
//                 <TouchableOpacity
//                     onPress={() => showValue(false, !showProductDesc, false)}
//                     activeOpacity={0.7}
//                     style={[styles.optionView]}
//                 >
//                     <Text style={[styles.txt]}>Product Disclaimer</Text>
//                     <View style={{ transform: [{ scaleX: 1 }] }}>
//                         <Icons.sideArrow />
//                     </View>
//                 </TouchableOpacity>
//                 {showProductDesc && (
//                     <>
//                         <Text style={[styles.detail]}>Important Information</Text>

//                         <Text style={[styles.title]}>
//                             Disclaimer: Refillable, Reusable, High Quality Glass Roll on Bottles with Silver cap For Essential Oil Blends DIY Perfume Cosmetics Beauty Products Ideal
//                         </Text>
//                     </>
//                 )}
//             </View>
//             <View style={styles.product}>
//                 <TouchableOpacity
//                     onPress={() => showValue(false, false, !showFeature)}
//                     activeOpacity={0.7}
//                     style={[styles.optionView]}
//                 >
//                     <Text style={[styles.txt]}>Features & details</Text>
//                     <View style={{ transform: [{ scaleX: 1 }] }}>
//                         <Icons.sideArrow />
//                     </View>
//                 </TouchableOpacity>
//                 {showFeature && (
//                     <Text style={[styles.title]}>
//                         Features: Refillable, Reusable, High Quality Glass Roll on Bottles with Silver cap For Essential Oil Blends DIY Perfume Cosmetics Beauty Products Ideal
//                     </Text>
//                 )}
//             </View>
//         </View>
//     );
// }




import React, { useState } from "react";
import { View, Text, TouchableOpacity, NativeModules, LayoutAnimation } from "react-native";
import styles from "./styles";
import appColors from "../../../../../theme/appColors";
import { Icons } from "../../../../../utils/icons";
import { windowHeight } from "../../../../../theme/appConstant";

export function DetailsView(props) {
    const [showManufacturer, setShowManufacturer] = useState(true);
    const [showProductDesc, setShowProductDesc] = useState(false);
    const [showFeature, setShowFeature] = useState(false);

    const { UIManager } = NativeModules;

    if (UIManager && UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }

    const showValue = (manufacturer, product, feature) => {
        LayoutAnimation.easeInEaseOut();
        setShowManufacturer(manufacturer);
        setShowProductDesc(product);
        setShowFeature(feature);
    };

    const getTitle = () => {
        if (showManufacturer) return "Manufacturer Details";
        if (showProductDesc) return "Product Disclaimer";
        if (showFeature) return "Features & Details";
        return "Product Details";
    };

    return (
        <View>
            <Text style={[styles.detail]}>Product Details</Text>

            <Text style={[styles.title]}>
                Refillable, Reusable, High Quality Glass Roll on Bottles with Silver cap For Essential Oil Blends DIY Perfume Cosmetics Beauty Products Ideal
            </Text>

            <View style={{
                borderBottomWidth: 0.7,
                marginTop: windowHeight(13),
                marginBottom: windowHeight(10),
                borderBottomColor: appColors.content,
            }} />

            <TouchableOpacity
                onPress={() => showValue(!showManufacturer, false, false)}
                activeOpacity={0.7}
                style={[styles.optionView]}
            >
                <Text style={[styles.txt]}>Manufacturer Details</Text>
                <View style={{ transform: [{ scaleX: 1 }] }}>
                    <Icons.sideArrow />
                </View>
            </TouchableOpacity>
            {showManufacturer && (
                <Text style={[styles.title]}>
                    Manufacturer: Refillable, Reusable, High Quality Glass Roll on Bottles with Silver cap For Essential Oil Blends DIY Perfume Cosmetics Beauty Products Ideal
                </Text>
            )}

            <View style={{
                borderBottomWidth: 0.7,
                marginTop: windowHeight(16),
                marginBottom: windowHeight(0),
                borderBottomColor: appColors.content,
            }} />

            <View style={styles.product}>
                <TouchableOpacity
                    onPress={() => showValue(false, !showProductDesc, false)}
                    activeOpacity={0.7}
                    style={[styles.optionView]}
                >
                    <Text style={[styles.txt]}>Product Disclaimer</Text>
                    <View style={{ transform: [{ scaleX: 1 }] }}>
                        <Icons.sideArrow />
                    </View>
                </TouchableOpacity>
                {showProductDesc && (
                    <>

                        <Text style={[styles.title]}>
                            Disclaimer: Refillable, Reusable, High Quality Glass Roll on Bottles with Silver cap For Essential Oil Blends DIY Perfume Cosmetics Beauty Products Ideal
                        </Text>
                    </>
                )}
            </View>
            <View style={styles.product}>
                <TouchableOpacity
                    onPress={() => showValue(false, false, !showFeature)}
                    activeOpacity={0.7}
                    style={[styles.optionView]}
                >
                    <Text style={[styles.txt]}>Features & details</Text>
                    <View style={{ transform: [{ scaleX: 1 }] }}>
                        <Icons.sideArrow />
                    </View>
                </TouchableOpacity>
                {showFeature && (
                    <Text style={[styles.title]}>
                        Features: Refillable, Reusable, High Quality Glass Roll on Bottles with Silver cap For Essential Oil Blends DIY Perfume Cosmetics Beauty Products Ideal
                    </Text>
                )}
            </View>
        </View>
    );
}
