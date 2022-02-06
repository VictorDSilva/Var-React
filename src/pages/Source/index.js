import React, { Component } from 'react';
import { FlatList, Text, View, SafeAreaView, StyleSheet, Linking } from 'react-native';
import { Card, Provider as PaperProvider, Title } from 'react-native-paper';
import { Searchbar, Button, ActivityIndicator } from 'react-native-paper';

import Hyperlink from 'react-native-hyperlink';


export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            data: []
        };
    };

    componentDidMount() {
        this.getSources();
    }

    getSources() {
        const elements =
            [
                {
                    source: "eFarsas",
                    link: "https://www.e-farsas.com/",
                    image: "https://c.tenor.com/giIwBtUxA1MAAAAC/silviosantos.gif"
                },
                {
                    source: "Boatos",
                    link: "https://www.boatos.org/",
                    image: "https://i.pinimg.com/originals/7d/1c/0b/7d1c0b457664ba5dfaf0cbc961f768e4.gif"
                },
                {
                    source: "Fato ou Fake",
                    link: "https://www.boatos.org/",
                    image: "https://thumbs.gfycat.com/FastReflectingGhostshrimp-size_restricted.gif"
                },
                {
                    source: "Estadão Verifica",
                    link: "https://politica.estadao.com.br/blogs/estadao-verifica/",
                    image: "https://media1.tenor.com/images/93753d2bcbf518e8865772b84e21b4c8/tenor.gif?itemid=10740311"
                },
                {
                    source: "UOL Confere",
                    link: "https://noticias.uol.com.br/confere/",
                    image: "https://c.tenor.com/7NySLW1R_LQAAAAM/abravanel-silvio-santos.gif"
                },
                {
                    source: "Lupa",
                    link: "https://piaui.folha.uol.com.br/lupa/",
                    image: "https://c.tenor.com/6rs8uYOtxmcAAAAM/legal-silvio-santos.gif"
                },
            ];

        this.setState({ data: elements });
    }

    render() {
        const { data, isLoading } = this.state;

        return (
            <View style={{ display: "flex", paddingTop: 10 }}>
                <>
                    {isLoading ?
                        <>
                            <ActivityIndicator size="large" color="#B24BF3" style={styles.loading} />
                            <Text style={styles.loadingText}>Carregando...</Text>
                        </> :
                        (
                            <FlatList
                                style={styles.container}
                                data={data}
                                numColumns={2}
                                keyExtractor={({ id }, index) => `${id}-${index}`}
                                renderItem={({ item }, i) =>
                                    <Card mode="outlined" style={styles.card}>
                                        <Card.Cover source={{ uri: item.image }} style={styles.image} />
                                        <Card.Content style={styles.content}>
                                            <Title style={styles.sectionTitle}>
                                                {item.source.trim()}
                                            </Title>
                                            <Hyperlink
                                                linkDefault={true}
                                                linkText="Acesse Aqui"
                                                style={styles.hyperlink}>
                                                <Button style={styles.link} onPress={() => { Linking.openURL(item.link) }}>
                                                    {item.link}
                                                </Button>
                                            </Hyperlink>
                                        </Card.Content>
                                    </Card>
                                }
                            />
                        )
                    }
                </>
            </View >
        )
    }
}

const styles = StyleSheet.create({
    loading: {
        flexDirection: "column",
        marginTop: "60%"
    },
    loadingText: {
        textAlign: "center",
        color: "#B24BF3"
    },
    container: {
        flexGrow: 1,
        margin: 7
    },
    card: {
        paddingTop: 0,
        margin: 10,
        marginTop: 0,
        borderRadius: 20
    },
    image:{
        borderTopStartRadius: 20,
        borderTopEndRadius: 20

    },
    sectionTitle: {
        textAlign: "center",
        fontSize: 18,
        marginTop: 5,
    },
    content: {
        padding: 0,
        marginBottom: 5
    },
    link: {
        color: "#B24BF3",
        alignItems: "flex-end",
    },
})