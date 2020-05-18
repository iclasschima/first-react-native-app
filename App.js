import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default function App() {

  const [state, setState] = useState("")

  const [list, setList ] = useState([])

  const handleChange = async e => {
    setState(e.target.value)

    if (state.search("happy") !== -1) setState(state.replace("happy", "😃 "))
    
    if (state.search("sad") !== -1) setState(state.replace("sad", "😞 "))

    if (state.search("love") !== -1) setState(state.replace("love", "💖 "))
  }

  const addToList = () => {
    const newList = [...list]
    newList.push({key: state})
    setList([...newList])
    setState("")
  }

  return (
    <View style={styles.container}>
      <View>
        <FlatList
          style={{marginBottom: "20px"}}
          data={[
            ...list
          ]}
          renderItem={({item}) => <Text style={{marginBottom: "10px"}}>{item.key}</Text>}
        />
      </View>
      {({item}) => <Text>{item.name}</Text>}
      <TextInput
        placeholder="Enter new list item here..."
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
      <Button onPress={() => addToList()} title="Add" />
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
