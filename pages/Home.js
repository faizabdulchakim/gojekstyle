import React,{ useRef,useEffect } from 'react';
import { StatusBar,StyleSheet, Text, View,Image,Dimensions } from 'react-native';
import {Actions} from 'react-native-router-flux';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import { Container,  Tab, Tabs } from 'native-base';

import Tab1 	from '../pages/Promo';
import Tab2		from '../pages/Beranda';
import Tab3		from '../pages/Chat';

const screenHeight = Math.round(Dimensions.get('window').height);


export default Home = (props) => {

  
  return (
	<View style={{flex: 1,flexDirection: 'column',backgroundColor:'red'}}>
		<View style={{height:StatusBar.currentHeight}}>
			{
				/*just statusbar space*/
			}
		</View>
	
		<View style={{height:(screenHeight)}}>
			<Container>
				<Tabs   >
					<Tab heading="Promo" tabStyle={{backgroundColor: '#35c4f9'}} textStyle={{color: '#fff'}}  activeTabStyle={{backgroundColor: '#104883'}}  >
						<Tab1 tabstatus={true} 	/>
					</Tab>

					<Tab heading="Home" tabStyle={{backgroundColor: '#35c4f9'}} textStyle={{color: '#fff'}}  activeTabStyle={{backgroundColor: '#104883'}}>
						<Tab2 tabstatus={false} 	/>
					</Tab>

					<Tab heading="Chat" tabStyle={{backgroundColor: '#35c4f9'}} textStyle={{color: '#fff'}}  activeTabStyle={{backgroundColor: '#104883'}}>
						<Tab3 tabstatus={false} 	/>
					</Tab>
				</Tabs>
			</Container>
		</View>
	</View>
  )
  
}


