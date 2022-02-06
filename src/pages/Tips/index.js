import React from 'react';
import { SafeAreaView, Text, View, StyleSheet, Image } from 'react-native';
import Tips from '../../components/Card/Tips'

export default function App(){
    const [visible, setVisible] = React.useState(false);
    const [usedKey, setUsedKey] = React.useState(undefined);
    
    const showModal = (key) => {
        setVisible(true);
        
        setUsedKey(key);
    };

    return (
        <SafeAreaView>
          <Tips showModal={showModal} visible={visible} setVisible={setVisible} usedKey={usedKey}/>
        </SafeAreaView>
    );
}

