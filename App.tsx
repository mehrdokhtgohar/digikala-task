import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import MarketList from './android/app/src/screens/marketList.screen';
import {createStackNavigator} from '@react-navigation/stack';
import {enableScreens} from 'react-native-screens';
import {Provider} from 'react-redux';
import {store} from './store/store';
import MarketDetail from './android/app/src/screens/MarketDetail.screen';

const Stack = createStackNavigator();
enableScreens();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaView style={styles.container}>
          <Stack.Navigator initialRouteName="MarketList">
            <Stack.Screen name="MarketList" component={MarketList} />
            <Stack.Screen name="MarketDetail" component={MarketDetail} />
          </Stack.Navigator>
        </SafeAreaView>
      </NavigationContainer>
    </Provider>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {flex: 1},
});
