import * as React from 'react';
import { View } from 'react-native';
import Tip from './Tip';
import TipModal from './TipModal';
import styles from '../Styles/Styles'
export default function Tips ({showModal, visible, setVisible, usedKey}) {
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
    
    const modalItem = items.find(x => x.key == usedKey)
    return (
        <>
            <View style={styles.tipList} key={'Cards'}>
                {
                    items.map((item, i) => <Tip image={item.image} title={item.title} content={item.content} tipKey={i+1} showModal={showModal} icon={item.icon}/>)
                }
            </View>
            {
                modalItem && <TipModal visible={visible} setVisible={setVisible} image={modalItem.image} title={modalItem.title} content={modalItem.content}/>
            }
        </>
    );
}

