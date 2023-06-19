import { View, ScrollView, SafeAreaView, Button } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import StartScreen from './src/screens/StartScreen';
import InterviewScreen from './src/screens/InterviewScreen';

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View>
      <StartScreen />
      <Button
       title='START'
       onPress={() => navigation.navigate('Interview')}
      />
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

export default App;