import React, { Component } from 'react';
import { ActivityIndicator, FlatList, Text, View, SafeAreaView, StyleSheet } from 'react-native';
import Hyperlink from 'react-native-hyperlink';


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true
    };
  }

  async getNews() {
    try {
      const response = await fetch(`https://vardefatos.azurewebsites.net/api/News?termo=Moro`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }        
      });
      const json = await response.json();
      this.setState({ data: json.response});
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  componentDidMount() {
    this.getNews();
  }

  render() {
    const { data, isLoading } = this.state;

    return (
      <View style={{ flex: 1, padding: 24 }}>
        {isLoading ? <ActivityIndicator/> : (
          <FlatList
            style={styles.container}
            data={data}
            //keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (  
                <SafeAreaView>              
                    <Text style={styles.sectionTitle}>
                        {item.title}
                    </Text>
                    <Hyperlink 
                    linkDefault={true} 
                    style={styles.link}
                    linkStyle={{color: 'red', fontSize: 14}}
                    >
                        <Text>
                            {item.link}
                        </Text>                 
                    </Hyperlink>      
                </SafeAreaView>          
            )}
          />
        )}
      </View>
    );
  }
};

const styles = StyleSheet.create({
    sectionTitle:{
        fontSize: 18,
        fontWeight: '600',
        marginTop: 30        
    },
    container:{
        flex: 1,
        marginHorizontal:20
    },
    link:{
        marginTop: 8,
        fontSize: 22,
        fontWeight: '400'
    }
})