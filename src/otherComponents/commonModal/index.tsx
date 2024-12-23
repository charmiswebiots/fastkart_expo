// import { View, Modal, TouchableOpacity } from "react-native";
// import styles from "./styles";

// export function CommonModal(props) {
//     return (
//         props.showModal &&
//         <View style={styles.mainView}>
//             <Modal transparent animationType='slide'>
//                 <TouchableOpacity style={styles.subView} onPress={props.visibleModal} activeOpacity={1}>
//                     {props.modal}
//                 </TouchableOpacity>
//             </Modal>
//         </View>
//     )
// }



import { View, Modal, TouchableOpacity } from "react-native";
import styles from "./styles";

interface CommonModalProps {
  showModal: boolean;
  visibleModal: () => void;
  modal: JSX.Element;
}

export function CommonModal(props: CommonModalProps): JSX.Element | null {
  return (
    props.showModal &&
    <View style={styles.mainView}>
      <Modal transparent animationType='slide'>
        <TouchableOpacity style={styles.subView} onPress={props.visibleModal} activeOpacity={1}>
          {props.modal}
        </TouchableOpacity>
      </Modal>
    </View>
  );
}