import React from 'react';
import {
    View,
    FlatList,
    Text,
    Image,
} from 'react-native';


const DATA = [
    {
        id: '1',
        step: "STEP 1/4",
        title: 'First Item',
        url: 'https://images.unsplash.com/photo-1512238701577-f182d9ef8af7',
    },
    {
        id: '2',
        step: "STEP 2/4",
        title: 'Second Item',
        url: 'https://images.unsplash.com/photo-1607326957431-29d25d2b386f',
    },
    {
        id: '3',
        step: "STEP 3/4",
        title: 'Third Item',
        url: 'https://images.unsplash.com/photo-1607326957431-29d25d2b386f',
    },
    {
        id: '4',
        step: "STEP 4/4",
        title: 'Third Item',
        url: 'https://images.unsplash.com/photo-1607326957431-29d25d2b386f',
    },
];

interface CarouselItem {
    id: string;
    title: string;
    url: string;
    step: string;

}


const App = () => {
    return (
        <View>
            <FlatList className=' h-96 w-full mb-5'
                data={DATA}
                horizontal
                renderItem={({ item }) => (
                    <>
                        <View className=' mx-2 snap-x '>
                            <View className='m-2 h-4/5 w-72 bg-yellow-200 '>
                                <Image source={{ uri: item.url }} className='h-20' />
                                <Text className='text-lg font-bold text-slate-400'>{item.step}</Text>
                                <Text>{item.title}</Text>
                            </View>
                        </View>
                    </>

                )}
                keyExtractor={(item: CarouselItem) => item.id}
            />
        </View>
    );
};



export default App;