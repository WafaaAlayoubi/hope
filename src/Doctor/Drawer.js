import React, {Component} from 'react';
import {Platform, StyleSheet, Text, TextInput,View, TouchableOpacity,Image,Button} from 'react-native';
import Sidebar from 'react-native-sidebar';

import {
  createDrawerNavigator,
} from 'react-navigation';
import MyHomeScreen from './Forget';

export default class Drawer extends Component<Props>  {
  render() {
    return (
      <Sidebar
				ref={(ref) => this._drawer = ref}
				leftSidebar={ this.renderLeftSidebar() }
				rightSidebar={ this.renderRightSidebar() }
				style={{ flex: 1, backgroundColor: 'black' }}>
			{ this.renderContent() }
		</Sidebar>
    );
  }
}
