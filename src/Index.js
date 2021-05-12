/* import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button,} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import api from './services/api';

export default function App() {
  state = {
    errorMessage: null,
  }




  signIn = async () => {
    try {
    const response = await api.post('/sessions', {
      email: 'gsvieira98@gmail.com.br',
      password: '123456'
    });

    const { user, token } = response.data;

    await AsyncStorage.multiSet([
      ['@codeApi:token', token],
      ['@codeApi:user', JSON.stringify(user)],
    ]);
  
  } catch (err){
    this.setState({ errorMessage: response.data.error })
  }
  };
  return (
    <View style={styles.container}>
      {!!this.state.errorMessage && <text>{this.state.errorMessage}</text>}
      <Button onPress = {this.signIn} title = "Entrar" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 */


import React from 'react';

import Routes from './routes';

const App = () => <Routes />;

export default App;