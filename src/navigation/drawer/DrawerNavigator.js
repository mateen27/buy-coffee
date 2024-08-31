import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../../screens/main/Home';
import BottomParent from '../bottom/BottomParent';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="BottomParent" component={BottomParent} options={{ headerShown: false }}/>
    </Drawer.Navigator>
  );
}