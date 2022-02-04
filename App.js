import React, { Component } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import Routes from './src/routes';
import { NavigationContainer } from '@react-navigation/native';

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
      const response = await fetch('https://vardefatos.azurewebsites.net/api/News?termo='+ "Moro" , {
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
      <NavigationContainer>
        <Routes/>
      </NavigationContainer>
    );
  }
};