import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList, ActivityIndicator } from 'react-native';

export default function App() {

  const [state, setState] = useState("")
  const [message, setMessages] = useState([])
  const [activity, setActivity] = useState(false)

  const changeText = text => {
    setState(text)
  }

  const handleSubmit = () => {
 

    if (!state) return

    let date = new Date()
    date = date.getHours() + ":" + date.getMinutes() + " " + " -  " + date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear()
    let randomId = Math.random().toString(36).substring(7)

    setTimeout(() => {
      setActivity(activity => !activity)
      setMessages([...message, {date: date, msg: state, id: randomId}])
      setState("")
    }, 400)

    setActivity(activity => !activity)

   
  }

  return (
    <View style={styles.container}>
      <TextInput
          placeholder="Enter new message..."
          style={styles.input}
          value={state}
          onChangeText={changeText}
      />
      <Button title="send message" onPress={handleSubmit}/>

     {activity ? <ActivityIndicator /> : <Text></Text> }

      <View style={{marginTop: 10}}>
        <FlatList
          data={[...message]}
          renderItem={({item}) => (
            <View>
              <Text style={styles.message}>{item.msg}</Text>
              <Text style={styles.date}>{item.date}</Text>
            </View>
          )}
          keyExtractor={item => item.id}
        />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    paddingTop: 40,
  },

  input: {
    height: 40, 
    borderColor: "#eee", 
    borderWidth: 2, 
    padding: 9, 
    marginBottom: 6
  },

  message: {
    margin: 2,

  },

  date: {
    color: "#92858E",
    marginBottom: 14,
    fontSize: 11
  }
});
