import React from 'react';
import { StyleSheet} from 'react-native';
import {Router, Stack, Scene} from 'react-native-router-flux';

import Home     from './pages/Home';
import Landing_page from './pages/Landing_page';

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
				<Scene key="Landing_page" component={Landing_page} hideNavBar={true}/>
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