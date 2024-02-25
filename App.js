// App.js
import React, { useState } from 'react';
import { View, TextInput, Button, Text, ScrollView, Image, ActivityIndicator } from 'react-native';
import { getUserInfo } from './components/funciones';
import styles from './components/Estilos';

const App = () => {
  const [userInput, setUserInput] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchHandler = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getUserInfo(userInput);
      setUserData(data);
      setUserInput('');
    } catch (error) {
      setError(error.message || 'Error al buscar usuario');
    }
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Introduce el nombre de usuario de GitHub ..."
          value={userInput}
          onChangeText={text => setUserInput(text)}
        />
        <Button title="Buscar" onPress={searchHandler} disabled={loading} />
      </View>
      {loading && <ActivityIndicator size="large" color="#333" />}
      {error && <Text style={styles.error}>{error}</Text>}
      {userData && (
        <ScrollView>
          <Image style={styles.image} source={{ uri: userData.avatar_url }} />
          <Text style={styles.title}>{userData.login}</Text>
          <Text style={styles.heading}>Nombre:</Text>
          <Text>{userData.name || 'No disponible'}</Text>
          <Text style={styles.heading}>Seguidores:</Text>
          <Text>{userData.followers}</Text>
          <Text style={styles.heading}>Siguiendo:</Text>
          <Text>{userData.following}</Text>
          <Text style={styles.heading}>Repositorios públicos:</Text>
          <Text>{userData.public_repos}</Text>
          <Text style={styles.heading}>Ubicación:</Text>
          <Text>{userData.location || 'No disponible'}</Text>
          <Text style={styles.heading}>Sitio web:</Text>
          <Text>{userData.blog || 'No disponible'}</Text>
        </ScrollView>
      )}
    </View>
  );
};

export default App;

