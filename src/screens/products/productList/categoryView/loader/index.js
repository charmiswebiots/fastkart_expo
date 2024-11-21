import React from "react";
import { View } from "react-native";
import { Loader } from "../../../../../commonComponents";
import Styles from "./styles";

const category = [{}, {}, {}, {}]

export default categoryViewLoader = (props) => {
    return (
        category.map(() =>
            <Loader
                context={props.context}
                view={
                    <View style={Styles.mainView} />
                }
            />
        )
    )
}