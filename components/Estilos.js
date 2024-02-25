// Estilos.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 50,
    backgroundColor: '#f0f0f0',
  },
  searchContainer: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  input: {
    flex: 1,
    marginRight: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    padding: 5,
    fontSize: 16,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 10,
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  message: {
    fontSize: 18,
    textAlign: 'center',
    color: 'red',
  },
});

export default styles;
