import React, { Component } from 'react';
import { FlatList, Text, View, SafeAreaView, StyleSheet, Linking } from 'react-native';
import { Card, Provider as PaperProvider, Title } from 'react-native-paper';
import { Searchbar, Button, ActivityIndicator } from 'react-native-paper';
import Hyperlink from 'react-native-hyperlink';
import { SimpleLineIcons } from '@expo/vector-icons';
import styles from '../../components/Styles/Styles'

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: false,
      text: ""
    };
  }

  async getNews(termo) {
    this.setState({ isLoading: true });
    try {
      const response = await fetch(`https://vardefatos.azurewebsites.net/api/News?termo=${termo}`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }
      });

      const json = await response.json();

      this.setState({ data: json.response });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  render() {
    const { data, isLoading, text } = this.state;

    return (
      <View style={{ flex: 1, paddingTop: 10 }}>
        {isLoading ?
          <><ActivityIndicator size="large" color="#B24BF3" style={styles.loading} />
            <Text style={styles.loadingText}>Carregando...</Text></> : (
            <>
              <SafeAreaView style={styles.safeArea}>
                <Searchbar
                  placeholder="Digite sua pesquisa aqui"
                  value={text}
                  style={styles.searchbar}
                  onChangeText={(e) => {
                    this.setState({ text: e })
                  }}
                  onSubmitEditing={() => this.getNews(text)}
                />
                <SimpleLineIcons
                  name="arrow-right"
                  style={styles.searchButton}
                  mode="contained"
                  onPress={() => {
                    return this.getNews(text)
                  }} />
              </SafeAreaView>
              <FlatList
                style={styles.container}
                data={data}
                keyExtractor={({ id }, index) => `${id}-${index}`}
                renderItem={({ item }) => (
                  <Card mode="outlined" style={styles.card}>
                    <Card.Content style={styles.content}>
                      <Title style={styles.sectionTitle}>
                        {item.title.trim()}
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
                )}
              />
            </>
          )}
      </View>
    );
  }
};