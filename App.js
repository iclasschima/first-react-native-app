import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, SectionList } from 'react-native';

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
      <Text style={{fontSize: "17px", fontWeight: "bold", marginTop: "2rem", marginBottom: "1rem"}}>Flat List</Text>
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

        <Text style={{fontSize: "17px", fontWeight: "bold", marginTop: "2rem", marginBottom: "1rem"}}>Section List</Text>
      <SectionList 
        style={styles.section}
        sections={[
          {title: "Girls", data: ["Ella", "Ada", "Helen"]},
          {title: "Boys", data: ["iClass", "Chima", "IC"]}
        ]}

        renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
        renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },

  sectionHeader: {
    padding: 10,
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)'
  },

  item : {
    padding: 10,
    fontSize: 18,
    height: 44,
  },

  section: {

  }
});
