import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  const [selectedGame, setSelectedGame] = useState('');

  const games = [
    {
      title: 'Indihome',
      src: 'https://tse3.mm.bing.net/th?id=OIP.0Jc9dihFqkPfmin2V79mIwHaHA&pid=Api&P=0&h=180',
    },
    {
      title: 'Grap',
      src: 'https://tse3.mm.bing.net/th?id=OIP.x0s7gjfQmJjKMXtIO_1JFgHaEj&pid=Api&P=0&h=180',
    },
    {
      title: 'Shopee food',
      src: 'https://tse1.mm.bing.net/th?id=OIP.alHziPmev8RwX5InE6rcHgHaHa&pid=Api&P=0&h=180',
    },
    {
      title: 'Maxim',
      src: 'https://tse2.mm.bing.net/th?id=OIP.EdFOAxY6R058Yi2rPSnz0gHaHa&pid=Api&P=0&h=180',
    },
    {
      title: 'Gojek',
      src: 'https://tse4.mm.bing.net/th?id=OIP.rY21r8lsbZX_OBHpbzfVGQHaJQ&pid=Api&P=0&h=180',
    },
    {
      title: 'Dana',
      src: 'https://tse1.mm.bing.net/th?id=OIP.KXm2DDj6N9aT_kcqRJp4YAAAAA&pid=Api&P=0&h=180',
    },
    {
      title: 'Gopay',
      src: 'https://tse2.mm.bing.net/th?id=OIP.NDyXxvrwrydLrOflNnFbkgHaFj&pid=Api&P=0&h=180',
    },
    {
      title: 'Disney + hotstar',
      src: 'https://play-lh.googleusercontent.com/b6Vea8UJ1CUSAt2mgBNLJeQhMp7HJXteJPHczhxpiK7JwSWTfQcIxrAVVAyPjNzo8A',
    },
  ];

  const handleGamePress = (title: string) => {
    setSelectedGame(title);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
            marginBottom: 15
        }}>
          <Text style={{
              fontSize: 30,
              fontWeight: 'bold'
          }}>TOP UP</Text>
        </View>
        <View style={styles.gameContainer}>
          {games.map((game) => (
            <TouchableOpacity
              key={game.title}
              style={[styles.gameCard, selectedGame === game.title && styles.selectedCard]}
              onPress={() => handleGamePress(game.title)}>
              <Image source={{ uri: game.src }} style={styles.gameImage} />
              <Text style={styles.gameTitle}>{game.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    padding: 10,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#181818',
  },
  gameContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gameCard: {
    width: '48%',
    marginBottom: 20,
    backgroundColor: '#6495ed',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  selectedCard: {
    backgroundColor: '#00ffff',
  },
  gameImage: {
    width: '100%',
    height: 150,
    marginBottom: 10,
    borderRadius: 10,
  },
  gameTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 5,
  },
  gameProvider: {
    fontSize: 12,
    color: '#FFF',
  },
  button: {
    width: '48%',
    padding: 15,
    backgroundColor: '#00bcd4',
    borderRadius:10,
    marginBottom: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});

export default App;