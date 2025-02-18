import { View, Pressable, Image } from 'react-native'
import React from 'react'
import PagerView from 'react-native-pager-view'

export default function Banner() {
    return (
        <View className='w-full h-36 md:h-60 rounded-2xl mt-5 mb-4' style={{ borderRadius: 16, overflow: 'hidden' }}>
            <PagerView style={{ flex: 1 }} initialPage={0} pageMargin={14}>
                <View key={1} style={{ flex: 1 }}>
                    <Pressable className='w-full h-36 md:h-60 rounded-2xl overflow-hidden' onPress={() => { console.log('click') }}>
                        <Image source={require('../../assets/banner1.png')} className='w-full h-36 md:h-60' style={{ borderRadius: 16 }} />
                    </Pressable>
                </View>

                <View key={2} style={{ flex: 1 }}>
                    <Pressable className='w-full h-36 md:h-60 rounded-2xl overflow-hidden' onPress={() => { console.log('click') }}>
                        <Image source={require('../../assets/banner2.png')} className='w-full h-36 md:h-60' style={{ borderRadius: 16 }} />
                    </Pressable>
                </View>
            </PagerView>
        </View>
    )
}