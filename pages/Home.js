import React,{ useRef,useEffect } from 'react';
import { StatusBar,StyleSheet, Text, View,Image,Dimensions } from 'react-native';
import {Actions} from 'react-native-router-flux';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import { Container,  Tab,TabHeading, Tabs,Icon } from 'native-base';

import Tab1 	from '../pages/Promo';
import Tab2		from '../pages/Beranda';
import Tab3		from '../pages/Chat';

const screenHeight = Math.round(Dimensions.get('window').height);


//export default Home = (props) => {
export default class Home extends React.Component {
	constructor(props) {
        super(props);
		this.state = {
			isLocked:false
		}
		this.settablock = this.settablock.bind(this);
	}
	
	componentDidMount(){
		
	}
	
	settablock(x){
		//alert(x)
		this.setState({
				isLocked: x
			}, function(){
			});
			
	}

  render(){
  return (
	<View style={{flex: 1,flexDirection: 'column',backgroundColor:'#92F111'}}>
		<View style={{height:StatusBar.currentHeight}}>
			{
				/*just statusbar space*/
			}
		</View>
	
		<View style={{height:(screenHeight)}}>
			<Container  >
				<Tabs 
				locked={this.state.isLocked}
				tabBarUnderlineStyle={{ backgroundColor:'white',height:40,marginBottom:5,borderRadius:20,opacity: 0.7 }} 
				tabContainerStyle={{
				  elevation:0
				}}  
				initialPage={1}
				>
					<Tab heading={<TabHeading style={{backgroundColor: '#92F111',height:50}}><View><Icon name="ios-pricetag-outline" style={{color:'white',fontSize:20}}/></View><View><Text style={{color:'white',fontSize:15}}>Promo</Text></View></TabHeading>} tabStyle={{backgroundColor: '#92F111',height:50}} textStyle={{color: '#fff'}}  activeTabStyle={{backgroundColor: '#92F111'}}  >
						<Tab1 tabstatus={true} lockTab={this.settablock} 	/>
					</Tab>

					<Tab heading={<TabHeading style={{backgroundColor: '#92F111',height:50}}><View><Icon name="ios-home" style={{color:'white',fontSize:20}}/></View><View><Text style={{color:'white',fontSize:15}}>Beranda</Text></View></TabHeading>}  tabStyle={{backgroundColor: '#92F111'}} textStyle={{color: '#fff'}}  activeTabStyle={{backgroundColor: '#92F111'}}>
						<Tab2 tabstatus={false}  lockTab={this.settablock}	/>
					</Tab>

					<Tab  heading={<TabHeading style={{backgroundColor: '#92F111',height:50}}><View><Icon name="ios-chatbubbles" style={{color:'white',fontSize:20}}/></View><View><Text style={{color:'white',fontSize:15}}>Chat</Text></View></TabHeading>}  tabStyle={{backgroundColor: '#92F111'}} textStyle={{color: '#fff'}}  activeTabStyle={{backgroundColor: '#92F111'}}>
						<Tab3 tabstatus={false} lockTab={this.settablock} 	/>
					</Tab>
				</Tabs>
			</Container>
		</View>
	</View>
  )
  }
}


