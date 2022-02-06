import React from 'react';
import { SafeAreaView, Text, View, StyleSheet, Image } from 'react-native';
import styles from '../../components/Styles/Styles'
import Tip from '../../components/Card/Tip';
import TipModal from '../../components/Card/TipModal';


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
            title: 'Sobre', 
            content: 'O VAR de Fatos é uma aplicação que tem como objetivo ajudar as pessoas a lidar com o fenômeno das Fake News. A ferramenta desenvolvida receberá o texto de uma notícia que o usuário suspeite ser Fake News. Em seguida, serão inseridas em um crawler. Finalmente, esta aplicação buscará notícias com conteúdo similar ao texto enviado pelo usuário, e retornará informações com temas relacionados, para que o leitor possa ver diferentes fontes sobre o assunto, para que tenham diferentes referências da notícia, além de oferecer instrumentos para a busca por novas fontes.',
            key:1
        },
        {
            image: 'https://picsum.photos/700', 
            icon: 'people',
            title: 'Autores', 
            content: 'Victor Domingos, Sandro Fernandes, Emerson Augusto',
            key:2
        },
        {
            image: 'https://picsum.photos/700', 
            icon: 'grade',
            title: 'Agradecimentos', 
            content: 'Nina e Bela',
            key:3
        }
    ]

    const modalItem = items.find(x => x.key == usedKey)


    return (
        <SafeAreaView>
           <View style={styles.configList} key={'Cards'}>
                {
                    items.map((item, i) => <Tip style={styles.configCard} image={item.image} title={item.title} content={item.content} tipKey={i+1} showModal={showModal} icon={item.icon}/>)
                }
            </View>
            {
                modalItem && <TipModal visible={visible} setVisible={setVisible} image={modalItem.image} title={modalItem.title} content={modalItem.content}/>
            }
        </SafeAreaView>
    );
}

