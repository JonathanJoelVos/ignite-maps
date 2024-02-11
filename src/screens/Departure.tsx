import { useRef } from 'react'
import { TextInput, View } from 'react-native'
import Button from '../components/Button'
import Header from '../components/Header'
import LicensePlateInput from '../components/LicensePlateInput'
import { TextAreaInput } from '../components/TextAreaInput'
import Content from '../components/Wrappers/Content'

interface DepartureProps {}

export default function Departure(props: DepartureProps) {
  const descriptionRef = useRef<TextInput>(null)

  function handleRegisterDeparture() {
    console.log('register departure')
  }

  return (
    <View className="flex-1 bg-zinc-900">
      <Header title="Saída" />
      <Content>
        <LicensePlateInput
          label="Placa do veículo"
          placeholder="ABC-1234"
          onSubmitEditing={() => {
            descriptionRef.current?.focus()
          }}
          returnKeyType="next"
        />
      </Content>
      <Content>
        <TextAreaInput
          ref={descriptionRef}
          label="Finalidade"
          placeholder="Vou utilizar o carro para..."
          onSubmitEditing={handleRegisterDeparture}
          returnKeyType="send"
          blurOnSubmit
        />
      </Content>
      <Content>
        <Button title="Registrar saída" onPress={handleRegisterDeparture} />
      </Content>
    </View>
  )
}
