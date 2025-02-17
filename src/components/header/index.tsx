import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Feather, Ionicons } from '@expo/vector-icons'

export default function Header() {
    return (
        <View className='w-full flex flex-row items-center justify-between'>
            <Pressable className='w-10 h-10 bg-white rounded-full flex items-center justify-center'>
                <Ionicons name="menu" size={24} color="black" />
            </Pressable>

            <View className='flex flex-col items-center justify-center'>
                <Text className='text-center text-sml text-slate-800'>Localização</Text>
                <View className='flex flex-row items-center justify-center'>
                    <Feather name="map-pin" size={24} color="#FF0000" />
                    <Text className='text-lg font-bold'>Brasil</Text>
                </View>
            </View>

            <Pressable className='w-10 h-10 bg-white rounded-full flex items-center justify-center'>
                <Ionicons name="notifications" size={24} color="black" />
            </Pressable>
        </View>
    )
}