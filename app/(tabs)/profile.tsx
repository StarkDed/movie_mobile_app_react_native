import { StyleSheet, Text, View,Image,TouchableOpacity} from 'react-native'
import React from 'react'
import { icons } from '@/constants/icons'
import {Link} from 'expo-router'
import { useTranslation } from 'react-i18next';

const Profile = () => {
  const {t,i18n} = useTranslation()
  return (
    <View className="bg-primary flex-1 px-10">
      <Link
      href="/settings" 
      asChild
      >
       <TouchableOpacity 
       className="mt-10 self-end"
       onPress={()=>{}}>
      <Image
        source={icons.settings}
        className='w-12 h-12'
      />
      </TouchableOpacity>
      </Link>

      <View className="flex justify-center items-center flex-1 flex-col gap-5">
        <Image
          source={icons.person}
          className="size-10"
          tintColor="#Fff"
        />
        <Text className="text-gray-500 text-base">{t('profile')}</Text>
      </View>
    </View>
  )
}

export default Profile