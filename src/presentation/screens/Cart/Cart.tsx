import React from 'react';
import CartProduct from '../../components/CartProduct/CartProduct';
import Price from '../../components/Price/Price';
import { useStore } from '../../../Domain/Service';
import { ScrollView } from 'react-native';
import { CartModel } from '../../../Domain/Models/Cart';
import { View, FlatList } from 'react-native';

function Cart() {
  const getTotalPrice = useStore((state: any) => state.totalPrice);
  const getCart = useStore((state: any) => state.cart);
  return (
    <View className='bg-slate-200 flex flex-1 w-fit'>
      <Price />
      <FlatList
        data={getCart}
        renderItem={({ item }: { item: CartModel }) => (
          <CartProduct {...item} />
        )}
      />
    </View>
  );
}

export default Cart;
