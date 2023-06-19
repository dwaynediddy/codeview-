import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import StartScreen from './src/screens/StartScreen';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <StartScreen />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});

export default App;
