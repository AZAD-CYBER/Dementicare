import { View, Text } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'

const ServiceScreen = () => {
  const route = useRoute()
  console.log('Route...', route)
  return (
    <View>
      <Text style={{ fontSize: 24 }}>ServiceScreen</Text>
    </View>
  )
}

export default ServiceScreen