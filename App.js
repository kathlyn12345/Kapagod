import React from 'react';
import { StatusBar } from 'react-native'; 
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context'; 
import SplashScreen from './Components/Splash';
import SigninandCreate from './Components/Signinandcreate'; 
import HomeScreen from './Components/Home';
import SignIn from './Components/Signin';
import SignUp from './Components/Signup';
import AllAction from './AllMovie/AllAction';
import AllComedy from './AllMovie/AllComedy';
import AllFantasy from './AllMovie/AllFantasy';
import AllHorror from './AllMovie/AllHorror';
import AllRomance from './AllMovie/AllRomance';

const Stack = createStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar barStyle="light-content" backgroundColor="#000000" />

        <Stack.Navigator initialRouteName="SplashScreen">
          <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SigninandCreate"
            component={SigninandCreate}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AllAction"
            component={AllAction}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AllComedy"
            component={AllComedy}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AllFantasy"
            component={AllFantasy}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AllHorror"
            component={AllHorror}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AllRomance"
            component={AllRomance}
            options={{ headerShown: false }}
          />
        
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
