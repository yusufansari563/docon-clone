import React, { useEffect } from 'react';
import { useStore } from '../../Service';
import { View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { CartModel } from '../../../Domain/Models/Cart';

export default function CartProduct(props: CartModel) {
  const [addToCart, getCart, addSameProdInCart, removeSameProdInCart] =
    useStore((state: any) => [
      state.addToCart,
      state.cart,
      state.addSameProdInCart,
      state.removeSameProdInCart,
    ]);

  const AddToCart = (item: any) => {
    addToCart(item);
  };

  const productExistCheck = () => {
    return getCart.includes(props);
  };

  return (
    <View className=' bg-white shadow-md m-2 border-separate rounded-md p-2 h-fit flex justify-between flex-col'>
      <Image className='w-20 h-20 my-3 ' source={{ uri: props.image }} />
      <Text className='font-bold text-lg italic'>{props.title}</Text>
      <Text className='text-lg text-gray-700 '>{props.price}</Text>
      <View className='flex flex-row w-full'>
        <TouchableOpacity
          className='rounded-full bg-green-400 w-12'
          onPress={() => addSameProdInCart(props)}
        >
          <Text className='m-auto text-lg'>+</Text>
        </TouchableOpacity>
        <View>
          <Text className=' w-12 text-center text-lg'>{props.total}</Text>
        </View>
        <TouchableOpacity
          className='rounded-full text-center bg-red-400 w-12'
          onPress={() => removeSameProdInCart(props)}
        >
          <Text className='m-auto text-lg'>-</Text>
        </TouchableOpacity>
      </View>
      <Text className='font-bold'>{props.price}</Text>
    </View>
  );
}
