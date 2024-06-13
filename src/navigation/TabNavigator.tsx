import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../pages/Home';
import OrderScreen from '../pages/Order';
import FindScreen from '../pages/Find';
import MyScreen from '../pages/My';

const Tab = createBottomTabNavigator();

export function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        options={{tabBarLabel: '外卖'}}
        component={HomeScreen}
      />
      <Tab.Screen
        name="Find"
        options={{tabBarLabel: '搜索'}}
        component={FindScreen}
      />
      <Tab.Screen
        name="Order"
        options={{tabBarLabel: '订单'}}
        component={OrderScreen}
      />
      <Tab.Screen
        name="My"
        options={{tabBarLabel: '我的'}}
        component={MyScreen}
      />
    </Tab.Navigator>
  );
}
