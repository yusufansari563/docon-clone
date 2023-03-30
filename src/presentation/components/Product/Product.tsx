import React from 'react';
import { useStore } from '../../Service';
import { View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ProductModel } from '../../../Domain/Models/Product';

export default function ProductComponent(props: ProductModel) {
  const addToCart = useStore((state: any) => state.addToCart);
  const deleteFromCart = useStore((state: any) => state.deleteFromCart);
  const getCart = useStore((state: any) => state.cart);

  const AddToCart = (item: any) => {
    addToCart(item);
  };

  const DeleteFromCart = (item: any) => {
    deleteFromCart(item);
  };

  const productExistCheck = () => {
    const check = getCart.filter((item: any) => {
      return item?.id === props?.id;
    });
    return check.length > 0;
  };

  return (
    <View className=' bg-white shadow-md m-2 border-separate rounded-md p-2 h-fit flex justify-between flex-col'>
      <Image className='w-20 h-20 my-3' source={{ uri: props.image, }} />
      <Text className='font-bold text-lg italic'>{props.title}</Text>
      <Text className='text-lg '>{props.category}</Text>
      <Text className='text-lg font-bold text-gray-700'>{props.price}</Text>
      <View className='flex justify-between'>
        <Text className='text-yellow-600 py-1 text-base'>{props.rating.rate}</Text>
        <Text className='text-red-700 py-1 text-base'>{props.rating.count}</Text>
      </View>

      <View className='grid gap-2'>
        {!productExistCheck() && (
          <TouchableOpacity
            className='rounded-full shadow-md px-3 py-1  bg-green-400  text-white font-bold'
            onPress={() => AddToCart(props)}
          >
            <Text className='text-white font-bold'>Add to cart</Text>
          </TouchableOpacity>
        )}
        {productExistCheck() && (
          <TouchableOpacity
            className='rounded-full shadow-md px-3 py-1  bg-red-400 text-white font-bold'
            onPress={() => DeleteFromCart(props)}
          >
            <Text className='text-white font-bold'>Delete from cart</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
