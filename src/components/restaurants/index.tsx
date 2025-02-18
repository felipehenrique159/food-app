import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import RestaurantItem from './horizontal/intex'

export default function Restaurants() {

    interface RestaurantProps {
        id: string,
        name: string,
        image: string
    }

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
        <FlatList
            horizontal={true}
            data={restaurants}
            renderItem={({ item }) => <RestaurantItem item={item} />}
            contentContainerStyle={{ gap: 14, paddingLeft: 16, paddingRight: 16 }}
            showsHorizontalScrollIndicator={false}
        />
    )
}