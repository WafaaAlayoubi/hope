import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity,Image,Button} from 'react-native';


export default class Booking extends Component<Props> {

  static navigationOptions = {
    header: null,
  }

  nav = () => {
    this.props.navigation.navigate('Profile');
  }

  render() {
    return (
      <View>
          <Image style={[styles.logo]} source={require('../img/choose/num1/logo.png')} />
          <Image style={[styles.welcome]} source={require('../img/choose/num1/WELCOME!.png')} />
          <Image style={[styles.text]} source={require('../img/choose/num1/text.png')} />

          <TouchableOpacity style={[styles.rec1]} onPress={() => this.props.navigation.navigate('FreeClinics')}>
            <Image style={{width:268.67,height:49}} source={require('../img/choose/num1/Rectangle1.png')} />
            <Image style={[styles.doctor]} source={require('../img/choose/num1/Freeclinics.png')} />
          </TouchableOpacity>

          <TouchableOpacity style={[styles.rec2]}>
            <Image style={{width:268.67,height:49}} source={require('../img/choose/num1/Rectangle1.png')} />
            <Image style={[styles.patient]} source={require('../img/choose/num1/Paidclinics.png')} />
          </TouchableOpacity>


          <Image style={[styles.copyRight]} source={require('../img/choose/num1/Copyright.png')} />
      </View>
    );
  }


}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },
  logo: {
    width:235,
    height:86,
    position: 'absolute',
    marginTop: 48,
    marginLeft:90
  },
  welcome: {
    width:180,
    height:30,
    position: 'absolute',
    marginTop: 178,
    marginLeft:117
  },
  text: {
    width:246,
    height:120,
    position: 'absolute',
    marginTop: 248,
    marginLeft:84
  },
  rec1: {
    width:268.67,
    alignItems: 'center',
    height:49,
    position: 'absolute',
    marginTop: 393,
    marginLeft:73
  },
  rec2: {
    width:268.67,
    alignItems: 'center',
    height:49,
    position: 'absolute',
    marginTop: 462,
    marginLeft:73
  },
  rec3: {
    alignItems: 'center',
    width:268.67,
    height:49,
    position: 'absolute',
    marginTop: 531,
    marginLeft:73
  },
  rec4: {
    alignItems: 'center',
    width:268.67,
    height:49,
    position: 'absolute',
    marginTop: 600,
    marginLeft:73
  },
  doctor: {
    width:98,
    height:20,
    position: 'absolute',
    marginTop: 17,
  },
  patient: {
    width:98,
    height:20,
    position: 'absolute',
    marginTop: 17,
  },
  appointment: {
    width:178,
    height:18,
    position: 'absolute',
    marginTop: 17,
  },
  tips: {
    width:106,
    height:18,
    position: 'absolute',
    marginTop: 17,
  },
  copyRight: {
    width:170,
    height:10,
    position: 'absolute',
    marginTop: 670,
    marginLeft:122
  },

});
