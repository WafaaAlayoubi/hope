/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

// import { DrawerNavigator } from 'react-navigation';
//
// import SideMenu from './SideMenu/SideMenu'
// import stackNav from './app/stacknav';
// import {Dimensions} from 'react-native';
//
// const drawernav = DrawerNavigator({
//   Item1: {
//       screen: stackNav,
//     }
//   }, {
//     contentComponent: SideMenu,
//     drawerWidth: Dimensions.get('window').width - 120,
// });

AppRegistry.registerComponent(appName, () => App);
