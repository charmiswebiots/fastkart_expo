import React from "react";
import { View } from "react-native";
import SliderStyles from "../styles";
import styles from "../styles";
import { Loader } from "../../../../../../commonComponents";

export default sliderLoader = (props) => {
    return (
        <Loader
            context={props.context}
            view={
                <View style={[SliderStyles.image, styles.view]} />
            } />
    )
}