import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../src/screens/HomeScreen'; // Import HomeScreen
import Popupscreen from '../src/screens/Popupscreen';
import Lgscreen from '../src/screens/Lgscreen';
import Loginscreen from '../src/screens/Loginscreen';
import Signupscreen from '../src/screens/Signupscreen';
import Dashboard from '../src/screens/Dashboard';
import Detail from '../src/screens/Detail';
import Payment from '../src/screens/Payment';
import Bottomtabnavigation from './Bottomtabnavigation';
import Orders from '../src/screens/Orders';
import EnterEmailScreen from '../src/screens/EnterEmailScreen';
import EnterOTPScreen from '../src/screens/EnterOTPScreen';
import ResetPasswordScreen from '../src/screens/ResetPasswordScreen';
import SuccesScreen from '../src/screens/SuccesScreen';



const Stack = createStackNavigator();

const Appnavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="A"
          component={Popupscreen}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forFadeFromCenter,
          }}
        />

        <Stack.Screen
          name="B"
          component={Lgscreen}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forFadeFromCenter,
          }}
        />
        <Stack.Screen name="C" component={Loginscreen} />
        <Stack.Screen name="I" component={EnterEmailScreen} />
        <Stack.Screen name="J" component={EnterOTPScreen} />
        <Stack.Screen name="L" component={ResetPasswordScreen} />
        <Stack.Screen name="D" component={Signupscreen} />
        <Stack.Screen name="E" component={Dashboard} />
        <Stack.Screen name="F" component={Detail} />
        <Stack.Screen name="K" component={Orders} />
        <Stack.Screen name="G" component={Payment} />
        <Stack.Screen name="M" component={SuccesScreen} />
        <Stack.Screen name="H" component={Bottomtabnavigation} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Appnavigation;