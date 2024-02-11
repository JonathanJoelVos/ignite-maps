import { ActivityIndicator, View } from 'react-native'

interface LoadingProps {}
export default function Loading(props: LoadingProps) {
  return (
    <View className="flex-1 flex justify-center items-center bg-zinc-900">
      <ActivityIndicator />
    </View>
  )
}
