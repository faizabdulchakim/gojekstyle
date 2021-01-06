import React from 'react';
import { StyleSheet} from 'react-native';
import {Router, Stack, Scene} from 'react-native-router-flux';

import Home     from './pages/Home';

export default class App extends React.Component {
  constructor(props) {
    super();
  }

  componentDidMount(){
  }
  
  render() {
    return (
      <Router>
        <Stack key="root" hideNavBar={true} >
              <Scene    key="rootScene">
				<Scene key="Home" component={Home} hideNavBar={true}/>            
              </Scene>
        </Stack>
      </Router>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  imageView: {
		borderRadius : 7,
    fontSize:24,
    marginLeft:10,
  },
  listLeft:{
    marginLeft:0
  },
});
/*===============================================================================*/
/*
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
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