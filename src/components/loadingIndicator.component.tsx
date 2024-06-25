import React from 'react';
import {View, StyleSheet} from 'react-native';
import Animated, {
  Easing,
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import colors from '@theme/colors';

const LoadingIndicator = () => {
  const scale = useSharedValue(1);

  scale.value = withRepeat(
    withTiming(1.5, {
      duration: 500,
      easing: Easing.inOut(Easing.ease),
    }),
    -1,
    true,
  );

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: scale.value}],
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.dot, animatedStyle]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: colors.primary.light,
  },
});

export default LoadingIndicator;
