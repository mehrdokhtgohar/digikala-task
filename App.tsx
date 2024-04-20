import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {enableScreens} from 'react-native-screens';
import {Provider} from 'react-redux';
import {store} from './store/store';
import MarketDetail from './android/app/src/screens/MarketDetail.screen';
import {ThemeProvider} from './android/app/theme/context';
import './android/app/language/i18n';
import {RootStackParamList} from './navigation/navigator';
import MarketList from './android/app/src/screens/MarketList.screen';
const Stack = createStackNavigator<RootStackParamList>();
enableScreens();

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <NavigationContainer>
          <SafeAreaView style={styles.container}>
            <Stack.Navigator initialRouteName="MarketList">
              <Stack.Screen
                name="MarketList"
                component={MarketList}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="MarketDetail"
                component={MarketDetail}
                options={{headerShown: false}}
              />
            </Stack.Navigator>
          </SafeAreaView>
        </NavigationContainer>
      </ThemeProvider>
    </Provider>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {flex: 1},
});
