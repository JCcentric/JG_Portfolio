import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React, { useState } from 'react';


export default function App() {
  return (
    <View style={styles.container}>
      {/* Toggle for light/dark mode */}


      {/* Navigation bar */}
    

      {/* Hero page */}
      <View style={styles.testDiv}></View>
      <Text>
        This is the hero page/landing screen
      </Text>

      {/* About Page */}


      {/* Coding Languages */}


      {/* Projects */}




    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  testDiv: {
    width: 10,
    height: 10,
    borderColor: '#f700cdff',
    backgroundColor: '#f700cdff',
    borderRadius: 50,
  },



  
});
