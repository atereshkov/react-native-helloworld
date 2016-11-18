/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text, DrawerLayoutAndroid, TouchableHighlight,
  View
} from 'react-native';

var ImagePicker = require('NativeModules').ImagePicker;

var HelloProject = React.createClass({
    openDrawer:function() {
        this.refs['DRAWER'].openDrawer()

        ImagePicker.openSelectDialog(
            {}, // no config yet
            (uri) => { console.log(uri) },
            (error) => { console.log(error) }
        )
    },
    render: function() {
        var navigationView = (
            <View style={{flex: 1, backgroundColor: '#fff'}}>
              <Text>{'Im in the drawer'}</Text>
            </View>
        );
        return (
            <DrawerLayoutAndroid
                drawerWidth={300}
                ref={'DRAWER'}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                renderNavigationView={() => navigationView}>
              <View style={{flex: 1, alignItems: 'center'}}>
                <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>Hello</Text>
                <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>World!</Text>
                <TouchableHighlight onPress={this.openDrawer}>
                  <Text>{'Open Drawer / Open Select Dialog'}</Text>
                </TouchableHighlight>
              </View>
            </DrawerLayoutAndroid>
        );
    }
});

AppRegistry.registerComponent('HelloProject', () => HelloProject);
