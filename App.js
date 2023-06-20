import { View, ScrollView, SafeAreaView, Button, StyleSheet, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import StartScreen from './src/screens/StartScreen';
import InterviewScreen from './src/screens/InterviewScreen';

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Select an interview language</Text>
      <StartScreen />
      <View style={styles.button}>
      <Button
        title='START'
        onPress={() => navigation.navigate('Interview')}
        />
        </View>
    </View>
    
  );
}

const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Interview" component={InterviewScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  button: {
    top: 580,
    border: '1px solid blue'
  },
  label: {
    top: 70,
    left: 80,
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 8,
  },
});

export default App;