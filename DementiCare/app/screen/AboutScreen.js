import { View, Text, Button } from 'react-native'
import React from 'react'
import { useRoute, useNavigation } from '@react-navigation/native'

const AboutScreen = () => {
  const route = useRoute()
  const navigation = useNavigation()
  return (
    <View>
      <Text style={{ fontSize: 24 }}>AboutScreen</Text>
      <Button title='Go to Back' onPress={() => navigation.goBack()} />
      <Button title='Go to Service' onPress={() => navigation.navigate('Service')} />
      <Button title='Go to Service with Params' onPress={() => navigation.navigate('Service', { id: 22, otherParams: 'other Params here' })} />
    </View>
  )
}

export default AboutScreen