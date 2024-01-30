// import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';

import GameScreen from './screens/GameScreen';
import StartGameScreen from './screens/StartGameScreen';

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
        {screen}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    backgroundColor: '#ddb52f',
    flex:1,
    backgroundImage: 'linear-gradient(to bottom, #ff0000 10%, #72063c 60%)'
  },
  backgroundImage: {
    opacity: 0.11,
  }
});
