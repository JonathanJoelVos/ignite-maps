import { Text, TouchableOpacity, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { AntDesign } from '@expo/vector-icons'
import theme from '../theme'
import { useNavigation } from '@react-navigation/native'

interface HeaderProps {
  title: string
}
export default function Header({ title }: HeaderProps) {
  const { goBack } = useNavigation()
  const insets = useSafeAreaInsets()
  const paddingTop = insets.top + 32

  function handleGoBack() {
    goBack()
  }

  return (
    <View
      className="bg-zinc-900 p-8 flex flex-row items-center justify-between"
      style={{
        paddingTop,
      }}
    >
      <TouchableOpacity onPress={handleGoBack}>
        <AntDesign name="arrowleft" size={24} color={theme.COLORS.BRAND_MID} />
      </TouchableOpacity>
      <Text className="text-gray-300 font-bold text-lg">{title}</Text>
    </View>
  )
}
