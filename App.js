import {Text,View} from'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import WarsawScreen from './screens/WarsawScreen';
import LondonScreen from './screens/LondonScreen';
import NewYorkScreen from './screens/NewYorkScreen';
import NewDelhiScreen from './screens/NewDelhiScreen';
import LosAngelesScreen from './screens/LosAngelesScreen';


export default function App(){
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Warsaw">
        <Tab.Screen name="Los Angeles" component={LosAngelesScreen} />
        <Tab.Screen name="New York" component={NewYorkScreen} />
        <Tab.Screen name="London" component={LondonScreen} />
        <Tab.Screen name="Warsaw" component={WarsawScreen} />
        <Tab.Screen name="New Delhi" component={NewDelhiScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
