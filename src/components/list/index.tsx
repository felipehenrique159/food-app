import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import RestaurantItem from './item/item'

interface RestaurantProps {
    id: string,
    name: string,
    image: string
}

export default function RestaurantVerticalList() {

    const [restaurants, setRestaurants] = useState<RestaurantProps[]>([])

    useEffect(() => {
        async function getRestaurants() {
            const response = await fetch('http://192.168.1.116:3000/restaurants')
            const data = await response.json()
            setRestaurants(data)
        }

        getRestaurants()
    }, [])

    return (
        <View className='px-4 flex-1 w-full h-full mb-11 gap-4'>
            {restaurants.map((item, index) => (
                <RestaurantItem key={item.id} item={item} />
            ))}
        </View>
    )
}