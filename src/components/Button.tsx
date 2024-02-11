import {
  TouchableOpacityProps,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native'
import theme from '../theme'

interface ButtonProps extends TouchableOpacityProps {
  title: string
  isLoading?: boolean
}
export default function Button({
  title,
  isLoading = false,
  ...rest
}: ButtonProps) {
  return (
    <TouchableOpacity
      className="bg-BRAND_MID flex-1 max-h-[56px] min-h-[56px] rounded-md flex justify-center items-center p-4 w-full"
      disabled={isLoading}
      {...rest}
    >
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <Text
          className="text-gray-100 text-center"
          style={{
            fontFamily: theme.FONT_FAMILY.BOLD,
          }}
        >
          {title}
        </Text>
      )}
    </TouchableOpacity>
  )
}
