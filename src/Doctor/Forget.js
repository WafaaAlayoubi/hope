import React, {Component} from 'react';
import {Platform, StyleSheet, Text, TextInput,View, TouchableOpacity,Image,Button} from 'react-native';

export default class Forget extends Component<Props> {

  state = {
    id: ''
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

      <Image style={[styles.input]} source={require('../img/loginDoctor/num1/Rectangle123.png')} />
      <TextInput
        secureTextEntry
        placeholder="ID Number"
        autoCapitalize="none"
        style={styles.textInput}
        onChangeText={id => this.setState({ id })}
        value={this.state.id}/>

        <TouchableOpacity style={[styles.continue]}>
        <Image style={{width:180.43,height:31.66}} source={require('../img/forgetDoctor/num1/Continu.png')} />
        </TouchableOpacity>
    </View>
  );
}
}
const styles = StyleSheet.create({
  continue: {
    width:180.43,
    height:31.66,
    position: 'absolute',
    marginTop: 447,
    marginLeft:117
  },

  textInput: {
    fontSize: 20,
    color: 'grey',
    position: 'absolute',
    marginTop: 347,
    marginLeft:85
  },
  input: {
    width:295,
    height:48,
    position: 'absolute',
    marginTop: 344,
    marginLeft:60
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
  forget: {
    width:284,
    height:20,
    position: 'absolute',
    marginTop: 44,
    marginLeft:65
  },
  logo: {
    width:168,
    height:61,
    position: 'absolute',
    marginTop: 162,
    marginLeft:123
  },

})
