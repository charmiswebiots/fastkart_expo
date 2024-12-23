// import { View } from "react-native";
// import styles from "./styles";
// import { myOffers } from "../../../../data";
// import { Coupon } from "../../../../../commonComponents";

// export function CouponsView(props) {
//     return (
//         <View style={styles.coupon}>
//             {myOffers.map((item) =>
//                 <Coupon
//                     price={item.off}
//                     code={item.code}
//                     onOrder={item.onOrder}
//                     onOrderAbove={item.onOrderAbove}
//                     onPress={() => props.visibleModal(item)}
//                 />
                
//             )}
//         </View>
//     )
// }




// import { View } from "react-native";
// import styles from "./styles";
// import { myOffers } from "../../../../data";
// import { Coupon } from "../../../../../commonComponents";

// interface CouponsViewProps {
//   visibleModal: (item: { off: string; code: string; onOrder: boolean; onOrderAbove: number }) => void;
// }

// export function CouponsView(props: CouponsViewProps) {
//     return (
//         <View style={styles.coupon}>
//             {myOffers.map((item: { off: string; code: string; onOrder: boolean; onOrderAbove: number }) =>
//                 <Coupon
//                     price={item.off}
//                     code={item.code}
//                     onOrder={item.onOrder}
//                     onOrderAbove={item.onOrderAbove}
//                     onPress={() => props.visibleModal(item)}
//                 />
//             )}
//         </View>
//     )
// }




import { View } from "react-native";
import styles from "./styles";
import { myOffers } from "../../../../data";
import { Coupon } from "../../../../../commonComponents";

interface CouponsViewProps {
  visibleModal: (item: { off: string; code: string; onOrder: string; onOrderAbove: string }) => void;
}

export function CouponsView(props: CouponsViewProps) {
    return (
        <View style={styles.coupon}>
            {myOffers.map((item) => (
                <Coupon
                    key={item.code}  // Adding key prop for efficient rendering
                    price={item.off}
                    onOrder={item.onOrder}
                    onOrderAbove={item.onOrderAbove}
                    onPress={() => props.visibleModal(item)}
                />
            ))}
        </View>
    );
}
