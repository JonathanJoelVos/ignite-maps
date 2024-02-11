import { Text, TextInput, TextInputProps, View } from 'react-native'
import theme from '../theme'

interface LicensePlateInputProps extends TextInputProps {
  placeholder: string
  label: string
}
export default function LicensePlateInput({
  label,
  ...rest
}: LicensePlateInputProps) {
  return (
    <View className="bg-zinc-800 p-4 rounded-md">
      <Text className="text-zinc-500">{label}</Text>
      <TextInput
        maxLength={7}
        autoCapitalize="characters"
        className="p-4 rounded-md  text-center uppercase text-3xl text-bold text-gray-300"
        placeholderTextColor={theme.COLORS.GRAY_300}
        style={{
          fontFamily: 'Roboto_700Bold',
        }}
        {...rest}
      />
    </View>
  )
}
