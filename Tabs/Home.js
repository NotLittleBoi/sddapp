import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableHighlight, Pressable, Touchable } from 'react-native';
import Ring from '../Ring';
import RingDisplay from '../RingDisplay';

export default function Home() {
  const [accountName, setAccountName] = useState("Benjamin")
  const [collectedTokens, setCollectedTokens] = useState(0)
  const [location, setLocation] = useState()

 /* useEffect(() => {
    navigator.geolocation.watchPosition((position) => {
      setLocation(`${position.coords.latitude} ${position.coords.longitude} ${position.coords.accuracy} ${position.coords.altitude}`)
      console.log("Got location")
    })
  }, []) 
  */

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
    <SafeAreaView style={styles.homebackground}>
      
    </SafeAreaView>
    <SafeAreaView style = {styles.topName}>
      <Text style = {styles.topNameText}>
          Hello, {accountName}
        </Text>
    </SafeAreaView>
    <TouchableHighlight onPress={() => {
      setCollectedTokens(collectedTokens + 50)
    }}>
      <Text>Add 50 TK</Text>
    </TouchableHighlight>
    <Text style={{fontSize: 24}}>{location}</Text>
    <SafeAreaView style={styles.row}>
      <RingDisplay tokens={collectedTokens} />
    </SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c7cb85',
    padding: 12
  },
  topNameText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  homebackground: {
    backgroundColor: 'blue',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 12,
  }
});


