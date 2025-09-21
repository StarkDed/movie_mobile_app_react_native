import {Text, View,Linking } from 'react-native'
import React from 'react'
import { useTranslation } from 'react-i18next';

const settings = () => {
  const {t,i18n} = useTranslation()
  return (
    <View className="bg-primary flex flex-1 ">
      <View className="flex flex-row ml-2 mt-5">
            <Text
            className="text-lg mt-10 text-gray-500 pr-2"
            >{t('changeLanguage')}:</Text>
            <Text
              onPress={()=>i18n.changeLanguage('ru')}
              className="text-lg mt-10 text-gray-500"
            >RU</Text>
            <Text
            className="text-gray-500 mt-10 text-lg "
            >/</Text>
            <Text
              onPress={()=>i18n.changeLanguage('en')}
              className="text-lg mt-10 text-gray-500"
            >EN</Text>
      </View>
      <View className="flex-1 justify-end items-center pb-10">
        <Text
          onPress={() => Linking.openURL('http://10.0.2.2:5501/index.html')}
          className="text-lg justify-self-end text-gray-500"
          >
          Terms and Conditions
        </Text> 
      </View>
            
    </View>
  )
}

export default settings