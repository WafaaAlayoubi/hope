import React, {Component} from 'react';
import {Platform, StyleSheet, Text, TextInput,View, TouchableOpacity,Image,Button} from 'react-native';

export default class Signup extends Component<Props> {

  state = {
    id: '',
    username: '',
    Specialization: '',
    Phone: '',
    Birth: '',
    gender: '',
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
        <Image style={[styles.signup]} source={require('../img/signupDoctor/num1/SIGNUP.png')} />
        <Image style={[styles.logo]} source={require('../img/loginDoctor/num1/logo.png')} />

        <Image style={[styles.input1]} source={require('../img/signupDoctor/num1/Path214.png')} />
        <TextInput
          placeholder="ID Number"
          autoCapitalize="none"
          style={styles.textInput1}
          onChangeText={id => this.setState({ id })}
          value={this.state.id}/>

          <Image style={[styles.input2]} source={require('../img/signupDoctor/num1/Path214.png')} />
          <TextInput
            placeholder="User Name"
            autoCapitalize="none"
            style={styles.textInput2}
            onChangeText={username => this.setState({ username })}
            value={this.state.username}/>

            <Image style={[styles.input3]} source={require('../img/signupDoctor/num1/Path214.png')} />
            <TextInput
              placeholder="Specialization"
              autoCapitalize="none"
              style={styles.textInput3}
              onChangeText={Specialization => this.setState({ Specialization })}
              value={this.state.Specialization}/>
            <Image style={[styles.drop]} source={require('../img/signupDoctor/num1/Drop.png')} />

            <Image style={[styles.input4]} source={require('../img/signupDoctor/num1/Path214.png')} />
            <TextInput
              placeholder="Phone"
              autoCapitalize="none"
              style={styles.textInput4}
              onChangeText={Phone => this.setState({ Phone })}
              value={this.state.Phone}/>

              <Image style={[styles.input5]} source={require('../img/signupDoctor/num1/Path214.png')} />
              <TextInput
                placeholder="Date of Birth"
                autoCapitalize="none"
                style={styles.textInput5}
                onChangeText={Birth => this.setState({ Birth })}
                value={this.state.Birth}/>
              <Image style={[styles.birth]} source={require('../img/signupDoctor/num1/calendar.png')} />

              <Image style={[styles.input6]} source={require('../img/signupDoctor/num1/Path214.png')} />
              <TextInput
                placeholder="Gender"
                autoCapitalize="none"
                style={styles.textInput6}
                onChangeText={gender => this.setState({ gender })}
                value={this.state.gender}/>
              <Image style={[styles.drop2]} source={require('../img/signupDoctor/num1/Drop.png')} />

              <TouchableOpacity style={[styles.continue]}>
              <Image style={{width:180.43,height:31.66}} source={require('../img/signupDoctor/num1/Cont.png')} />
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
    marginTop: 618,
    marginLeft:117
  },
  textInput6: {
    fontSize: 15,
    width:295,
    color: 'grey',
    position: 'absolute',
    marginTop: 557,
    marginLeft:85
  },
  input6: {
    width:308,
    height:36,
    position: 'absolute',
    marginTop: 562,
    marginLeft:60
  },
  drop2: {
    width:9.4,
    height: 6.1,
    position: 'absolute',
    marginTop: 578,
    marginLeft:323
  },

  birth: {
    width:16,
    height: 16,
    position: 'absolute',
    marginTop: 518,
    marginLeft:323
  },
  textInput5: {
    fontSize: 15,
    width:295,
    color: 'grey',
    position: 'absolute',
    marginTop: 503,
    marginLeft:85
  },
  input5: {
    width:308,
    height:36,
    position: 'absolute',
    marginTop: 509,
    marginLeft:60
  },

  textInput4: {
    fontSize: 15,
    width:295,
    color: 'grey',
    position: 'absolute',
    marginTop: 450,
    marginLeft:85
  },
  input4: {
    width:308,
    height:36,
    position: 'absolute',
    marginTop: 456,
    marginLeft:60
  },

  drop: {
    width:9.4,
    height: 6.1,
    position: 'absolute',
    marginTop: 417,
    marginLeft:323
  },
  textInput3: {
    fontSize: 15,
    width:295,
    color: 'grey',
    position: 'absolute',
    marginTop: 397,
    marginLeft:85
  },
  input3: {
    width:305,
    height:36,
    position: 'absolute',
    marginTop: 403,
    marginLeft:60
  },

  textInput2: {
    fontSize: 15,
    width:295,
    color: 'grey',
    position: 'absolute',
    marginTop: 345,
    marginLeft:85
  },
  input2: {
    width:305,
    height:36,
    position: 'absolute',
    marginTop: 350,
    marginLeft:60
  },

  textInput1: {
    fontSize: 15,
    width:295,
    color: 'grey',
    position: 'absolute',
    marginTop: 290,
    marginLeft:85
  },
  input1: {
    width:305,
    height:36,
    position: 'absolute',
    marginTop: 297,
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
  signup: {
    width:82,
    height:20,
    position: 'absolute',
    marginTop: 44,
    marginLeft:166
  },
  logo: {
    width:168,
    height:61,
    position: 'absolute',
    marginTop: 162,
    marginLeft:123
  },

})
