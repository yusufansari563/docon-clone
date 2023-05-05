import React, {useState} from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { RadioButton } from 'react-native-paper';

export default function SettingForm() {
  const [checked, setChecked] = useState('male');
  return (
    <View className='p-3'>
      <View>
        <Text className="text-gray-500 font-medium mb-1">Mobile Number</Text>
        <Text className="text-black-500 font-medium mb-5">0987654321</Text>
      </View>
    <View className="flex flex-row items-center justify-between mb-3">
      <View className="flex-1 mr-2">
        <Text className="text-gray-500 font-small mb-1">First Name*</Text>
        <TextInput
          className="border border-gray-300 rounded-lg p-2 h-8"
          maxLength={50}
        />
      </View>
      <View className="flex-1 ml-2">
        <Text className="text-gray-500 font-medium mb-1">Last Name*</Text>
        <TextInput
          className="border border-gray-300 rounded-lg p-2 h-8"
          maxLength={50}
        />
      </View>
    </View>
    <View className="flex flex-row items-center justify-between mb-3">
      <View className="flex-1 mr-2">
        <TextInput
          className="border border-gray-300 rounded-lg p-2 h-8"
          placeholder="DD/MM/YYYY"
          maxLength={50}
        />
      </View>
      <View className="flex flex-row items-center">
        <RadioButton 
          value="male"
          status={checked === 'male' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('male')}
          color="#3B82F6"
        />
        <Text className="text-gray-600 font-medium mx-1">Male</Text>
        <RadioButton
          value="female"
          status={checked === 'female' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('female')}
          color="#3B82F6"
        />
        <Text className="text-gray-600 font-medium mx-1">Female</Text>
      </View>
    </View>
    <View className="flex flex-row items-center justify-between mb-3">
      <View className="flex-1 mr-2">
        <Text className="text-gray-500 font-medium mb-1">Email Id</Text>
        <TextInput
          className="border border-gray-300 rounded-lg p-2 h-8" 
          maxLength={100}
        />
      </View>
    </View>
    <View className="flex flex-row items-center justify-between mb-3">
      <View className="flex-1 mr-2">
        <Text className="text-gray-500 font-medium mb-1">Address (House number and Building)</Text>
        <TextInput
          className="border border-gray-300 rounded-lg p-2 h-8"
          placeholder="e.g. A-19 Ashok complex"
          maxLength={200}
        />
      </View>
    </View>
    <View className="flex flex-row items-center justify-between mb-3">
      <View className="flex-1 mr-2">
        <Text className="text-gray-500 font-medium mb-1">Street Name</Text>
        <TextInput
          className="border border-gray-300 rounded-lg p-2 h-8"
          placeholder="e.g. Sector-62, near durga park"
          maxLength={200}
        />
      </View>
    </View>
    <View className="flex flex-row items-center justify-between mb-3">
      <View className="flex-1 mr-2">
        <Text className="text-gray-500 font-medium mb-1">Pin code</Text>
        <TextInput
          className="border border-gray-300 rounded-lg p-2 h-8"
          maxLength={50}
        />
      </View>
    </View>
    <View>
    <Button 
  title="Save Details"
/>
    </View>
    </View>
  );
}
