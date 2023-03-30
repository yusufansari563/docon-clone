import React from 'react';
import { View, Text } from 'react-native';
import { useStore } from '../../Service';

function Price() {
  const getCart = useStore((state: any) => state.cart);

  const priceCalculator = () => {
    const price = getCart.reduce((total: any, props: any) => {
      return total + Math.round(props.price * props.total);
    }, 0);
    return price;
  };

  return (
    <View className='bg-white shadow-md m-2 border-separate rounded-md p-2 h-fit flex justify-between flex-col'>
      <Text className='font-bold text-xl italic'>Total Price: {priceCalculator()}</Text>
    </View>
  );
}

export default Price;
