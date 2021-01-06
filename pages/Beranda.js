import React,{ useRef,useEffect } from 'react';
import { StatusBar,StyleSheet, Text, View,Image,Dimensions ,ScrollView,TouchableOpacity,ImageBackground} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import {Button} from 'native-base';

const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidth = Math.round(Dimensions.get('window').width);

export default class Beranda extends React.Component {
	constructor(props) {
        super(props);
		this.state = {
			contentGesture:false,
			bottomsheetpos:'top'
        }
		this.handlescroll		= this.handlescroll.bind(this);
		this.onOpenEnd_			= this.onOpenEnd_.bind(this);
		this.activesheetbtm_	= this.activesheetbtm_.bind(this);
		
	}
	
	componentDidMount(){
		//alert(screenHeight);
	}
	
	handlescroll(event){
		if(parseInt(event.nativeEvent.contentOffset.y)==0){
			this.setState({
				contentGesture: true
			}, function(){
			});
		}
	}
	
	
	onOpenEnd_(){
		this.setState({
			contentGesture: false
		}, function(){
		});
	}
	
	activesheetbtm_(){
		this.setState({
			contentGesture: true
		}, function(){
		});
	}
	

	renderContent(){
		return(
			<View>
			
		
			<ScrollView
			style={{
			backgroundColor: 'white',
			padding: 16,
			height: screenHeight-50,
			borderTopWidth:0
			}}
			onScrollEndDrag={this.handlescroll_}
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
			</View>
		)
	}
  
	//const sheetRef = React.useRef(null);
	render(){
		return (
			<View style={{flex:1}}>
				<ImageBackground source={require('../assets/bg_home.png')} style={{width:screenWidth,height:screenHeight}}>
				</ImageBackground>
					<BottomSheet	
					snapPoints={[screenHeight-50,(screenHeight/3)]}
					borderRadius={20}
					renderContent={this.renderContent}
					enabledInnerScrolling={true}
					enabledContentGestureInteraction={this.state.contentGesture}
					handlescroll_={this.handlescroll}
					activesheetbtm={this.activesheetbtm_}
					
					onOpenStart={this.onOpenStart_}
					onOpenEnd={this.onOpenEnd_}
					onCloseStart={this.onCloseStart_}
					onCloseEnd={this.onCloseEnd_}
					/>
				
			</View>
		)
	}
}


