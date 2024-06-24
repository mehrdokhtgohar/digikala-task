import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {enableScreens} from 'react-native-screens';
import {RootStackParamList} from './navigation/navigator';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import PostsList from '@components/PostList.component';
const Stack = createStackNavigator<RootStackParamList>();
enableScreens();
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <SafeAreaView style={styles.container}>
          <Stack.Navigator initialRouteName="PostList">
            <Stack.Screen
              name="PostList"
              component={PostsList}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </SafeAreaView>
      </NavigationContainer>
    </QueryClientProvider>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {flex: 1},
});
