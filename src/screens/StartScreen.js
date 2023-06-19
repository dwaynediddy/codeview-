import { StyleSheet, Text, View } from 'react-native'
import { useState } from 'react'
import { Picker } from '@react-native-picker/picker'
import FastImage from 'react-native-fast-image';

const selectLanguageOptions = [
    { label: 'Javascript', value: 'option1' },
    { label: 'Swift', value: 'option2' },
    { label: 'Python', value: 'option3' },
  ];

const StartScreen = () => {
    const [ option, setOption ] = useState("")

  return (
    <View>
      <FastImage
        source={require('../assets/animated/convo.gif')}
        style={{ width: 200, height: 200 }}
        resizeMode={FastImage.resizeMode.contain}
        />
      <Text>Select an interview language</Text>
      <Picker
        selectedValue={option}
        onValueChange={(itemValue, itemIndex) => setOption(itemValue)}
      >
        {selectLanguageOptions.map((option, index) => (
          <Picker.Item key={index} label={option.label} value={option.value} />
        ))}
      </Picker>
    </View>
  )
}

export default StartScreen

const styles = StyleSheet.create({})