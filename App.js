/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Signup from './src/Doctor/Signup';
import Forget from './src/Doctor/Forget';
import {
  createStackNavigator,
} from 'react-navigation';
import Choose from './src/patient/Choose';
import Login from './src/Doctor/Login';
import HomeDoctor from './src/Doctor/HomeDoctor';
import AddPatient from './src/Doctor/AddPatient';
import ViewPatients from './src/Doctor/ViewPatients';
import Booking from './src/Doctor/Booking';
import FreeClinics from './src/Doctor/FreeClinics';



export default class App extends Component<Props>{
  render(){
    return(
      <AppStackNavigator />
    );
  }
}

const AppStackNavigator = createStackNavigator({
  Home:  Choose ,
  Profile:  Login,
  Signup: Signup,
  Forget: Forget,
  HomeDoctor: HomeDoctor,
  AddPatient: AddPatient,
  ViewPatients: ViewPatients,
  Booking: Booking,
  FreeClinics: FreeClinics
},
{
  cardStyle: { backgroundColor: '#FFFFFF' },
});
