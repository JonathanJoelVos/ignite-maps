import { ReactNode } from 'react'
import { View } from 'react-native'

interface ContentProps {
  children: ReactNode
}
export default function Content({ children }: ContentProps) {
  return <View className="px-8 py-2">{children}</View>
}
