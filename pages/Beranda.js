import React,{ useRef,useEffect } from 'react';
import { StatusBar,StyleSheet, Text, View,Image,Dimensions ,ScrollView} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';

export default class Chat extends React.Component {
	renderContent(){
		return(

		
			<ScrollView
			style={{
			backgroundColor: 'green',
			padding: 16,
			height: 450,
			}}
			>
			<Text>Swipe down to close</Text>
			<Text>Swipe down to close</Text>
			<Text>Swipe down to close</Text>
			<Text>Swipe down to close</Text>
			<Text>Swipe down to close</Text>
			<Text>Swipe down to close</Text>
			<Text>Swipe down to close</Text>
			<Text>Swipe down to close</Text>
			<Text>Swipe down to close</Text>
			<Text>Swipe down to close</Text>
			<Text>Swipe down to close</Text>
			<Text>Swipe down to close</Text>
			<Text>Swipe down to close</Text>
			<Text>Swipe down to close</Text>
			<Text>Swipe down to close</Text>
			<Text>Swipe down to close</Text>
			<Text>Swipe down to close</Text>
			<Text>Swipe down to close</Text>
			<Text>Swipe down to close</Text>
			<Text>Swipe down to close</Text>
			<Text>Swipe down to close</Text>
			<Text>Swipe down to close</Text>
			<Text>Swipe down to close</Text>
			<Text>Swipe down to close</Text>
			<Text>Swipe down to close</Text>
			<Text>Swipe down to close</Text>
			<Text>Swipe down to close</Text>
			<Text>Swipe down to close</Text>
			<Text>Swipe down to close</Text>
			<Text>Swipe down to close</Text>
			<Text>Swipe down to close</Text>
			<Text>Swipe down to close</Text>
			<Text>Swipe down to close</Text>
			<Text>Swipe down to close</Text>
			<Text>Swipe down to close</Text>
			<Text>Swipe down to close</Text>
			<Text>Swipe down to close</Text>
			<Text>Swipe down to close</Text>
			<Text>Swipe down to close</Text>
			<Text>Swipe down to close</Text>
			<Text>Swipe down to close</Text>
			<Text>Swipe down to close</Text>
			<Text>Swipe down to close</Text>
			<Text>Swipe down to close</Text>
			<Text>Swipe down to close</Text>
			<Text>Swipe down to close</Text>
			<Text>Swipe down to close</Text>
			<Text>Swipe down to close</Text>
			<Text>Swipe down to close</Text>
			<Text>Swipe down to close</Text>
			<Text>Swipe down to close</Text>
			<Text>Swipe down to close</Text>
			<Text>Swipe down to close</Text>
			<Text>Swipe down to close</Text>
			<Text>Swipe down to close</Text>
			<Text>Swipe down to close</Text>
			<Text>Swipe down to close</Text>
			<Text>Swipe down to close</Text>
			<Text>Swipe down to close</Text>
			<Text>Swipe down to close</Text>
			<Text>Swipe down to close</Text>
			<Text>Swipe down to close</Text>
			<Text>Swipe down to close</Text>
			<Text>Swipe down to close</Text>
			<Text>Swipe down to close</Text>
			<Text>Swipe down to close</Text>
			<Text>Swipe down to close</Text>
			<Text>Swipe down to close</Text>
			<Text>Swipe down to close</Text>
			<Text>Swipe down to close</Text>
			<Text>Swipe down to close</Text>
			<Text>Swipe down to close</Text>
			<Text>Swipe down to close</Text>
			<Text>Swipe down to close</Text>
			<Text>Swipe down to close</Text>
			<Text>Swipe down to close</Text>
			<Text>Swipe down to close</Text>
			<Text>Swipe down to close</Text>
			<Text>Swipe down to close</Text>
			<Text>Swipe down to close</Text>
			<Text>Swipe down to close</Text>
			<Text>Swipe down to close</Text>
			<Text>Swipe down to close</Text>
			<Text>Swipe down to close</Text>
			<Text>Swipe down to close</Text>
			<Text>Swipe down to close</Text>
			<Text>Swipe down to close</Text>
			<Text>Swipe down to close</Text>
			<Text>Swipe down to close</Text>
			<Text>Swipe down to close</Text>
			<Text>Swipe down to close</Text>
			<Text>Swipe down to close</Text>
			</ScrollView>

		)
	}
  
	//const sheetRef = React.useRef(null);
	render(){
	return (
		<BottomSheet	
		snapPoints={[700, 300, 100]}
		borderRadius={10}
		renderContent={this.renderContent}
		enabledInnerScrolling={true}
		enabledContentGestureInteraction={false}
		/>	
	)
	}
}


