import { Text, View, ImageBackground, Alert } from 'react-native'
import backgroundImage from '../assets/background.png'
import Button from '../components/Button'
import theme from '../theme'
import * as WebBrowser from 'expo-web-browser'
import * as Google from 'expo-auth-session/providers/google'
import { ANDROID_CLIENT_ID, IOS_CLIENT_ID } from '@env'
import { useEffect, useState } from 'react'
import { Realm, useApp } from '@realm/react'

WebBrowser.maybeCompleteAuthSession()

export default function SignIn() {
  const [isAuthenticating, setIsAuthenticating] = useState(false)
  const app = useApp()
  // eslint-disable-next-line no-unused-vars
  const [request, response, googleSignIn] = Google.useAuthRequest({
    androidClientId: ANDROID_CLIENT_ID,
    iosClientId: IOS_CLIENT_ID,
    scopes: ['profile', 'email'],
  })

  function handleGoogleSignIn() {
    setIsAuthenticating(true)
    googleSignIn().then((res) => {
      if (res.type !== 'success') {
        setIsAuthenticating(false)
      }
    })
  }

  useEffect(() => {
    if (response?.type === 'success') {
      if (response.authentication?.idToken) {
        const credentials = Realm.Credentials.jwt(
          response.authentication.idToken,
        )

        app.logIn(credentials).catch((err) => {
          console.log(err)
          Alert.alert('Erro', 'Não foi possível autenticar com o Google')
          setIsAuthenticating(false)
        })
      } else {
        Alert.alert('Erro', 'Não foi possível autenticar com o Google')
        setIsAuthenticating(false)
      }
    }
  }, [response, app])

  return (
    <ImageBackground
      source={backgroundImage}
      className="w-full h-full absolute bg-zinc-900 flex-1"
    >
      <View className="w-full flex flex-col  items-center flex-1 p-12 pt-40">
        <Text
          style={{
            fontFamily: theme.FONT_FAMILY.BOLD,
          }}
          className="text-3xl font-bold text-BRAND_LIGHT"
        >
          Ignite Fleet
        </Text>
        <Text
          style={{
            fontFamily: theme.FONT_FAMILY.REGULAR,
          }}
          className="text-base text-gray-100 mb-10"
        >
          Gestão de uso de veículos
        </Text>
        <Button
          title="Entrar com Google"
          isLoading={isAuthenticating}
          onPress={handleGoogleSignIn}
        />
      </View>
    </ImageBackground>
  )
}
