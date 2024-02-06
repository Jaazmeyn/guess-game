// import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View, ImageBackground, SafeAreaView } from 'react-native';

import GameScreen from './screens/GameScreen';
import StartGameScreen from './screens/StartGameScreen';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function App() {

  const [userNumber, setUserNumber] = useState();

  function pickedNumberHandler(pickedNuber){
    setUserNumber(pickedNuber); // set picked number which we will get from StartGamescreen 
    // by passing the function to the component
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler}/>;

  if (userNumber) {
    screen = <GameScreen />
  }

  return (
    <View style={styles.rootScreen}>
      <ImageBackground 
          source={require('./assets/images/background.png')} 
          resizeMode='cover'
          style={styles.rootScreen}
          imageStyle={styles.backgroundImage}>
          <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    backgroundColor: Colors.primary700,
    flex:1,
    // backgroundImage: `linear-gradient(to bottom,` + Colors.primary700+ `,` + Colors.accent500 +`)`
  },
  backgroundImage: { 
    opacity: 0.11,
  }
});
