import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {enableScreens} from 'react-native-screens';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import NavigationBar from '@components/navigationBar.component';
import '@locales/index';
enableScreens();
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <SafeAreaView style={styles.container}>
          <NavigationBar />
        </SafeAreaView>
      </NavigationContainer>
    </QueryClientProvider>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {flex: 1},
});
