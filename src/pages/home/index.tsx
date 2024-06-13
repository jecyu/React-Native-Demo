import React from 'react';
import {Text, Button} from 'react-native';
import {Button as AntdButton} from '@ant-design/react-native';
import BasicLayout from '../../layout/basic';
function HomeScreen({navigation}) {
  return (
    <BasicLayout>
      <Text style={{color: 'red'}}>Home Screen</Text>
      <AntdButton
        onPress={() => {
          navigation.navigate('Find');
        }}>
        antd mobile rn button
      </AntdButton>
      <Button title="react native button" />
    </BasicLayout>
  );
}
export default HomeScreen;
