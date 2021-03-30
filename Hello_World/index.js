/**
 * @format
 */
//brain of the app

import {AppRegistry} from 'react-native';
import App from './App'; //reading from app.js
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App); //run app after the function (script line)
