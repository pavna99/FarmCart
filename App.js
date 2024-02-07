/*import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
*/

// App.js
import 'react-native-gesture-handler'; 
import React from 'react';
import AppNavigator from './Screens/AppNavigator';

export default function App() {
  return <AppNavigator />;
}
