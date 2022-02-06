import * as React from 'react';
import { View } from 'react-native';
import Tip from './Tip';
import TipModal from './TipModal';
import styles from '../Styles/Styles'
export default function Tips ({showModal, visible, setVisible, usedKey, items}) {
    
    
    const modalItem = items.find(x => x.key == usedKey)
    return (
        <>
            <View style={styles.tipList} key={'Cards'}>
                {
                    items.map((item, i) => <Tip style={styles.tipCard} image={item.image} title={item.title} content={item.content} tipKey={i+1} showModal={showModal} icon={item.icon}/>)
                }
            </View>
            {
                modalItem && <TipModal visible={visible} setVisible={setVisible} image={modalItem.image} title={modalItem.title} content={modalItem.content}/>
            }
        </>
    );
}

