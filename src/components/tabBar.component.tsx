import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import Animated, {useAnimatedStyle, withTiming} from 'react-native-reanimated';
import {useTranslation} from 'react-i18next';
import colors from '@theme/colors';
import {fonts, fontSizes} from '@theme/typography/fonts';

const CustomTabBar = ({state, navigation}: BottomTabBarProps) => {
  const {t} = useTranslation();
  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;

        const onPress = () => {
          if (!isFocused) {
            navigation.navigate(route.name);
          }
        };

        const animatedStyle = useAnimatedStyle(() => {
          return {
            borderTopWidth: withTiming(isFocused ? 2 : 0),
            borderTopColor: colors.primary.dark,
          };
        });

        const label =
          route.name === 'PostList' ? t('TABS.POSTS') : t('TABS.DETAIL');

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityState={isFocused ? {selected: true} : {}}
            onPress={onPress}
            style={styles.tab}>
            <Animated.View
              style={[
                styles.indicator,
                animatedStyle,
                {
                  backgroundColor: isFocused
                    ? colors.primary.dark
                    : colors.background,
                },
              ]}
            />
            <Text
              style={{
                color: isFocused ? colors.primary.dark : colors.text.primary,
                fontFamily: fonts.bold,
                fontSize: fontSizes.large,
              }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    height: 60,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  indicator: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 2,
  },
});

export default CustomTabBar;
