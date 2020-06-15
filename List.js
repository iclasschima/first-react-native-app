import React, {useEffect} from "react"
import {StyleSheet, View, Text, FlatList} from "react-native"
import {list} from "./store"
import { useRecoilValue } from "recoil"

export default function List() {
    const msgList = useRecoilValue(list)

    useEffect(() => {
        console.log(msgList)
    }, [msgList])

    return (
        <View style={{ marginTop: 10 }}>
            <FlatList
            data={msgList}
            renderItem={({item}) => (
                <View>
                    <Text style={styles.message}>{item.msg}</Text>
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
  