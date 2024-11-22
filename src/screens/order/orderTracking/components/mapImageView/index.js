import { Image } from "react-native";
import styles from "./styles";
import images from "../../../../../utils/images";

export function MapImageView(){
    return(
        <Image source={images.orderTracking} style={styles.img} />
    )
}