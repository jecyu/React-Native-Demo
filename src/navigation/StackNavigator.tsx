import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import c from './routes';
const Stack = createNativeStackNavigator();
function StackNavigator() {
  return (
    <Stack.Navigator>
      {c.map((route, index) => {
        return (
          <Stack.Screen
            key={index}
            name={route.name}
            component={route.component}
            // options={route.options}
          />
        );
      })}
    </Stack.Navigator>
  );
}

export default StackNavigator;
