import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'

import { FoodProps } from '..'
import { Ionicons } from '@expo/vector-icons'

export default function CardHorizontalFood({item}: {item: FoodProps}) {
  return (
    <Pressable>
        <Image
            source={{uri: item.image}}
            className='w-44 h-36 rounded-xl'
        />

        <View className='flex flex-row bg-neutral-900/90 gap-1 rounded-full absolute top-2 right-3 px-2 py-1 items-center justify-center'>
            <Ionicons name='star' size={16} color='#FFD700'/>
            <Text className='text-white text-sm'>{item.rating}</Text>
        </View>

        <Text className='text-green-700 font-medium text-lg'>R$ {item.price.toFixed(2)}</Text>
        <Text className='text-black mt-1'>{item.name}</Text>
        <Text className='text-neutral-600 text-sm'>{item.time} - R$ {item.delivery}</Text>
    </Pressable>
  )
}