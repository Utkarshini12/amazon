import React from "react";
import {Platform, View, Text, StyleSheet, Button, Image, state,TouchableOpacity,TouchableNativeFeedback} from "react-native";
import {createStackNavigator, createAppContainer,createBottomTabNavigator, createDrawerNavigator} from "react-navigation";
import { DrawerActions } from 'react-navigation';

import { Avatar,CheckBox } from 'react-native-elements';


class Logo extends React.Component {

  

  render() {
    return (
      <Image source ={require('./Loginform/logo.png')}
      style={{width: 30, height: 30}}
      />
    )
  }
}
class MobNo extends React.Component {
  static navigationOptions =  {
  
  //: 'Campaign Management',
  //   // headerTitle: <Logo/>,
  //   headerRight: (
  //     <Button onPress={() => alert('Here is the info')}
  //     title= "Info" color="red"      
  //     />

  //   ),
  };
  
  state={
    checked:''
  }

  render(){
    return(
      <View style = {styles.container}>
      <Text style= {styles.font}>Mobile number: </Text>
      <Avatar 
      size="xlarge"
  title="LW"
  onPress={() => console.log("Works!")}
  activeOpacity={0.7}
  rounded
  source={{
    uri:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
  }}
/>


          
          
      <Button title="Submit"  onPress ={() => this.props.navigation.navigate('Voter')}/>
      <Text>Don't have an account?</Text>
      <CheckBox
  center
  title='Click Here to Remove This Item'
  iconRight
  iconType='material'
  checkedIcon='clear'
  uncheckedIcon='add'
  checkedColor='red'
  checked={this.state.checked}
/>

      <Button title= "Register" onPress= {() => this.props.navigation.navigate('CompleteReg')}/>
      <Button title= "How to do Door to Door Campaign" onPress= {() => this.props.navigation.navigate('Dtd')}/>
      <Button title= "Training Video to use Campaign Managment " onPress= {() => this.props.navigation.navigate('Video')}/>
     
      
      </View>
    );
  }
}

  





//Page1.2 door to door
class DoortoDoor extends React.Component {
  static navigationOptions = {
    title: 'D2D',
  }
  render(){
    return(
      <View style={styles.dtd}>
      <Text>Here is how you can do Door to Door Campaign: </Text>
      </View>
    );
  }
}

//page 1.3 training video

class VideoScreen extends React.Component {
  static navigationOptions= {
    title: 'Traning Video'
  }
  render(){
    return(
      <View style={styles.video}>
      <Text>
      Play the video to understand: 
      </Text>
      </View>
    )
  }
}








//Page2 new registeration
class Registeration extends React.Component {
  static navigationOptions = {
    title: 'Register',
  };
  render(){
    return(
      <View style = {styles.registeration}>
      <Button title="SELECT STATE"/>
      <Button title="SELECT PARLIAMENT"/>
      <Button title="SELECT ASSEMBLY"/>
      <Button title = "SELECT LEADER"/>
      <Text style= {styles.font2}>
      Enter your name:
      </Text>
      <Text>
      Enter your mobile number:
      </Text>
      <Button title="Submit" onPress ={() => this.props.navigation.navigate('Voter')}/>
      </View>
      
    );
  }
}






//page3 qr code
class VoterDetails extends React.Component {
  static navigationOptions= {
    title: 'Voter'
  }

  render(){
    return(
      //add camera
      <View>
      <Text>Voter Name</Text>
      <Text>Voter Mobile Number</Text>
      <Text>Local Issues</Text>
      <Text>Scan QR Code</Text>
      
      <Button title="SCAN" />
      <Button title= "Submit" onPress ={() =>  this.props.navigation.navigate('Location')} />
      <Text>* Post pictures of D2D in Social Media with #IYC D2D
      * Kindly sync all data after Submitting.
      * Points to talk :
        - NYAY - 72000 / year for Poor Households.
        - Congress is a party for everyone not for the rich.
        - Job Losses
        - Poor Growth
        - Demonitisation
        - GST
        - Farm Loan Waiver
      </Text> 
      </View>

      
    );
  }
}



// page 3.1 location
class StoreLocation extends React.Component {
  static navigationOptions ={
    title: 'Form'
  }

  render() {
    return(
      <View>
      <Text>Enter Age: </Text>
      <Text>Enter Hobbies: </Text>
      <Text>Enter Mobile Number: </Text>
      <Text>Record Location: </Text>
      <Button title= 'Submit'/>
      </View>

    );
  }
}



class VoterProfile extends React.Component {
  static navigationOptions= {
    title: 'Profile'
  }
  render(){
    return(
      <View style={styles.video}>
      <Text>
      Profile Details: 
      </Text>
      </View>
    )
  }
}

class VoterDataList extends React.Component {
  static navigationOptions= {
    title: 'Data List'
  }
  render(){
    return(
      <View style={styles.video}>
      <Text>
      Data List 
      </Text>
      </View>
    )
  }
}


class ChangeLang extends React.Component {
  static navigationOptions= {
    title: 'Change Language'
  }
  render(){
    return(
      <View style={styles.video}>
      <Text>
      Choose the preferred language: 
      </Text>
      </View>
    )
  }
}
class Leader extends React.Component {
  static navigationOptions= {
    title: 'Leader Details'
  }
  render(){
    return(
      <View style={styles.video}>
      <Text>
      Present Leader: 
      </Text>
      <Text>
      Choose any other Leader: 
      </Text>
      </View>
    )
  }
}

class Performance extends React.Component {
  static navigationOptions= {
    title: 'Performance Sheet'
  }
  render(){
    return(
      <View style={styles.video}>
      <Text>
      Performance Details: 
      </Text>
      </View>
    )
  }
}

class Download extends React.Component {
  static navigationOptions= {
    title: 'Phamphlet'
  }
  render(){
    return(
      <View style={styles.video}>
      <Button title=
      'Press here to download the Phamphlet:' />
      
      </View>
    )
  }
}

class Pp extends React.Component {
  static navigationOptions= {
    title: 'Privacy Policy'
  }
  render(){
    return(
      <View style={styles.video}>
      <Text style={{flex:1, fontWeight: 'bold'}}>
      Privacy Policy
      </Text>
      </View>
    )
  }
}

class Lg extends React.Component {
  static navigationOptions= {
    title: 'LogOut'
  }
  render(){
    return(
      <View style={styles.video}>
      <Button title=
      'Log out'/> 
      
      </View>
    )
  }
}




const tabs = createBottomTabNavigator({

  EnterMobNo:{
    screen:MobNo,
    navigationOptions:{
      tabBarTitle:'welcome'
    },
    headerStyle:{
      backgroundColor:'red',
      color:'red',
      borderWidth:1
    }
  } 
  
  ,
  CompleteReg: Registeration,


});

 
const ChangeScreen = createStackNavigator ({
  Tabs: tabs,
  EnterMobNo: MobNo,
  Voter: VoterDetails,
  CompleteReg: Registeration,
  Dtd: DoortoDoor,
  Video: VideoScreen,
  Location: StoreLocation,

  
 
},

);


const Drawer =  createDrawerNavigator({
  Stack: ChangeScreen,
  Tabs: tabs,
  
  Profile: VoterProfile,
  DataList: VoterDataList,
  ChangeLanguage: ChangeLang,
  Leader: Leader,
  Performance: Performance,
  DownloadPhamphlet: Download,
  PrivacyPolicy: Pp,
  LogOut: Lg,


});













// css styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF', 
    borderWidth: 1
  },
  font: {
    color: 'green',
    fontWeight: 'bold',

  },
  font2: {

    color: 'green',
    fontWeight: 'bold',

  },

});

export default createAppContainer(Drawer);

