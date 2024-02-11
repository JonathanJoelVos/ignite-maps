/* eslint-disable jsx-a11y/alt-text */
import { Text, TouchableOpacity, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { Image } from 'expo-image'
import { useApp, useUser } from '@realm/react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj['

interface HomeHeaderProps {}
export default function HomeHeader(props: HomeHeaderProps) {
  const user = useUser()
  const app = useApp()
  const insets = useSafeAreaInsets()

  const paddingTop = insets.top + 32

  function handleLogout() {
    app.currentUser?.logOut()
  }

  return (
    <View
      className="p-8 bg-zinc-800 flex flex-row gap-3 items-center"
      style={{
        paddingTop,
      }}
    >
      <Image
        source={{
          uri: user.profile.pictureUrl,
        }}
        className="w-16 h-16 bg-red-500 rounded-md"
        placeholder={blurhash}
      />
      <View className="flex flex-col flex-1">
        <Text className="text-gray-400 text-xl">Olá,</Text>
        <Text className="font-bold text-gray-200 text-xl">
          {user.profile.name}
        </Text>
      </View>
      <TouchableOpacity activeOpacity={0.7} onPress={handleLogout}>
        <AntDesign name="poweroff" size={24} color="#9ca3af" />
      </TouchableOpacity>
    </View>
  )
}
