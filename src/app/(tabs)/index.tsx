import { StyleSheet, Text, View, Image } from 'react-native';
import products from '@/assets/data/products';
import ProductListItem from '@/src/components/ProductListItem';


export default function MenuScreen() {
  return (
    <View>
      <ProductListItem product ={products[0]}></ProductListItem>
      <ProductListItem product={products[1]}></ProductListItem>
      <ProductListItem product={products[2]}></ProductListItem>
    </View>
  );
}
