import React from 'react';
import { View } from 'react-native';
import DrawerNavigator from './DrawerNavigator';

const DrawerParent = () => {

  return (
    <View style={{ flex: 1 }}>
        <DrawerNavigator/>
    </View>
  );
}

export default DrawerParent