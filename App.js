import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const handleInputChange = text => {
    alert(text);
  }
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <Text>My First React Native App</Text>
      <TextInput
        style={{ height: 30, borderColor: 'green', borderWidth: 4 }}
        placeholder="I am placeholder Can't Love me!"
        onChangeText={text => handleInputChange(text)}
      />
      <StatusBar style="auto" />
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
});