import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {

  const [state, setState] = useState("Hello world 😃")

  const handleChange = async e => {
    setState(e.target.value)

    if (state.search("happy") !== -1) setState(state.replace("happy", "😃 "))
    
    if (state.search("sad") !== -1) setState(state.replace("sad", "😞 "))

    if (state.search("love") !== -1) setState(state.replace("love", "💖 "))
  }


  return (
    <View style={styles.container}>
      
      <TextInput
        placeholder="Type here..."
        onChange={ handleChange}
        value={state}
        style={{
          height: "30px",
          padding: "1rem",
          marginBottom: "1rem",
          borderColor: "grey",
          borderWidth: 1
        }}
      />
      <Button onPress={() => setState("")} title="Clear Text" />
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
