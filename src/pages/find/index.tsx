import React from 'react';
import {Text, View, Button} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
function DetailsScreen({navigation}) {
  useFocusEffect(
    React.useCallback(() => {
      // Do something when the screen is focused
      // tooltip
      console.log('DetailsScreen is focused');
      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
        console.log('DetailsScreen is unfocused');
      };
    }, []),
  );
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Find Screen</Text>
    </View>
  );
}

export default DetailsScreen;
