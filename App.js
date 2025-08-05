// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import OpeningScreen from './component/Open';
// import HomeScreen from './component/Home';

// const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Opening">
//         <Stack.Screen
//           name="Opening"
//           component={OpeningScreen}
//           options={{ headerShown: false }} // Use internal header in Open.js
//         />
//         <Stack.Screen
//           name="Home"
//           component={HomeScreen}
//           options={{ headerShown: false }} // Use internal header in Home.js
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Open from './component/Open';
import Home from './component/Home';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Opening">
        <Stack.Screen
          name="Opening"
          component={Open}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
