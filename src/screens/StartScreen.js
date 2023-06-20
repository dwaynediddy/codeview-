import { Button, StyleSheet, Text, View } from 'react-native'
import { useState } from 'react'
import { Picker } from '@react-native-picker/picker'
import FastImage from 'react-native-fast-image';

const selectLanguageOptions = [
    { label: 'Javascript', value: 'option1' },
    { label: 'Swift', value: 'option2' },
    { label: 'Python', value: 'option3' },
  ];

const StartScreen = ({ navigation }) => {
    const [ option, setOption ] = useState("")

  return (
    <View style={styles.container}>
      <FastImage
        source={require('../assets/animated/convo.gif')}
        style={styles.image}
        resizeMode={FastImage.resizeMode.contain}
      />
      <Picker
        selectedValue={option}
        onValueChange={(itemValue, itemIndex) => setOption(itemValue)}
        style={styles.picker}
      >
        {selectLanguageOptions.map((option, index) => (
          <Picker.Item key={index} label={option.label} value={option.value} />
          ))}
      </Picker>
    </View>
  )
}

export default StartScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    top: 200
  },
  image: {
    width: 240,
    height: 240,
  },
  picker: {
    width: 200,
    height: 40,
  },
})