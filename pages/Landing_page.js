import React,{ useRef,useEffect } from 'react';
import { StatusBar,StyleSheet, Text, View,Image,Dimensions,TouchableOpacity } from 'react-native';
import {Actions} from 'react-native-router-flux';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import { Container,  Tab,TabHeading, Tabs,Icon } from 'native-base';

const screenHeight = Math.round(Dimensions.get('window').height);

export default class Landing_page extends React.Component {
	constructor(props) {
        super(props);
		this.state = {
			title:props.title
		}
	}
	
	componentDidMount(){
		
	}
	
	

  render(){
	  return (
		<View style={{flex: 1,flexDirection: 'column',backgroundColor:'#ffffff'}}>
			<View style={{height:StatusBar.currentHeight}}>
				{
					/*just statusbar space*/
				}
			</View>
			<View style={{height:(screenHeight)}}>
				
					<TouchableOpacity onPress={()=>{Actions.pop()}}>
						<View style={{flexDirection:'row',backgroundColor:'#ffffff',borderBottomWidth:0.5,height:50,borderColor:'grey'}}>
							<Icon name="md-arrow-back" style={{color:'black',marginLeft:10,fontSize:25,marginTop:10}}  />
							<Text style={{fontSize:17,fontWeight:'bold',marginLeft:20,marginTop:10}}>{this.state.title}</Text>
						</View>
					</TouchableOpacity>
				
			</View>
		</View>
	  )
  }
}


