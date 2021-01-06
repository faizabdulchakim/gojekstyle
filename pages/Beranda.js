import React,{ useRef,useEffect } from 'react';
import { StatusBar,StyleSheet, Text, View,Image,Dimensions ,ScrollView,TouchableOpacity,ImageBackground,TouchableWithoutFeedback} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import {Button,Container, Header, InputGroup, Input, Icon,Content, Card, CardItem} from 'native-base';

const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidth = Math.round(Dimensions.get('window').width);

export default class Beranda extends React.Component {
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

							<InputGroup style={{borderBottomWidth:0}}>
								<Icon name="ios-search" style={{backgroundColor:'#D9D9D9',height:40,fontSize:20,padding:10,borderBottomLeftRadius:20,borderTopLeftRadius:20,color:'grey'}}/>
								<Input placeholder="Search" style={{height:40,fontSize:15,padding:10,backgroundColor:'#D9D9D9',borderBottomRightRadius:20,borderTopRightRadius:20}} />
								<Icon name="ios-people" style={{color:'green'}} />
							</InputGroup>
							<Card  transparent style={{marginTop:15}} >
								<CardItem style={{backgroundColor:'#abcabc',borderRadius:10}}>                        
									<View style={{flexDirection:'row'}}>
										<View style={{flex:2,backgroundColor:'white',borderRadius:5}}>
											<Text style={{fontWeight:'bold',marginLeft:10,fontSize:15,marginTop:10}}><Icon name="ios-wallet" style={{fontSize:15,color:'green',marginTop:10}} />Saldo</Text>
											<Text style={{fontWeight:'bold',marginLeft:10,fontSize:16}}>Rp 10.000</Text>
											<Text  style={{fontWeight:'bold',marginLeft:10,fontSize:10,color:'green',marginBottom:10}}>Klik & Check riwayat</Text>
										</View>
										<View style={{flex:1,justifyContent: 'center'}}>
											<Text style={styles.trioIcon_}><Icon name="ios-cloud-upload-outline" style={styles.trioIcon} /></Text>
											<Text style={styles.trioIcon_}>Bayar</Text>
										</View>
										<View style={{flex:1,justifyContent: 'center'}}>
											<Text style={styles.trioIcon_}><Icon name="ios-add-circle-outline" style={styles.trioIcon} /></Text>
											<Text style={styles.trioIcon_}>Topup</Text>
										</View>
										<View style={{flex:1,justifyContent: 'center'}}>
											<Text style={styles.trioIcon_}><Icon name="ios-code-working-outline" style={styles.trioIcon} /></Text>
											<Text style={styles.trioIcon_}>Explor</Text>
										</View>
									</View>
								</CardItem>
							</Card>
							<Card  transparent >
								<CardItem style={{
									paddingLeft: 0,
									paddingRight: 0,
									paddingTop: 0,
									paddingBottom: 0}}
							   >
									<Text style={styles.headerCard}>Konten Buat Kamu</Text>
								</CardItem>
							</Card>
							<Card transparent>
								<CardItem 
									style={{
									paddingLeft: 0,
									paddingRight: 0,
									paddingTop: 0,
									paddingBottom: 0}} 
								>
									<ScrollView
									
									horizontal={true}
									showsHorizontalScrollIndicator={false}
									nestedScrollEnable={true}
									>
										<TouchableWithoutFeedback
										onPressIn={this.handleInnerPressIn}
										onPressOut={this.handleInnerPressOut}
										>
										<View style={{flexDirection:'row'}}>
											<Card  transparent >
												<CardItem  style={[styles.generalCard,{backgroundColor:'#FEE7B4'}]} >
													<Text>
													Hold & Swipe left-right
													</Text>
												</CardItem>
											</Card>
											<Card  transparent >
												<CardItem  style={[styles.generalCard,{backgroundColor:'#FECE5F'}]} >
													<Text>
													2
													</Text>
												</CardItem>
											</Card>
											<Card  transparent >
												<CardItem  style={[styles.generalCard,{backgroundColor:'#FEE7B4'}]} >
													<Text>
													3
													</Text>
												</CardItem>
											</Card>
											<Card  transparent >
												<CardItem  style={[styles.generalCard,{backgroundColor:'#FECE5F'}]} >
													<Text>
													4
													</Text>
												</CardItem>
											</Card>
											<Card  transparent >
												<CardItem  style={[styles.generalCard,{backgroundColor:'#FEE7B4'}]} >
													<Text>
													5
													</Text>
												</CardItem>
											</Card>
											<Card  transparent >
												<CardItem  style={[styles.generalCard,{backgroundColor:'#FECE5F'}]} >
													<Text>
													6
													</Text>
												</CardItem>
											</Card>
											<Card  transparent >
												<CardItem  style={[styles.generalCard,{backgroundColor:'#FEE7B4'}]} >
													<Text>
													7
													</Text>
												</CardItem>
											</Card>
											<Card  transparent >
												<CardItem  style={[styles.generalCard,{backgroundColor:'#FECE5F'}]} >
													<Text>
													8
													</Text>
												</CardItem>
											</Card>
											<Card  transparent >
												<CardItem  style={[styles.generalCard,{backgroundColor:'#FEE7B4'}]} >
													<Text>
													9
													</Text>
												</CardItem>
											</Card>
											
											
											
											
										</View>
										</TouchableWithoutFeedback>
									</ScrollView>
								</CardItem>
							</Card>
							
							
							
							
							<Card  transparent >
								<CardItem style={{
									paddingLeft: 0,
									paddingRight: 0,
									paddingTop: 0,
									paddingBottom: 0}}
							   >
									<Text style={styles.headerCard}>Biar kamu nyaman</Text>
								</CardItem>
							</Card>
							<Card  transparent >
								<CardItem style={[styles.verticalcard,{backgroundColor:'#aabbcc'}]}>
									<Text>Lorem ipsum</Text>
								</CardItem>
								<CardItem style={[styles.verticalcard,{backgroundColor:'#bbccaa'}]}>
									<Text>Lorem ipsum</Text>
								</CardItem>
								<CardItem style={[styles.verticalcard,{backgroundColor:'#ccaabb'}]}>
									<Text>Lorem ipsum</Text>
								</CardItem>
								<CardItem style={[styles.verticalcard,{backgroundColor:'#abcabc'}]}>
									<Text>Lorem ipsum</Text>
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


