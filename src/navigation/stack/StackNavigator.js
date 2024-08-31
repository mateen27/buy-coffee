import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../../screens/splash/SplashScreen';
import Onboarding from '../../screens/onboarding/Onboarding';
import DrawerParent from '../drawer/DrawerParent';
import BottomParent from '../bottom/BottomParent';

const Stack = createStackNavigator();

function StackNavigation() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='Splash' component={SplashScreen} options={{ headerShown: false }}/>

            {/* Redirecting to the Drawer */}
            <Stack.Screen name='DrawerParent' component={DrawerParent} options={{ headerShown: false }}/>

            {/* Redirecting to the Bottom */}
            <Stack.Screen name='BottomParent' component={BottomParent} options={{ headerShown: false }}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigation;