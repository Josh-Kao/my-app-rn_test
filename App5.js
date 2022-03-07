import React, { useState } from 'react';
import {
  ImageBackground,
  Text,
  View,
  Image,
  StyleSheet,
  Button,
} from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);

  const setCountHandler = () => {
    setCount((prevCount) => ++prevCount);
  };

  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}></View>
      <View style={styles.deleteIcon}></View>
      <View style={{ top: 50, left: 160, width: 80 }}>
        <Button title='add' onPress={setCountHandler} />
        <Text> Count = {count} </Text>
      </View>
      <Image
        // resizeMethod="resize"
        // resizeMode="contain"
        style={styles.image}
        source={require('./assets/chair.jpg')}
      />
    </View>

    // <ImageBackground
    //   style={styles.background}
    //   source={require("./assets/background.jpg")}
    // >
    //   <View style={styles.logoContainer}>
    //     <Image style={styles.logo} source={require("./assets/logo-red.png")} />
    //     <Text>Sell What You Don't Need</Text>
    //   </View>
    //   <View style={styles.button1}></View>
    //   <View style={styles.button2}></View>
    // </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '70%',
    top: 130,
  },
  container: {
    backgroundColor: '#ddd',
    flex: 1,
  },
  closeIcon: {
    width: 50,
    height: 50,
    backgroundColor: '#fc5c65',
    position: 'absolute',
    top: 40,
    left: 30,
  },
  deleteIcon: {
    width: 50,
    height: 50,
    backgroundColor: '#4ecdc4',
    position: 'absolute',
    top: 40,
    right: 30,
  },

  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: 'absolute',
    top: 70,
    alignItems: 'center',
  },
  button1: {
    width: '100%',
    height: 50,
    backgroundColor: '#fc5c65',
  },
  button2: {
    width: '100%',
    height: 50,
    backgroundColor: '#4ecdc4',
  },
});
