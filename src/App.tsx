import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useTonConnect } from './src/hooks/useTonConnect';
import { useCounterContract } from './src/hooks/useCounterContract';

function App() {
  const { connected } = useTonConnect();
  const { value, address, sendIncrement } = useCounterContract();

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Counter Address</Text>
        <Text style={styles.hint}>{address}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Counter Value</Text>
        <Text>{value ?? 'Loading...'}</Text>
      </View>

      <TouchableOpacity
        style={[styles.button, connected ? styles.activeButton : styles.disabledButton]}
        onPress={() => {
          sendIncrement();
        }}
        disabled={!connected}
      >
        <Text>Increment</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
  card: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginVertical: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  hint: {
    color: '#888',
  },
  button: {
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#646cff',
    marginVertical: 10,
  },
  activeButton: {
    backgroundColor: '#61dafb',
  },
  disabledButton: {
    backgroundColor: '#ccc',
  },
});

export default App;
