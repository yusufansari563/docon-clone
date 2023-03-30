import { View, Text } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { useStore } from '../../Service';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const HeaderCart = (props: any) => {
  const [cart] = useStore((state: any) => [state.cart]);
  const navigation: { navigate: any } = useNavigation();

  const getCount= ()=>{
    return cart.length;
  }
  
  return (
    <View className='px-4'>
      <TouchableOpacity
        className='flex flex-row'
        onPress={() => navigation.navigate('Cart')}
      >
        <Text className='text-center'>{getCount()}</Text>
        <AntDesign name='shoppingcart' size={24} color='black' />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderCart;
