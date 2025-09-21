import { Stack } from "expo-router";
import './globals.css'
import { StatusBar } from "react-native";
import { I18nextProvider } from 'react-i18next';
import i18n from '../services/i18n';

export default function RootLayout() {
  return <>
  <I18nextProvider i18n={i18n}>
  <StatusBar hidden={true} />
  <Stack>
    <Stack.Screen
      name="(tabs)"
      options={{
        headerShown:false
      }}
    />
    <Stack.Screen
      name="movies/[id]"
      options={{
        headerShown:false
      }}
    />
    <Stack.Screen
      name="settings/index"
      options={{
        headerShown:false
      }}
    />
  </Stack>
  </I18nextProvider>
  
  </>
  
}
