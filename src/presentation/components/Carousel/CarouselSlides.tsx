import React from 'react';
import {
    View,
    FlatList,
    Text,
} from 'react-native';



const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
    {
        id: '4',
        title: 'Third Item',
    },
];

interface dataType  {
    id: string;
    title: string;
    
}


const App = () => {
    return (
        <View>
            <FlatList className='bg-red-400 h-96 w-full mb-5'
                data={DATA}
                horizontal
                renderItem={({ item }) => (
                    <View className=' mx-2 snap-x '>
                        <Text className='m-2 h-4/5 w-72 bg-yellow-200 '>{item.title}</Text>
                    </View>
                    
                )}
                keyExtractor={(item: dataType) => item.id}
            />
        </View>
    );
};



export default App;