import React from 'react';
import {
  SectionList,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
  Button,
} from 'react-native';

// Define the Pokemon data source
const datasource = [
  {
    title: '⚡ ELECTRIC',
    color: '#FFD700',
    data: [
      {
        name: 'Pikachu',
        image: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_48-2x.png',
      },
      {
        name: 'Voltorb',
        image: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_29-2x.png',
      },
    ],
  },
  {
    title: '🔥 FIRE',
    color: '#FF4500',
    data: [
      {
        name: 'Charmander',
        image: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_10-2x.png',
      },
      {
        name: 'Growlithe',
        image: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_17-2x.png',
      },
    ],
  },
  {
    title: '💧 WATER',
    color: '#00BFFF',
    data: [
      {
        name: 'Squirtle',
        image: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_23-2x.png',
      },
      {
        name: 'Psyduck',
        image: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_27-2x.png',
      },
    ],
  },
];

// Define renderItem function for individual Pokemon cards
const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card}>
      <Text style={styles.cardText}>{item.name}</Text>
      <Image source={{ uri: item.image }} style={styles.cardImage} />
    </TouchableOpacity>
);

// Define App component
const App = () => {
  const handleAddPokemon = () => {
    console.log('Add Pokemon button clicked!');
  };

  return (
      <View style={styles.container}>
        {/* Add Pokemon Button */}
        <View style={styles.buttonContainer}>
          <Button title="ADD POKEMON" onPress={handleAddPokemon} color="#007BFF" />
        </View>

        {/* SectionList for Pokemon */}
        <SectionList
            sections={datasource}
            renderItem={renderItem}
            keyExtractor={(item, index) => item.name + index}
            renderSectionHeader={({ section: { title, color } }) => (
                <View style={[styles.sectionHeader, { backgroundColor: color }]}>
                  <Text style={styles.sectionHeaderText}>{title}</Text>
                </View>
            )}
        />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  buttonContainer: {
    padding: 10,
    margin: 10,
  },
  sectionHeader: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionHeaderText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    marginHorizontal: 10,
    marginVertical: 5,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  cardText: {
    fontSize: 18,
    color: '#333',
    flex: 1,
  },
  cardImage: {
    width: 150, // Larger card image width
    height: 200, // Larger card image height
    marginLeft: 10,
    borderRadius: 5,
  },
});

export default App;
