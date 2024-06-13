import React from 'react';
import {Text, Button} from 'react-native';
import BasicLayout from '../../layout/basic';
function HomeScreen({navigation}) {
  return (
    <BasicLayout>
      <Text style={{color: 'red'}}>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => {
          navigation.navigate('Details');
        }}
      />
    </BasicLayout>
  );
}
export default HomeScreen;
