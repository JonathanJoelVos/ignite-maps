import { forwardRef } from 'react'
import { Text, TextInput, TextInputProps, View } from 'react-native'
import theme from '../theme'

interface TextAreaInputProps extends TextInputProps {
  label: string
  isFocused?: boolean
}

const TextAreaInput = forwardRef<TextInput, TextAreaInputProps>(
  ({ label, isFocused, ...rest }, ref) => {
    return (
      <View className=" bg-zinc-800 p-4 rounded-md h-36">
        <Text className="text-zinc-500">{label}</Text>
        <TextInput
          ref={ref}
          multiline
          autoCapitalize="sentences"
          className="pt-2 text-gray-200 "
          placeholderTextColor={theme.COLORS.GRAY_400}
          {...rest}
        />
      </View>
    )
  },
)

TextAreaInput.displayName = 'TextAreaInput'

export { TextAreaInput }
