import React, {useState} from 'react';
import { RecoilRoot} from "recoil"
import { View } from 'react-native';
import Main from "./Main"

export default function App() {

  return (
    <RecoilRoot>
    <View>
        <Main />
    </View>
    </RecoilRoot>
  );
}
