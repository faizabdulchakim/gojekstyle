import React,{ useRef,useEffect } from 'react';
import { StatusBar,StyleSheet, Text, View,Image,Dimensions ,ScrollView,TouchableOpacity,ImageBackground,TouchableWithoutFeedback} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import {Button,Container, Header, InputGroup, Input, Icon,Content, Card, CardItem} from 'native-base';

const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidth = Math.round(Dimensions.get('window').width);

export default class Promo extends React.Component {
	constructor(props) {
        super(props);
		this.state = {
			contentGesture:false,
			bottomsheetpos:'top'
        }
		this.handlescroll			= this.handlescroll.bind(this);
		this.onOpenEnd_				= this.onOpenEnd_.bind(this);
		this.activesheetbtm_		= this.activesheetbtm_.bind(this);
		this.handleInnerPressIn_	= this.handleInnerPressIn_.bind(this);
		this.handleInnerPressOut_	= this.handleInnerPressOut_.bind(this);
		this.pressHandle_			= this.pressHandle_.bind(this);
	}
	
	componentDidMount(){
		//alert(this.props.lockTab);
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
	
	handleInnerPressIn_(){
		this.props.lockTab(true);
	}
	handleInnerPressOut_(){
		this.props.lockTab(false);
	}
	pressHandle_(parameter){
		var param_ = {"title":parameter}
		Actions.Landing_page(param_);
	}
	

	renderContent(){
		return(
			<View>
				<ScrollView
					style={{
					backgroundColor: 'white',
					padding: 16,
					minHeight: screenHeight-50,
					borderTopWidth:0,
					flexGrow: 1,
					backgroundColor:'white'
					}}
					contentContainerStyle={{ paddingBottom: 60 }}
					onScrollEndDrag={this.handlescroll_}
				>

							
							
							
							
							
							
							
							
							<Card  transparent >
								<CardItem style={{
									paddingLeft: 0,
									paddingRight: 0,
									paddingTop: 0,
									paddingBottom: 0}}
							   >
									<Text style={styles.headerCard}>Promo buat kamu</Text>
								</CardItem>
							</Card>
							<Card  transparent >
								<CardItem style={[styles.verticalcard,{backgroundColor:'#aabbcc'}]}>
									<TouchableOpacity onPress={()=>this.pressHandle('Promo 1')}>
										<Text>Promo 1</Text>
									</TouchableOpacity>
								</CardItem>
								<CardItem style={[styles.verticalcard,{backgroundColor:'#bbccaa'}]}>
									<TouchableOpacity onPress={()=>this.pressHandle('Promo 2')}>
										<Text>Promo 2</Text>
									</TouchableOpacity>
								</CardItem>
								<CardItem style={[styles.verticalcard,{backgroundColor:'#ccaabb'}]}>
									<TouchableOpacity onPress={()=>this.pressHandle('Promo 3')}>
										<Text>Promo 3</Text>
									</TouchableOpacity>
								</CardItem>
								<CardItem style={[styles.verticalcard,{backgroundColor:'#abcabc'}]}>
									<TouchableOpacity onPress={()=>this.pressHandle('Promo 4')}>
										<Text>Promo 4</Text>
									</TouchableOpacity>
								</CardItem>
								<CardItem style={[styles.verticalcard,{backgroundColor:'#bcabca'}]}>
									<TouchableOpacity onPress={()=>this.pressHandle('Promo 5')}>
										<Text>Promo 5</Text>
									</TouchableOpacity>
								</CardItem>
								<CardItem style={[styles.verticalcard,{backgroundColor:'#cabcab'}]}>
									<TouchableOpacity onPress={()=>this.pressHandle('Promo 6')}>
										<Text>Promo 6</Text>
									</TouchableOpacity>
								</CardItem>
							</Card>

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
					handleInnerPressIn={this.handleInnerPressIn_}
					handleInnerPressOut={this.handleInnerPressOut_}
					pressHandle={this.pressHandle_}
					
					
					onOpenStart={this.onOpenStart_}
					onOpenEnd={this.onOpenEnd_}
					onCloseStart={this.onCloseStart_}
					onCloseEnd={this.onCloseEnd_}
					/>
				
			</View>
		)
	}
}

const styles = {
	generalCard:{
		width:200,
		height:150,
		borderRadius:10
	},
	headerCard:{
		fontSize:14,
		fontWeight:'bold'
	},
	verticalcard:{
		paddingLeft: 0,
		paddingRight: 0,
		paddingTop: 0,
		paddingBottom: 0,
		backgroundColor:'grey',
		width:'100%',
		height:150,
		borderRadius:10,
		marginTop:10,
		justifyContent: 'center'
	},
	trioIcon:{
		fontSize:15,
		marginTop:10,
		color:'white'
	},
	trioIcon_:{
		textAlign:'center',
		color:'white',
		fontSize:12
	}
};


