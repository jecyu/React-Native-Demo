/**
 * React Native 布局组件，包含头部导航栏等
 */
import React from 'react';
import {View, StatusBar} from 'react-native';
import basicStyle from './basicStyle';
function BasicLayout(props) {
  return (
    <View style={basicStyle}>
      {/* <StatusBar
        animated={false}
        hidden={false}
        backgroundColor={'transparent'}
        translucent={true}
        barStyle={'light-content'}
      /> */}
      {props.children}
    </View>
  );
}

export default BasicLayout;
