import React, {Component} from 'react';
import {Platform, StyleSheet, Text, TextInput,View, TouchableOpacity,Image,Button} from 'react-native';

export default class Login extends Component<Props> {

  static navigationOptions = {
    header: null,
  }

  render() {
    return (
      <View>

        <TouchableOpacity style = {[styles.side]} >
          <Image style={{width:16,height:16}} source={require('../img/homeDoctor/num1/Union4.png')} />
        </TouchableOpacity>


        <Image style={[styles.home]} source={require('../img/homeDoctor/num1/home.png')} />


        <TouchableOpacity style = {[styles.rec1]} onPress={() => this.props.navigation.navigate('AddPatient')}>
          <Image style={{width:178,height:156.77}} source={require('../img/homeDoctor/num1/Rectangle176.png')} />
          <Image style={[styles.user]} source={require('../img/homeDoctor/num1/user.png')} />
          <Image style={[styles.add]} source={require('../img/homeDoctor/num1/AddPatient.png')} />
        </TouchableOpacity>

        <TouchableOpacity style = {[styles.rec2]} onPress={() => this.props.navigation.navigate('ViewPatients')}>
        <Image style={{width:178,height:156.77}} source={require('../img/homeDoctor/num1/Rectangle176.png')} />
        <Image style={[styles.eye]} source={require('../img/homeDoctor/num1/eye.png')} />
        <Image style={[styles.view]} source={require('../img/homeDoctor/num1/ViewPatients.png')} />
        </TouchableOpacity>

        <TouchableOpacity style = {[styles.rec3]} onPress={() => this.props.navigation.navigate('MedicineandAppointmentsChoose')}>
        <Image style={{width:178,height:156.77}} source={require('../img/homeDoctor/num1/Rectangle176.png')} />
        <Image style={[styles.appo]} source={require('../img/homeDoctor/num1/today.png')} />
        <Image style={[styles.med]} source={require('../img/homeDoctor/num1/pills.png')} />
        <Image style={[styles.medandapp]} source={require('../img/homeDoctor/num1/Medicine&appointments.png')} />
        </TouchableOpacity>

        <TouchableOpacity>
        <Image style={[styles.rec4]} source={require('../img/homeDoctor/num1/Rectangle176.png')} />
        <Image style={[styles.eye1]} source={require('../img/homeDoctor/num1/eye.png')} />
        <Image style={[styles.appo1]} source={require('../img/homeDoctor/num1/today.png')} />
        <Image style={[styles.viewToday]} source={require('../img/homeDoctor/num1/ViewPatientsToday.png')} />
        </TouchableOpacity>

        <TouchableOpacity>
        <Image style={[styles.rec5]} source={require('../img/homeDoctor/num1/Rectangle176.png')} />
        <Image style={[styles.chat]} source={require('../img/homeDoctor/num1/chat.png')} />
        <Image style={[styles.message]} source={require('../img/homeDoctor/num1/messages.png')} />
        </TouchableOpacity>

        <TouchableOpacity>
        <Image style={[styles.rec6]} source={require('../img/homeDoctor/num1/Rectangle176.png')} />
        <Image style={[styles.book]} source={require('../img/homeDoctor/num1/book.png')} />
        <Image style={[styles.tips]} source={require('../img/homeDoctor/num1/TipsDr.png')} />
        </TouchableOpacity>


      </View>
    );
  }
}
const styles = StyleSheet.create({
  tips: {
    width:56,
    height:15,
    position: 'absolute',
    marginTop: 623,
    marginLeft:278
  },
  book: {
    width:80,
    height:80,
    position: 'absolute',
    marginTop: 521,
    marginLeft:266
  },
  rec6: {
    width:178,
    height:156.77,
    position: 'absolute',
    marginTop: 501,
    marginLeft:217
  },
  message: {
    width:72,
    height:15,
    position: 'absolute',
    marginTop: 623,
    marginLeft:73
  },
  chat: {
    width:80,
    height:80,
    position: 'absolute',
    marginTop: 521,
    marginLeft:69
  },
  rec5: {
    width:178,
    height:156.77,
    position: 'absolute',
    marginTop: 501,
    marginLeft:20
  },
  viewToday: {
    width:144,
    height:15,
    position: 'absolute',
    marginTop: 437,
    marginLeft:234
  },
  appo1: {
    width:49,
    height:49,
    position: 'absolute',
    marginTop: 370,
    marginLeft:305
  },
  eye1: {
    width:80,
    height:80,
    position: 'absolute',
    marginTop: 335,
    marginLeft:262
  },
  rec4: {
    width:178,
    height:156.77,
    position: 'absolute',
    marginTop: 315,
    marginLeft:217
  },
  medandapp: {
    width:168,
    height:15,
    position: 'absolute',
    marginTop: 120,
    marginLeft:5
  },
  med: {
    width:56,
    height:56,
    position: 'absolute',
    marginTop: 50,
    marginLeft:95
  },
  appo: {
    width:80,
    height:80,
    position: 'absolute',
    marginTop: 20,
    marginLeft:50
  },
  rec3: {
    width:178,
    height:156.77,
    position: 'absolute',
    marginTop: 315,
    marginLeft:20
  },
  view: {
    width:96,
    height:15,
    position: 'absolute',
    marginTop: 114,
    marginLeft:258
  },
  eye: {
    width:80,
    height:80,
    position: 'absolute',
    marginTop: 20,
    marginLeft:266
  },

  rec2: {
    width:178,
    height:156.77,
    position: 'absolute',
    alignItems: 'center',
    marginTop: 129,
    marginLeft:217
  },

  add: {
    width:88,
    height:15,
    position: 'absolute',
    marginTop: 120,
  },
  user: {
    width:80,
    height:80,
    position: 'absolute',
    marginTop: 20
  },
  hole: {
    backgroundColor: "#FFFFFF"
  },
  rec1: {
    width:178,
    height:156.77,
    position: 'absolute',
    alignItems: 'center',
    marginTop: 129,
    marginLeft:20
  },
  side: {
    width:16,
    height:16,
    position: 'absolute',
    marginTop: 36,
    marginLeft:36
  },
  home: {
    width:62,
    height:20,
    position: 'absolute',
    marginTop: 33,
    marginLeft:177
  },

})
