import React, {useEffect} from "react"
import {StyleSheet, View, Text, FlatList} from "react-native"
import {list} from "./store"
import { useRecoilValue, useSetRecoilState } from "recoil"
import { Icons } from "react-native-elements"


export default function List() {
    const msgList = useRecoilValue(list)
    const setMsgiist = useSetRecoilState(list)

    const handlePress = id => {
        console.log(id)
    }

    return (
        <View style={{ marginTop: 10 }}>
            <FlatList
                data={msgList}
                renderItem={({item}) => (
                    <View>
                        <Text onPress={() => handlePress(item.id)} style={styles.message}>{item.msg}</Text>
                        <Text style={styles.date}>{item.date}</Text>
                        
                    </View>
                )}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({  
    message: {
      margin: 2,
    },
  
    date: {
      color: "#92858E",
      marginBottom: 14,
      fontSize: 11
    },
    button: {
        height: 10,
        fontSize: "3px"
        },
    
  });
  