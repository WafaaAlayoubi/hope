import React, {Component} from 'react';
import {Platform, StyleSheet, Text, TextInput,View, TouchableOpacity,Image,Button} from 'react-native';

export default class Login extends Component<Props> {

  state = {
    id: '',
    password: ''
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

      <Image style={[styles.forget]} source={require('../img/forgetDoctor/num1/FORGET.png')} />
      <Image style={[styles.logo]} source={require('../img/loginDoctor/num1/logo.png')} />

      </View>
    );
  }

}

const styles = StyleSheet.create({
  continue: {
    width:180.43,
    height:31.66,
    position: 'absolute',
    marginTop: 548,
    marginLeft:117
  },
  register: {
    width:107,
    height:30,
    position: 'absolute',
    marginTop: 483,
    marginLeft:101
  },
  dot2: {
    width:11,
    height:11,
    position: 'absolute',
    marginTop: 3,
    marginLeft:-21
  },
  forget: {
    width:107,
    height:15,
    position: 'absolute',
    marginTop: 458,
    marginLeft:101
  },
  dot1: {
    width:11,
    height:11,
    position: 'absolute',
    marginTop: 3,
    marginLeft:-21
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
  login: {
    width:62,
    height:20,
    position: 'absolute',
    marginTop: 44,
    marginLeft:176
  },
  logo: {
    width:168,
    height:61,
    position: 'absolute',
    marginTop: 162,
    marginLeft:123
  },
  textInput1: {
    fontSize: 20,
    width:295,
    color: 'grey',
    position: 'absolute',
    marginTop: 317,
    marginLeft:75
  },
  input1: {
    width:295,
    height:48,
    position: 'absolute',
    marginTop: 317,
    marginLeft:60
  },
  textInput2: {
    fontSize: 20,
    width:295,
    color: 'grey',
    position: 'absolute',
    marginTop: 388,
    marginLeft:75
  },
  input2: {
    width:295,
    height:48,
    position: 'absolute',
    marginTop: 390,
    marginLeft:60
  },

});
