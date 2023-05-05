import React from 'react'
import { Pressable, StyleSheet, Text, View} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { Avatar } from 'native-base';

import { SearchBar } from '../../components/SearchBar/SearchBar';
import { SCREEN_NAME } from '../../Utils';




export default function FindDoctor() {
    const navigation = useNavigation<{ navigate: any }>();
    return (
        <>
        <View className='p-3 bg-white'>
            <View className='flex flex-row mx-3 mb-3'>
                <Text className='text-lg font-bold'>Find Your Doctor</Text>
                <Pressable className='ml-auto mt-1'
                    onPress={() => navigation.navigate(SCREEN_NAME.HOME)}
                >
                    <Text className='text-base text-blue-600 font-semibold'>Cancel</Text>
                </Pressable>
            </View>
            <SearchBar />
        </View>
        <View className='h-3/4 items-center'>
        {/* <Image style={styles.image} source={{ uri: 'https://i.postimg.cc/5200cxT4/R.png' }} /> */}

        <Avatar 
        className='mt-24'
        bg="white" 
         alignSelf="center" 
         size="xl"
        source={{uri: "https://i.postimg.cc/PrR5WgVP/tth-lg-fav.png"}}>
                    AJ
                </Avatar>
            <Text className='text-xl font-bold my-5'>Find Your Doctor</Text>
            <Text className='text-base'>Search by your doctor's first name, last name,</Text>
            <Text className='text-base'>or Docon Id to book appointment</Text>
        </View>
        <View className='h-full bg-white'>
        <View className='border-t border-slate-500 items-center mx-3'>
            <Text className='mt-2 text-base text-slate-500 '>Visit our <Text className='text-blue-500 font-semibold'>FAQ section</Text>  in case of any queries or write
            
            </Text>
            <Text className='text-base text-slate-500'>to us <Text className='text-blue-500 font-semibold'>hello@docon.co.in</Text> for more assistance</Text>
        </View>
        </View>
        </>
    )
}

