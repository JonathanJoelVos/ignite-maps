import { Ionicons } from '@expo/vector-icons'
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native'
import theme from '../theme'

interface CarStatusProps extends TouchableOpacityProps {
  licensePlate?: string | null
}
export default function CarStatus({ licensePlate, ...rest }: CarStatusProps) {
  const iconName = licensePlate ? 'key-outline' : 'car-outline'
  const message = licensePlate
    ? `Veículo ${licensePlate} em uso.`
    : 'Nenhum veículo em uso.'
  const statusText = licensePlate ? 'chegada' : 'saída'

  return (
    <TouchableOpacity
      className="bg-zinc-800 m-8 p-4 flex flex-row items-center rounded-md"
      {...rest}
    >
      <View className="bg-zinc-700 flex justify-center items-center p-3 rounded-md mr-3">
        <Ionicons name={iconName} size={50} color={theme.COLORS.BRAND_LIGHT} />
      </View>
      <View className="flex-1">
        <Text className=" text-gray-200 ">{message}</Text>
        <Text className="text-BRAND_LIGHT font-bold">
          {`Clique aqui para registrar a ${statusText}.`}
        </Text>
      </View>
    </TouchableOpacity>
  )
}
