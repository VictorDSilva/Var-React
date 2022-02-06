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

    const items = [
        {
            image: 'https://picsum.photos/700', 
            icon: 'visibility',
            title: 'Fake News', 
            content: 'Texto 1',
            key:1
        },
        {
            image: 'https://picsum.photos/700', 
            icon: 'lock',
            title: 'Golpes',
            content: 'Texto 2',
            key:2
        },
        {
            image: 'https://picsum.photos/700',
            icon: 'fingerprint',
            title: 'Clonar', 
            content: 'Texto 23523',
            key:3
        }
    ]

    return (
        <SafeAreaView>
          <Tips showModal={showModal} visible={visible} setVisible={setVisible} usedKey={usedKey} items={items}/>
        </SafeAreaView>
    );
}

