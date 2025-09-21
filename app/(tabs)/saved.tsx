import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { icons } from '@/constants/icons'
import { useTranslation } from 'react-i18next';

const Saved = () => {
  const {t} = useTranslation()
  return (
    <View className="bg-primary flex-1 px-10">
          <View className="flex justify-center items-center flex-1 flex-col gap-5">
            <Image
              source={icons.save}
              className="size-10"
              tintColor="#Fff"
            />
            <Text className="text-gray-500 text-base">{t('saved')}</Text>
          </View>
        </View>
  )
}

export default Saved