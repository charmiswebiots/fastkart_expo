import React, { useState } from 'react'
import { Image, View } from 'react-native'
import Styles from './styles';
import { Product } from "../../../../commonComponents";
import Data from '../../../../utils/json';
import Images from '../../../../utils/images/images';
import { ProductLoader } from "../../../../commonComponents/product/loader";

export default productView = (props) => {

    const [products] = useState(Data.products);

    const gotoDetails = () => {
        props.navigation.navigate('ProductsDetails')
    }

    return (
        props.showLoader ? <ProductLoader context={props.context} viewAlign={props.viewAlign} selfAlign={props.selfAlign} /> : products.map((item, key) =>
            key === 3 ? <Image source={Images.categoryBanner} style={Styles.img} /> :
                <View style={Styles.product}>
                    <Product
                        image={item.image}
                        name={item.name}
                        weight={item.weight}
                        price={item.price}
                        discount={item.discount}
                        onPress={gotoDetails}
                        viewAlign={props.viewAlign}
                        imageAlign={props.imageAlign}
                    />
                </View>
        )
    )
}