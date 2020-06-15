import React, {useState} from 'react';
import {Text, View, Button, TextInput, ActivityIndicator } from 'react-native';
import List from "./List"
import { list } from "./store"
import { StyleSheet } from 'react-native';
import { useSetRecoilState } from "recoil"

export default function Main() {

  const [state, setState] = useState("")
  const [activity, setActivity] = useState(false)
  const setMsgList = useSetRecoilState(list)
  

  const changeText = text => {
    setState(text)
  }

  const handleSubmit = () => {
    let randomId = Math.random().toString(36).substr(7)
    let date = new Date()
    date = date.getHours() + ":" + date.getMinutes() + " " + " -  " + date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear()

    if (!state) return


    setTimeout(() => {
      setActivity(activity => !activity)
      setMsgList(oldMsgList => [
        ...oldMsgList,
        {
          id: randomId,
          msg: state,
          date
        }
      ])
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

            <List />
            {activity && <ActivityIndicator /> }
        </View>
    
    )
}


const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      padding: 10,
      paddingTop: 40,
    },
  
    button: {
      height: 10,
      fontSize: "3px"
      },
  
    input: {
      height: 40, 
      borderColor: "#eee", 
      borderWidth: 2, 
      padding: 9, 
      marginBottom: 6
    }
  });