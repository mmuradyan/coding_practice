import React, { Component } from 'react';
import { FlatList, Image, StyleSheet, TextInput, View } from 'react-native';

import { API_ROOT } from '../constants';
import Header from './Header';
import RestaurantRow from './RestaurantRow';
import PizzaImage from '../images/pizza.png';

export default class RestaurantsList extends Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    restaurants: [],
    search: '',
  };

  componentDidMount() {
    fetch(`${API_ROOT}/restaurants`)
      .then(response => response.json())
      .then((restaurants) => {
        this.setState({ restaurants });
      });
  }

  handleRestaurantInfoClick = (restaurant) => {
    const { navigation } = this.props;
    navigation.navigate('Info', { restaurant });
  }

  updateSearch = (text) => {
    this.setState({ search: text });
  };

  restaurantsToRender() {
    const { restaurants, search } = this.state;

    if (!search) {
      return restaurants;
    }

    const lowerCaseSearch = search.toLowerCase();
    return restaurants.filter((restaurant) => restaurant.name.toLowerCase().includes(lowerCaseSearch));
  }

  render() {
    const { search } = this.state;

    return (
      <View
        style={{
          backgroundColor: '#fff',
          flex: 1,
        }}
      >
        <View style={styles.pizzaImage}>
          <Image source={PizzaImage} />
        </View>
        <Header />

        <TextInput
          style={styles.input}
          placeholder={'Live Search'}
          onChangeText={this.updateSearch}
          value={search}
        />

        <FlatList
          data={this.restaurantsToRender()}
          renderItem={({ item, index }) => (
            <RestaurantRow restaurant={item} index={index} onInfoClick={this.handleRestaurantInfoClick} />
          )}
          keyExtractor={(item) => item.name}
          initialNumToRender={15}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    padding: 10,
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#444',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#F5F5F5',
  },
  pizzaImage: {
    alignItems: 'center',
    marginTop: 40,
  },
});
