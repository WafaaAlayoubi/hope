import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity,Image,Button, TextInput} from 'react-native';

export default class Choose extends Component<Props> {
  state= {
    search: ''
  }

  static navigationOptions = {
    header: null,
  }

  render(){
    return(
      <View>
        <Image style={[styles.header]} source={require('../img/booking/drawable-hdpi/Rectangle179.png')} />
        <Image style={[styles.menu]} source={require('../img/booking/drawable-hdpi/menu.png')} />
        <Image style={[styles.free]} source={require('../img/booking/drawable-hdpi/Freeclinics.png')} />
        <Image style={[styles.more]} source={require('../img/booking/drawable-hdpi/more.png')} />
        <Image style={[styles.searchBox]} source={require('../img/booking/drawable-hdpi/Rectangle395.png')} />
        <Image style={[styles.search]} source={require('../img/booking/drawable-hdpi/Path99.png')} />
        <TextInput
          secureTextEntry
          placeholder="Search"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={search => this.setState({ search })}
          value={this.state.search}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    width:343,
    position: 'absolute',
    marginTop: 75,
    marginLeft:60
  },
  search: {
    width:16,
    height:16,
    position: 'absolute',
    marginTop: 92.99,
    marginLeft:48
  },
  searchBox: {
    width:343,
    height:23.98,
    position: 'absolute',
    marginTop: 86,
    marginLeft:36
  },
  more: {
    width:3,
    height:15,
    position: 'absolute',
    marginTop: 33,
    marginLeft:370
  },
  free: {
    width:100,
    height:23,
    position: 'absolute',
    marginTop: 26,
    marginLeft:162
  },
  menu: {
    width:16,
    height:16,
    position: 'absolute',
    marginTop: 33,
    marginLeft:40
  },
  header: {
    width:414,
    height:118,
    position: 'absolute',
    marginTop: 0,
    marginLeft:0
  },
})
