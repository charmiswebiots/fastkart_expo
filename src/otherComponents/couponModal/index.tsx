// import { View, Text, TouchableOpacity } from "react-native";
// import styles from "./styles";
// import { termsCondition } from "../../screens/data";
// import { useTheme } from "@react-navigation/native";
// import { useValues } from "../../utils/context";

// export function CouponModal(props) {

//     const { colors } = useTheme()
//     const { textRtlStyle, viewRtlStyle, t,currSymbol,currValue } = useValues()

//     return (
//         <View style={[styles.mainView, { backgroundColor: colors.background }]}>
//             <View style={styles.offView}>
//                 <Text style={[styles.flatTxt, { textAlign: textRtlStyle }]}>{t('cartlist.flat')} 50% off</Text>
//                 <Text style={[styles.offTxt, { textAlign: textRtlStyle }]}>{t('cartlist.orderabove')}{currSymbol}{(currValue * 250).toFixed(2)}</Text>
//                 <TouchableOpacity onPress={props.showModal} activeOpacity={0.8} style={[styles.codeView, { flexDirection: viewRtlStyle }]}>
//                     <Text style={styles.codeTxt}>{t('cartlist.code')} {t('myOffersArr.offerCode')}</Text>
//                     <Text style={styles.copyCode}>{t('couponModal.copyCode')}</Text>
//                 </TouchableOpacity>
//             </View>
//             <View style={[styles.termsView, { backgroundColor: colors.white }]}>
//                 <Text style={[styles.txt1, { textAlign: textRtlStyle }]}>{t('couponModal.termsConditions')}</Text>
//                 {termsCondition.map((item, key) => (
//                     <View style={[styles.keyView, { flexDirection: viewRtlStyle }]} key={item.id}>
//                         <Text style={[styles.txt, { textAlign: textRtlStyle }]}>{key + 1}. </Text>

//                         <Text style={[styles.txt, { textAlign: textRtlStyle }]}>{t(item.terms)}</Text>
//                     </View>
//                 ))}
//             </View>
//         </View>
//     );
// }




import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import { termsCondition } from "../../screens/data";
import { useTheme } from "@react-navigation/native";
import { useValues } from "../../utils/context";

interface CouponModalProps {
  showModal: () => void;
}

export function CouponModal(props: CouponModalProps): JSX.Element {
  const { colors } = useTheme();
  const { textRtlStyle, viewRtlStyle, t, currSymbol, currValue } = useValues();

  return (
    <View style={[styles.mainView, { backgroundColor: colors.background }]}>
      <View style={styles.offView}>
        <Text style={[styles.flatTxt, { textAlign: textRtlStyle }]}>
          {t('cartlist.flat')} 50% off
        </Text>
        <Text style={[styles.offTxt, { textAlign: textRtlStyle }]}>
          {t('cartlist.orderabove')}{currSymbol}{(currValue * 250).toFixed(2)}
        </Text>
        <TouchableOpacity
          onPress={props.showModal}
          activeOpacity={0.8}
          style={[styles.codeView, { flexDirection: viewRtlStyle }]}
        >
          <Text style={styles.codeTxt}>
            {t('cartlist.code')} {t('myOffersArr.offerCode')}
          </Text>
          <Text style={styles.copyCode}>{t('couponModal.copyCode')}</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.termsView, { backgroundColor: colors.white }]}>
        <Text style={[styles.txt1, { textAlign: textRtlStyle }]}>
          {t('couponModal.termsConditions')}
        </Text>
        {termsCondition.map((item, key) => (
          <View style={[styles.keyView, { flexDirection: viewRtlStyle }]} key={item.id}>
            <Text style={[styles.txt, { textAlign: textRtlStyle }]}>
              {key + 1}. 
            </Text>
            <Text style={[styles.txt, { textAlign: textRtlStyle }]}>
              {t(item.terms)}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}