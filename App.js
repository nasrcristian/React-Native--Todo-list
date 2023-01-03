import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function App() {
  const [bgColor, setBgColor] = useState("#A0D")
  const [count, setCount] = useState(0)

  const handlePress = ()=> {
    setBgColor(bgColor === "#506"? "#FFF": "#506")
    setCount(count + 1)
  }
  return (
    <View style={{...styles.container, backgroundColor: bgColor}}>
      <Pressable onPress={handlePress} style={{...styles.container, width: '100%'}}>
        <View>
          <Text>Clicked: {`${count}`} times</Text>
        </View>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
