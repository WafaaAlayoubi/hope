import React, {Component} from 'react';
import {Platform, StyleSheet, Text, TextInput,View, TouchableOpacity,Image,Button} from 'react-native';


export default class Signup extends Component<Props> {

  state = {
    pname1: 'Wafaa',
    pname2: 'shahed',
    dateOfBirth1: '11/7/1997',
    dateOfBirth2: '22/7/1990',
    discription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.'

  }

  static navigationOptions = {
    header: null,
  }

  render() {
    return (
      <View>
        <Image style={[styles.header]} source={require('../img/loginDoctor/num1/NavigationBar3.png')} />

        <TouchableOpacity style = {[styles.back]} onPress={() => this.props.navigation.navigate('Profile')}>
          <Image style={{width:9.45,height:16}} source={require('../img/loginDoctor/num1/Backwardarrow.png')} />
        </TouchableOpacity>

        <Image style={[styles.view]} source={require('../img/viewPatients/drawable-hdpi/ViewPatients.png')} />

        <View style={[styles.listBack1]}>
        <Image  style={{width:357.82,height:96.16}} source={require('../img/viewPatients/drawable-hdpi/Rectangle1470.png')} />
        <Image  style={{
          width:29.07,
          height:29.07,
          position: 'absolute',
        marginTop: 5,
        marginLeft:33}} source={require('../img/viewPatients/drawable-hdpi/5142.png')} />
        <Text style={[styles.textName]}>{this.state.pname1}</Text>
        <Text style={[styles.textName2]}>{this.state.dateOfBirth1}</Text>
        <Text style={[styles.textName3]}>{this.state.discription}</Text>
        </View>

        <View style={[styles.listBack2]}>
        <Image  style={{width:357.82,height:96.16}} source={require('../img/viewPatients/drawable-hdpi/Rectangle1470.png')} />
        <Image  style={{
          width:29.07,
          height:29.07,
          position: 'absolute',
        marginTop: 5,
        marginLeft:33}} source={require('../img/viewPatients/drawable-hdpi/5142.png')} />
        <Text style={[styles.textName]}>{this.state.pname2}</Text>
        <Text style={[styles.textName2]}>{this.state.dateOfBirth2}</Text>
        <Text style={[styles.textName3]}>{this.state.discription}</Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  textName3: {
    fontSize: 11,
    marginTop: 10,
    marginLeft: 40,
    color: '#E666A4'
  },
  textName: {
    fontSize: 15,
    marginTop: -94,
    marginLeft: 72.68,

  },
  textName2: {
    fontSize: 11,
    marginTop: 2,
    marginLeft: 72.68,

  },
  listBack1: {
    width:357.82,
    height:96.16,
    position: 'absolute',
    marginTop: 108,
    marginLeft:28
  },
  listBack2: {
    width:357.82,
    height:96.16,
    position: 'absolute',
    marginTop: 225,
    marginLeft:28
  },

  header: {
    width:414,
    height:70,
    position: 'absolute',
    marginTop: 0,
    marginLeft:0
  },
  back: {
    width:20,
    height:20,
    position: 'absolute',
    marginTop: 43,
    marginLeft:36
  },
  view: {
    width:120,
    height:20,
    position: 'absolute',
    marginTop: 37,
    marginLeft:147
  },
})
