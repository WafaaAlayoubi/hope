import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import {Icon} from 'native-base';
import Ax from "../../hoc/Ax";

const listItem = (props) => {
   return (
     <View style={[styles.listBack]}>
     <Image  style={{width:357.82,height:96.16}} source={require('../img/viewPatients/drawable-hdpi/Rectangle1470.png')} />
     <Image  style={{
       width:29.07,
       height:29.07,
       position: 'absolute',
     marginTop: 5,
     marginLeft:33}} source={require('../img/viewPatients/drawable-hdpi/5142.png')} />
     <Text style={[styles.textName]}>{this.state.pname}</Text>
     <Text style={[styles.textName2]}>{this.state.dateOfBirth}</Text>
     <Text style={[styles.textName3]}>{this.state.discription}</Text>
     </View>
);

};

const styles = StyleSheet.create({
   secondary: {
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
     listBack: {
       width:357.82,
       height:96.16,
       position: 'absolute',
       marginTop: 108,
       marginLeft:28
     },
});

export default listItem;
