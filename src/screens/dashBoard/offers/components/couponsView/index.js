import { View } from "react-native";
import styles from "./styles";
import { myOffers } from "../../../../data";
import { Coupon } from "../../../../../commonComponents";

export function CouponsView(props) {
    return (
        <View style={styles.coupon}>
            {myOffers.map((item) =>
                <Coupon
                    price={item.off}
                    code={item.code}
                    onOrder={item.onOrder}
                    onOrderAbove={item.onOrderAbove}
                    onPress={() => props.visibleModal(item)}
                />
            )}
        </View>
    )
}