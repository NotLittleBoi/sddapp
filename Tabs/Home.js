import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableHighlight, Pressable, Touchable, SafeAreaView, watchPosition} from 'react-native';
import Ring from '../Ring';
import RingDisplay from '../RingDisplay';
import * as Location from "expo-location"
import { LocationObject } from 'expo-location';

export default function Home() {
  const [accountName, setAccountName] = useState("Benjamin")
  const [collectedTokens, setCollectedTokens] = useState(0)
  const [location, setLocation] = useState(null)

  useEffect(() => {
    const interval = setInterval(async () => {
      setLocation(await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Highest
      }))
      console.log("Got location")
    }, 100)
    return () => clearInterval(interval)
  }, [location]) 

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
    <View style={styles.homebackground}>
      
    </View>
    <View style = {styles.topName}>
      <Text style = {styles.topNameText}>
          Hello, {accountName}
        </Text>
    </View>
    <TouchableHighlight onPress={() => {
      setCollectedTokens(collectedTokens + 50)
    }}>
      <Text>Add 50 TK</Text>
    </TouchableHighlight>
    <Text style={{fontSize: 24}}>{JSON.stringify(location?.coords)}</Text>
    <View style={styles.row}>
      <RingDisplay tokens={collectedTokens} />
    </View>
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


